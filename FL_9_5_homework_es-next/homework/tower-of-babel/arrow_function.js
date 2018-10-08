var inputs = process.argv.slice(2);
let result = inputs.map((n) => {
  let newWord = n.slice(0, 1) + '';
  return newWord.toLocaleUpperCase();
}).reduce((pre, cur) => {
  return pre + cur +'';
});
console.log(result);