const database = require("../utility/database");

class Post {
  constructor(username, price, gender, image, place) {
    this.username = username;
    this.price = price;
    this.gender = gender;
    this.image = image;
    this.place = place;
  }

  save() {
    return database.execute(
      "INSERT INTO registation (name, gender, price, location, url) VALUES (?, ?, ?, ?, ?)",
      [this.username, this.gender, this.price, this.place, this.image],
    );
  }

  static fetchAll() {
    return database.execute("SELECT * FROM registation");
  }

  static findid(id) {
    return database.execute("SELECT * FROM registation WHERE id = ?", [id]);
  }

  static deletePost(id) {
    return database.execute("delete from registation where id=?", [id]);
  }

  static checkfavourite(id) {
    return database.execute("select *from favourite where favourite =?", [id,]);
  }

  static addfavourite(id) {
    return database.execute("insert into favourite  values (?)", [id,]);
  }
}

module.exports = Post;
