let registerData = [];

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
    registerData.push(this);
  }

  static fetchAll() {
    return registerData;
  }

  static findid(id) {
    const post = registerData.find((data) => data.id == id);
    return post;
  }
}

module.exports = {
  Post,
  registerData,
};
