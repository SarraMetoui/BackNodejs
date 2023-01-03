const db = require('../util/database');

module.exports = class Topic{
  constructor(name, description) {
    this.name= name	;
    this.description = description;
   

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM topic');
  }
  
  static save(topic) {
    return db.execute(
      'INSERT INTO topic (name, description) VALUES (?, ?)',
      [topic.name, topic.description]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM topic WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,topic) {
    return db.execute(
      'UPDATE topic SET name=?, description=? WHERE id=? ',
      [topic.name, topic.description, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM topic WHERE id = ?', [id]);
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
