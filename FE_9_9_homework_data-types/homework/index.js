function findType(param){
  return typeof param;
}

function forEach(arr, func) {
  for (let elem of arr) {
    func(elem);
  }
}
function map (arr, func) {
  let mappedArr = [];
  forEach( arr, elem => mappedArr.push(func(elem)));
  return mappedArr;
}

function filter(arr, func) {
  let filteredArr = [];
  forEach(arr, elem => {
    if (func(elem)) {
      filteredArr.push(elem);
    }
  });
  return filteredArr;
}

function getAdultAppleLovers(data) {
  let arr = [];
  map(filter(data, elem => {
    if (elem['age'] > 18 && elem['favoriteFruit'] === 'apple'){
      arr.push(elem['name']);
    }
  }));
  return arr;
}

function keys(array) {
  let arr = [];
  for ( let keys in array ) {
    if (array.hasOwnProperty(keys)) {
      arr.push(keys);
    }
  }
  return arr;
}

function values(array) {
  let arr = [];
  for (let values in array) {
    if (array.hasOwnProperty(values)) {
      arr.push(array[values]);
    }
  }
  return arr;
}

function showFormattedDate(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}