const db = require('../util/database');

module.exports = class Topic{
  constructor(name, description, status, date, privacy, projectid) {
    this.name= name	;
    this.description = description;
    this.status= status;
    this.date= date;
    this.privacy= privacy;
    this.projectid=projectid;

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM topic');
  }
  
  static save(topic, projectid) {
    return db.execute(
      'INSERT INTO topic (name, description, status, date, privacy, projectid) VALUES (?, ?, ?, ?, ?, ?)',
      [topic.name, topic.description, topic.status, topic.date, topic.privacy, projectid]
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
      'UPDATE topic SET name=?, description=?, status=?, date=?, privacy=? WHERE id=? ',
      [topic.name, topic.description, topic.status, topic.date, topic.privacy, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM topic WHERE id = ?', [id]);
  }

  // selects a project including all tasks for this project
  static getProjectTopics(id) {
    return db.execute('SELECT * FROM topic WHERE projectid = ?', [id]);
  }

//    // selects a tasks's project name 
//    static getTaskProject(id) {
//     return db.execute('SELECT project.name FROM task, project WHERE task.id=? and project.id = task.projectid', [id]);
//   }
};
