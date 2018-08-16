function discountCalc() {
  const price = +prompt(`Input amount of money`, `1`).match(/[+-]?\d+(?:\.\d+)?/g),
      discount = +prompt(`Input a discount`, `1`).match(/[+-]?\d+(?:\.\d+)?/g);
  let result;

  if (discount > 100) {
    if(!confirm(`Are you sure about the discount of ${discount}?`)){
      return discountCalc();
    }
  }

  if (isNumber(price) && isNumber(discount)) {

    let totalDiscount = price / 100 * discount;
    let totalPrice = price - totalDiscount;
    result = `Price without discount: ${floorHundred(price)}
              Discount: ${floorHundred(discount)}% 
              Price with discount ${floorHundred(totalPrice)}
              Saved: ${floorHundred(totalDiscount)}`;

  } else {
    result = 'Invalid data';
  }
  console.log(result);
  const stop = confirm(`Do you want calc price again?`);

  if (stop) {
    discountCalc();
  } else {
    return false;
  }
}

function floorHundred(value) {

  return Math.floor(value*100)/100;
}

function isNumber(value) {
  if ( isNaN(value) || typeof value !== `number` || value === undefined || value < 0) {
    return false;
  } else {
    return true;
  }
}

discountCalc();
