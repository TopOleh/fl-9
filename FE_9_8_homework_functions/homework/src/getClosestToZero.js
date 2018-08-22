function getClosestToZero () {
  let closestNum = 0;
  for (let i = 1; i < arguments.length; i++) {
    if (Math.abs(arguments[i - 1]) > Math.abs(arguments[i])) {
      closestNum = arguments[i];
    }
  }
  return closestNum;
}
getClosestToZero();