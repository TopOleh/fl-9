function reverseNumber (num) {
  let arr, negativeNumb;
  arr = (num + '').split('');
  arr[0] === '-' ? negativeNumb = arr.shift() : negativeNumb = '';
  return +(negativeNumb + arr.reverse().join(''));
}
