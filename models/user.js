const db = require('../util/database');

module.exports = class User {
  constructor(name, email, password, role) {
    this.name	 = name	;
    this.email = email;
    this.password = password;
    this.role = role;
    this.number = number;
    this.address= addreess;
    this.country= country;
    this.city= city;
    this.lastname= lastname;
    this.topicid=topicid;

  }

  static find(email) {
    return db.execute('SELECT * FROM test WHERE email = ?', [email]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM test');
  }
  
  static save(user) {
    return db.execute(
      'INSERT INTO test (name, email, password, role, number, address, country, city, lastname) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user.name, user.email, user.password, user.role, user.number,user.address, user.country, user.city, user.lastname]
    );
  }

  static delete(id) {
    return db.execute('DELETE FROM test WHERE id = ?', [id]);
  }
  // sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

  // static update(user) {
  //   return db.execute('UPDATE test WHERE id = ?', [id]);
  // }

  static update(id,user) {
    return db.execute(
      'UPDATE test SET name=?, email=?, number=?, address=?, country=?, city=?, lastname=? WHERE id=? ',
      [user.name, user.email, user.number, user.address, user.country, user.city, user.lastname, id]
    );
  }

  // static update(id,user) {
  //   return db.execute(
  //     'UPDATE test SET name=?, email=? WHERE id=? ',
  //     [user.name, user.email, id]
  //   );
  // }

  static getById(id) {
    return db.execute('SELECT * FROM test WHERE id = ?', [id]);
  }

  static getTopicUsers(id) {
    return db.execute('SELECT * FROM test WHERE topicid = ?', [id]);
  }
};
