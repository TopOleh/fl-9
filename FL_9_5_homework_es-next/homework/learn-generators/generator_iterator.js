function *factorial(n){
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    yield fac*=i;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120