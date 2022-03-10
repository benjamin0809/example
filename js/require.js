// const { a, b } = require("./require_obj");

// const { b: Oan } = require("./require_obj");
// console.log('require done')
// b.name = "benjamin1";

// setTimeout(() => { 
//   console.log("b === Oan:", b === Oan); 
// }, 500);
// console.log("obj:", { a, b });
const r1 = require("./require1");
const r2 = require("./require2");
console.log(r1 === r2)