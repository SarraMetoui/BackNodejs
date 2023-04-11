const db = require('../util/database');

module.exports = class Risk{
  constructor(name, description, team, phase, priority, score, impact, date) {
    this.name= name	;
    this.description = description;
    this.team = team; 
    this.phase = phase; 
    this.priority = priority; 
    this.score = score; 
    this.impact = impact; 
    this.date = date;

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM risk');
  }
  static fetchDesgin() {
    return db.execute('SELECT * FROM risk where team ="design" ');
  }
  static fetchFront() {
    return db.execute('SELECT * FROM risk where team ="front" ');
  }
  static fetchBack() {
    return db.execute('SELECT * FROM risk where team ="back" ');
  }
  static fetchTest() {
    return db.execute('SELECT * FROM risk where team ="test" ');
  }
  static fetchConception() {
    return db.execute('SELECT * FROM risk where team ="conception" ');
  }
  
  static save(risk) {
    return db.execute(
      'INSERT INTO risk (name, description, team, phase, priority, score, impact, date) VALUES (?, ?, ?, ?, ?,? , ?, ?)',
      [risk.name, risk.description, risk.team, risk.phase, risk.priority, risk.score, risk.impact, risk.date]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM risk WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,risk) {
    return db.execute(
      'UPDATE risk SET name=?, description=?, team=?, phase=?, priority=?, score=?, impact=?, date=? WHERE id=? ',
      [risk.name, risk.description, risk.team, risk.phase, risk.priority, risk.score, risk.impact,risk.date , id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM risk WHERE id = ?', [id]);
  }

//   // selects a project including all tasks for this project
//   static getProjectTasks(id) {
//     return db.execute('SELECT * FROM task WHERE projectid = ?', [id]);
//   }

//    // selects a tasks's project name 
//    static getTaskProject(id) {
//     return db.execute('SELECT project.name FROM task, project WHERE task.id=? and project.id = task.projectid', [id]);
//   }
};
