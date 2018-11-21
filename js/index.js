const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));
alert(solveQr(a ,b, c));

function solveQr(a, b, c,){
  const d = discrCalc(a, b, c);
  if (d < 0) {
    return "no result";
}
  if (d == 0) {
    let x = ((-b - d) / (2 * a));
    return x;
}

  if (d > 0) {
    let x1 = ((-b + d) / (2 * a));
    let x2 = ((-b - d) / (2 * a));
    return 'x1=' + x1 + ',x2=' + x2;
}
}
function discrCalc(a, b, c) {
    let d = (((b * b) - 4 * (a * c)));
    let e = Math.sqrt(d);
    return e;
    }