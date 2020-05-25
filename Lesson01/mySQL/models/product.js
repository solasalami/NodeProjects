const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        console.log("Title" + this.title);
        console.log("ImageUrl" + this.imageUrl);
        console.log("Price" + this.price);
        console.log("Description" + this.description);
        return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES ( ?, ?, ? , ?)', [this.title, this.price, this.description, this.imageUrl]);


    }

    static deleteById(id) {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
    }
};