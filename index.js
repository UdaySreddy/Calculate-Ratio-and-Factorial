let factorialOfNumbe = require("../factorial/index");
let ratioOfTwoNumbers = require("../ratio/index");

let ratioAndFactorial = (x, y, z) => {
  let ratio = ratioOfTwoNumbers(x, y);
  let factorial = factorialOfNumbe(z);

  return { ratio, factorial };
};
console.log(ratioAndFactorial(5, 10, 15));

module.export = ratioAndFactorial;
