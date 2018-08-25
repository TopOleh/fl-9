function isPrime(num) {
  const defPrimeTwo = 2,
        defPrimeThree = 3;
  return num === defPrimeTwo || num === defPrimeThree ? true
  : !(num < defPrimeTwo || num % defPrimeTwo === 0 || num % defPrimeThree === 0);
}