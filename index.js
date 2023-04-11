const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');
const topicRoutes = require('./routes/topic');
const clientRoutes = require('./routes/client');
const documentRoutes = require('./routes/document');
const errorController = require('./controllers/error');
const uploadRoutes = require('./routes/upload');
const riskRoutes = require('./routes/risk');

const app = express();

// global.__basedir = __dirname;

const cors = require('cors');


const ports = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
 
  // console.log('reqqqqh', req.headers)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*' );
  res.setHeader('Access-Control-Allow-Headers', '*' );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});


app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);
app.use('/topic', topicRoutes);
app.use('/client', clientRoutes);
app.use('/document', documentRoutes);
app.use('/files', uploadRoutes);
app.use('/risk', riskRoutes);



// app.use('/post', postsRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

// app.use(cors({
//   origin: '*'
// }));
// app.use(cors(
//   {
//     origin: true,
//     credentials: true,
//     methods:'POST,GET,PUT,OPTIONS,DELETE'
//   }
// ));
// const corsOptions = {
//   origin: "http://127.0.0.0",
// };
// app.use(cors(corsOptions));


// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);
// console.log('reeess', res);
//   // Pass to next layer of middleware
//   next();
// });
app.listen(ports, () => console.log(`Listening on port ${ports}`));