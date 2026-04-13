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
      [this.username, this.gender, this.price, this.place, this.image]
    );
  }

  static fetchAll() {
    return database.execute("SELECT * FROM registation");
  }

  static findid(id) {
    return database.execute("SELECT * FROM registation WHERE id = ?", [id]);
  }

  static deletePost(id){
    return database.execute("delete from registation where id=?",[id])
  }
}

module.exports = Post;
