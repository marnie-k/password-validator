//const validatePassword = "";
// const pwd = undefined
const determineLength = (data) => { 
  if (data.test1.length >= 8) return true 
}

const determineLower = (data) => {
for ( var i = 0; i !== data.lowerCase; i++ ) return true 
}

const determineUpper = (data) => {
for ( var i = 0; i != data.upperCase; i++) return true 
}

const determineSpChar = (data) => {
  for(var i = 0; i != (data='!@#$%^&*()'); i++) return true
}

const validatePassword = (valid) => (if (
  valid.correctLength = true +
  valid.correctLower = true +
  valid.correctUpper = true +
  valid.correctNumber = true, 
  valid.correctSpecial = true)  return true
)


const correctLength = undefined;
let correctLower = undefined;
let correctUpper = undefined;
let correctNumber = undefined;
let correctSpecial = undefined;

let valid = {
  correctLength: true,
  correctLower: true,
  correctUpper: true,
  correctNumber: true,
  correctSpecial: true,
}
//let pwd = undefined;
/*
let data = {
  test1: 'P455w0rd!',
  test2: 'P4w0rd!',
  test3: 'P455W0RD!',
  test4: 'p455w0rd!',
  test5: 'Password!'
}
*/


module.exports = validatePassword