const database = require("../utility/database");

class Post {
  constructor(username, price, gender, image, place) {
    this.id = Math.random().toString();
    this.username = username;
    this.price = price;
    this.gender = gender;
    this.image = image;
    this.place = place;
  }

  save() {
    return database.execute(
      "INSERT INTO registation (id, name, gender, price, location, url) VALUES (?, ?, ?, ?, ?, ?)",
      [this.id, this.username, this.gender, this.price, this.place, this.image],
    );
  }

  static fetchAll() {
    return database.execute("SELECT * FROM registation");
  }

  static findid(id) {
    return database.execute("SELECT * FROM registation WHERE id = ?", [id]);
  }
}

module.exports = Post;
