let registerData = [];

class Post {
  constructor(username, price, gender, image) {
    this.username = username;
    this.price = price;
    this.gender = gender;
    this.image = image;
  }

  save() {
    registerData.push(this);
  }

  static fetchAll() {
    return registerData;
  }
}

module.exports = {
  Post,
  registerData,
};
