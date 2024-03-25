let oper = prompt("Matematik amalni kiriting");
let num1 = +prompt("Son kiriting");
let num2 = +prompt("Son kiriting");

function calc(opp, num3, num4) {
  let calc;
  switch (opp) {
    case `+`:
      calc = +num3 + +num4;
      return calc;
    case `-`:
      calc = num3 - num4;
      return calc;
    case `*`:
      calc = num3 * num4;
      return calc;
    case `/`:
      calc = num3 / num4;
      return calc;
    default:
      calc = "bunaqangi amal mavjud emas";
      return calc;
  }
}
let result = calc(oper, num1, num2);
console.log(result);
