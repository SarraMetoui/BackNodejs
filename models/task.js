const db = require('../util/database');

module.exports = class Task {
  constructor(name, description, status, date, progress, priority) {
    this.name= name	;
    this.description = description;
    this.status = status;
    this.date = date;  
    this.progress=progress;
    this.priority=priority; 

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM task');
  }
  
  static save(project) {
    return db.execute(
      'INSERT INTO task (name, description, status, date, progress, priority) VALUES (?, ?, ?, ?, ?, ?)',
      [project.name, project.description, project.status, project.date, project.progress, project.priority]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM task WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,project) {
    return db.execute(
      'UPDATE task SET name=?, description=?, status=?, date=?, progress=?, priority=? WHERE id=? ',
      [project.name, project.description, project.status, project.date, project.progress, project.priority, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM task WHERE id = ?', [id]);
  }
};
