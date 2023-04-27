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
const issueRoutes = require('./routes/issue');
const meetingsRoutes = require('./routes/meetings');

const app = express();

// global.__basedir = __dirname;

const cors = require('cors');
const socketIO = require('socket.io');


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
app.use('/issue', issueRoutes);
app.use('/meetings', meetingsRoutes);


// const WebSocket = require('ws');
// const server = new WebSocket.Server({ port: 8080 });

// server.on('connection', function connection(ws) {
//   console.log('Client connected');

//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);

//     // Broadcast message to all connected clients
//     server.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });

//   ws.on('close', function close() {
//     console.log('Client disconnected');
//   });
// });

const WebSocket = require('websocket').server;
const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

const wsServer = new WebSocket({
  httpServer: server,
});

const connections = [];

wsServer.on('request', (request) => {
  const connection = request.accept(null, request.origin);
  connections.push(connection);

  connection.on('message', (message) => {
    const msg = message.utf8Data;
    console.log(`Received message: ${msg}`);
    const timestamp = new Date().toISOString();
    const data = `${timestamp} - ${msg}\n`;
    fs.appendFile('chat-history.txt', data, (err) => {
      if (err) throw err;
      console.log('Message saved to file');
    });
    connections.forEach((conn) => conn.sendUTF(msg));
  });

  connection.on('close', () => {
    console.log('Connection closed');
  });

  fs.readFile('chat-history.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading chat history file:', err);
      return;
    }
    const messages = data.split('\n');
    messages.forEach((msg) => {
      if (msg) {
        connection.sendUTF(msg);
      }
    });
  });
});


app.use(errorController.get404);

app.use(errorController.get500);


app.listen(ports, () => console.log(`Listening on port ${ports}`));