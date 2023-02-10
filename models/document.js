const db = require('../util/database');

module.exports = class Document{
  constructor(name, description) {
    this.name= name	;
    this.date = date;
    this.type= type; 
    this.state=state;

   

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM document');
  }
  
  static save(document) {
    return db.execute(
      'INSERT INTO document (name, date, type, state) VALUES (?, ?, ?, ?)',
      [document.name, document.date, document.type, document.state]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM document WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,document) {
    return db.execute(
      'UPDATE document SET name=?, date=?, type=?, state=? WHERE id=? ',
      [document.name, document.date, document.type, document.state, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM document WHERE id = ?', [id]);
  }

//   // selects a project including all tasks for this project
//   static getProjectTasks(id) {
//     return db.execute('SELECT * FROM task WHERE projectid = ?', [id]);
//   }

//    // selects a tasks's project name 
//    static getTaskProject(id) {
//     return db.execute('SELECT project.name FROM task, project WHERE task.id=? and project.id = task.projectid', [id]);
//   }
static getImg() {
    return db.execute('SELECT COUNT(id) AS img FROM document WHERE type="image" ');
  }
  static getVideo() {
    return db.execute('SELECT COUNT(id) AS vid FROM document WHERE type="video" ');
  }
  static getPdf() {
    return db.execute('SELECT COUNT(id) AS pdf FROM document WHERE type="pdf" ');
  }
  static getAudio() {
    return db.execute('SELECT COUNT(id) AS audio FROM document WHERE type="audio" ');
  }
};
