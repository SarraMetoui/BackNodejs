const db = require('../util/database');

module.exports = class Task {
  constructor(name, description, status, date, progress, priority, time, duration, topicid, uid) {

    this.name= name	;
    this.description = description;
    this.status = status;
    this.date = date;  
    this.progress=progress;
    this.priority=priority; 
    this.time=time;
    this.duration=duration; 
    this.topicid=topicid;
    this.uid=uid; 

  }
    
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }
   
  static fetchAll() {
    return db.execute('SELECT * FROM task');
  }
    
  static save(task, topicid, uid) {
    
    return db.execute(
      'INSERT INTO task (name, description, status, date, progress, priority, time, duration, topicid) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?)',
      [task.name, task.description, task.status, task.date, task.progress, task.priority, task.time, task.duration, topicid]
    );
  }
  static saveuser(task, uid) {
    
    return db.execute(
      'INSERT INTO task (name, description, status, date, progress, priority, time, duration, uid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [task.name, task.description, task.status, task.date, task.progress, task.priority, task.time, task.duration, uid]
    );
  }v
  
  static delete(id) {
    return db.execute('DELETE FROM task WHERE id = ?', [id]);
  }
  
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }
  
  static update(id,task) {
    return db.execute(
      'UPDATE task SET name=?, description=?, status=?, date=?, progress=?, priority=?, time=?, duration=? WHERE id=? ',
      [task.name, task.description, task.status, task.date, task.progress, task.priority, task.time, task.duration, id]
    );
  }
  
  static getById(id) {
    return db.execute('SELECT * FROM task WHERE id = ?', [id]);
  }
  
  // selects a project including all tasks for this project
  
  static getProjectTasks(id) {
    return db.execute('SELECT * FROM task WHERE topicid = ?', [id]);
  } 
   
  // selects a tasks's project name 
  
   static getTaskProject(id) {
    return db.execute('SELECT project.name FROM task, project WHERE task.id=? and project.id = task.topicid', [id]);
  }
  
};


