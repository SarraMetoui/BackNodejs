const db = require('../util/database');

module.exports = class Client{
  constructor(name, manager, email, number, address) {
    this.name= name	;
    this.manager = manager;
    this.email = email;
    this.number = number; 
    this.address = address;

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM client');
  }
  
  static save(client) {
    return db.execute(
      'INSERT INTO client (name, manager, email, number, address) VALUES (?, ?, ?, ?, ?)',
      [client.name, client.manager, client.email, client.number, client.address]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM client WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,client) {
    return db.execute(
      'UPDATE client SET name=?, manager=?, email=?, number=?, address=? WHERE id=? ',
      [client.name, client.manager, client.email, client.number, client.address, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM client WHERE id = ?', [id]);
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
