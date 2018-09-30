function Product(name, description, price) {
  if (typeof name === 'object') { // in case if input will be an object
    this.name = name.name;
    this.description = name.description;
    this.price = name.price;
  } else {
    this.name = name;
    this.description = description;
    this.price = price;
  }

  let cartsIn = [];
  let productHistory = [];

  this.setPrice = function (price) {
    price < this.price ? console.error('Cant set smaller price than it is!') : this.price = price;
    return this;
  };

  this.getPrice = function () {
    return this.price;
  };

  this.add = function (cartName) {
    if (typeof cartName === 'object') { // in case of inputted object
      cartName.addNewProduct(this);
      cartName = cartName.name;
    }
    let date = new Date();
    productHistory.push(`${this.name} added to ${cartName} on ${date}`);
    cartsIn.push(cartName);
    return this;
  };

  this.removeProduct = function (cartName) {
    if (typeof cartName === 'object') { // in case of inputted object
      cartName.removeProduct(this);
      cartName = cartName.name;
    }
    let date = new Date();
    let index = cartsIn.indexOf(cartName);
    if (index === -1) {
      console.error(`${this.name} was not added to ${cartName}`);
    } else {
      productHistory.push(`${this.name} removed from ${cartName} on ${date}`);
      cartsIn.splice(index, 1);
    }
    return this;
  };

  this.getHistory = function () {
    return productHistory;
  }
}

function ShoppingCart({name, owner, maxSize}) {
  this.name = name;
  this.owner = owner;
  this.maxCount = maxSize;
  this.cartProducts = [];


  let createdDate = new Date();
  let cartHistory = [];

  cartHistory.push(`${this.name} was created in ${createdDate}`);

  this.addNewProduct = function (product) {
    product.add(this.name);
    let addedProdDate = new Date();
    product.date = addedProdDate.toDateString();
    cartHistory.push(`${product.name} was added to ${this.name} on ${addedProdDate}`);
    if (this.maxCount > this.cartProducts.length) {
      this.cartProducts.push(product);
    } else {
      let min = this.cartProducts[0];
      for (let i = 1; i < this.cartProducts.length; i++) {
        if (min.price > this.cartProducts[i].price) {
          min = this.cartProducts[i];
        }
      }
      this.removeProduct(min);
      this.cartProducts.push(product);
    }
    return this;
  };

  this.removeProduct = function (product) {
    product.removeProduct(this.name);
    let removeProdDate = new Date();
    let index = this.cartProducts.indexOf(product);
    if (index === -1) {
      console.error(`This cart does not have ${product.name}s`);
    } else {
      cartHistory.push(`${product.name} was removed to ${this.name} on ${removeProdDate}`);
      this.cartProducts.splice(index, 1);
    }
    return this;
  };

  this.getAvaragePrice = function () {
    let avgPrice = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      avgPrice += this.cartProducts[i].price;
    }
    return (avgPrice / this.cartProducts.length).toFixed(2);
  };

  this.getProducts = function () {
    return this.cartProducts;
  };

  this.getFormattedListOfProducts = function () {
    let result = [];
    let productDescription = [];

    for (let key = 0; key < this.cartProducts.length; key++) {
      productDescription.push(Object.entries(this.cartProducts[key].description).join(' and ').split(',').join('-'));
    }
    for (let i = 0; i < this.cartProducts.length; i++) {
      result.push(`${this.cartProducts[i].name} - is on ${this.name} from ${this.cartProducts[i].date}.
      Detailed product description: ${productDescription[i]}`);
    }
    return result;
  };

  this.getTotalPrice = function () {
    let sum = 0;
    for (let elem of this.cartProducts) {
      sum += elem.price;
    }
    return sum;
  };

  this.getHistory = function () {
    return cartHistory;
  }
}

const banana = new Product({
  name: 'banana',
  description: {
    color: 'yellow',
    size: 'medium'
  },
  price: 43
});
const apple = new Product({
  name: 'apple',
  description: {
    color: 'red',
    size: 'small'
  },
  price: 30
});

const orange = new Product('orange', {color: 'orange', size: 'middle'}, 450);

const stevesShopCart = new ShoppingCart({
  name: 'stevesCart',
  owner: 'Steve',
  maxSize: 5
});
apple
    .add(stevesShopCart)
    .add('JohnCart')
    .add('ColinCart')
    .add('AndrewCart');

apple
    .removeProduct(stevesShopCart)
    .removeProduct('AndrewCart');

apple
    .setPrice(10)
    .setPrice(100);

stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(apple)
    .addNewProduct(orange)
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(banana);


stevesShopCart
    .removeProduct(banana)
    .removeProduct(apple);

console.log(stevesShopCart.getAvaragePrice());
console.log(stevesShopCart.getTotalPrice());
console.log(stevesShopCart.getProducts());

console.log(stevesShopCart.getFormattedListOfProducts());
console.log(apple.getHistory());
console.log(stevesShopCart.getHistory());