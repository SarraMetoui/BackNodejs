const db = require('../util/database');

module.exports = class Issue{
  constructor(name, description, status, date, projectid) {
    this.name= name	;
    this.description = description;
    this.status= status;
    this.date= date;
    this.projectid=projectid;

  }
  
  static fetchAll() {
    return db.execute('SELECT * FROM issue');
  }
  
  static save(issue, projectid) {
    return db.execute(
      'INSERT INTO issue (name, description, status, date, projectid) VALUES (?, ?, ?, ?, ?)',
      [issue.name, issue.description, issue.status, issue.date,  projectid]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM issue WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,issue) {
    return db.execute(
      'UPDATE issue SET name=?, description=?, status=?, date=?, privacy=? WHERE id=? ',
      [issue.name, issue.description, issue.status, issue.date, issue.privacy, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM issue WHERE id = ?', [id]);
  }

  // change status of an issue
  static getStatus(id, status) {
    return db.execute('UPDATE issue SET status=? WHERE id = ?', [status,id]);
  }

//    // selects a tasks's project name 
//    static getTaskProject(id) {
//     return db.execute('SELECT project.name FROM task, project WHERE task.id=? and project.id = task.projectid', [id]);
//   }
};

