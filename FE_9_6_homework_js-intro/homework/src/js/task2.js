function triangleCalc() {
  const fSide = +prompt(`Pls input first side of triangle`, `1`).match(/[+-]?\d+(?:\.\d+)?/g);
  const sSide = +prompt(`Pls input second side of triangle`, `1`).match(/[+-]?\d+(?:\.\d+)?/g);
  const angle = +prompt(`Pls input angle between them in degree`, `1`).match(/[+-]?\d+(?:\.\d+)?/gi);
  let result;

  if (isNumber(fSide) && isNumber(sSide) && isNumber(angle)) {
    const halfCircleR= 180;
    const thSide = Math.sqrt( Math.pow( fSide, 2) + Math.pow( sSide, 2) -
         2 * fSide * sSide * Math.cos(Math.PI*angle/halfCircleR));
    const perimeter = thSide + sSide + fSide;
    const p = perimeter/2;
    const area = Math.sqrt(p * (p - fSide) * (p - sSide) * (p - thSide));
    result = `c length: ${floorHundred(thSide)}
              Triangle square: ${floorHundred(area)} 
              Triangle perimeter ${floorHundred(perimeter)}`;

  } else {
    result = 'Invalid data';
  }
  console.log(result);
  const stop = confirm(`Do you want calc triangle again?`);

  if (stop) {
    triangleCalc();
  } else {
    return false;
  }

}
function floorHundred(value) {

  return Math.floor(value*100)/100;
}
function isNumber(value) {
  const val = floorHundred(value);
  return !(isNaN(val) || typeof val !== `number` || val === undefined || val <= 0);
}

triangleCalc();
