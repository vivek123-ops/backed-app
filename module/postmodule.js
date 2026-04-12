let registerData = [];

class Post {
  constructor(username, price, gender, image,place) {
    this.username = username;
    this.price = price;
    this.gender = gender;
    this.image = image;
    this.place=place;
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
