const db = require('../util/database');

module.exports = class Meeting{
  constructor(name, description, start, end, date, place, projectid, week, month) {
    this.name= name	;
    this.description = description;
    this.start= start;
    this.end=end;
    this.date= date;
    this.place=place;
    this.projectid=projectid;
    this.week=week;
    this.month;

  }
  
  static fetchAll() {
    return db.execute('SELECT * FROM meeting');
  }
  
  static save(meeting, projectid) {
    return db.execute(
      'INSERT INTO meeting (name, description, start, end, date, place, projectid) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [meeting.name, meeting.description, meeting.start, meeting.end, meeting.date, meeting.place, projectid]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM meeting WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,meeting) {
    return db.execute(
      'UPDATE meeting SET name=?, description=?, start=?, end=?, date=?, place=? WHERE id=? ',
      [meeting.name, meeting.description, meeting.start, meeting.end, meeting.date, meeting.place, id]
    );
  }

  static getById(id) {
    return db.execute('SELECT * FROM meeting WHERE id = ?', [id]);
  }

  // change status of an issue
//   static getStatus(id, status) {
//     return db.execute('UPDATE meeting SET status=? WHERE id = ?', [status,id]);
//   }

//    // selects a tasks's project name 
//    static getTaskProject(id) {
//     return db.execute('SELECT project.name FROM task, project WHERE task.id=? and project.id = task.projectid', [id]);
//   }

static getProjectMeetigs(id) {
  return db.execute('SELECT * FROM meeting WHERE projectid = ?', [id]);
}

static find(date) {
    return db.execute('SELECT * FROM meeting WHERE date = ?', [date]);
  }
};

