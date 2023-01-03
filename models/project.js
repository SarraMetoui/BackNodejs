const db = require('../util/database');

module.exports = class Project {
  constructor(name, description, status, date, deadline, department, phase, client, manager, progress, priority, version) {
    this.name= name	;
    this.description = description;
    this.status = status;
    this.date = date;
    this.deadline= deadline; 
    this.department= department;
    this.phase=phase;
    this.client=client;
    this.manager=manager;
    this.progress=progress;
    this.priority=priority; 
    this.version= version;

  }
  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM project');
  }
  
  static save(project) {
    return db.execute(
      'INSERT INTO project (name, description, status, date, deadline, department, phase, client, manager, progress, priority, version) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)',
      [project.name, project.description, project.status, project.date, project.deadline, project.department, project.phase, project.client, project.manager, project.progress, project.priority, project.version]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM project WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,project) {
    return db.execute(
      'UPDATE project SET name=?, description=?, status=?, date=?, deadline=?, department=?, phase=?, client=?, manager=?, progress=?, priority=?, version=? WHERE id=? ',
      [project.name, project.description, project.status, project.date, project.deadline, project.department, project.phase, project.client, project.manager, project.progress, project.priority, project.version, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM project WHERE id = ?', [id]);
  }

  static gettotalProjects() {
    return db.execute('SELECT COUNT(id) AS id_count FROM project');
  }

  static getCompleted() {
    return db.execute('SELECT COUNT(id) AS completed FROM project WHERE status="completed" ');
  }

  static getActive() {
    return db.execute('SELECT COUNT(id) AS active FROM project WHERE status="active" ');
  }
};
