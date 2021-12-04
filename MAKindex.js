const validatePassword= (pwd) =>{

const notLength = (pwd) => {
  if (pwd.length < 8) {
    return false
  }
  else true
}

const notNumber = (pwd) => {
  for (var i = 0; i < pwd.length; i++) {
    if (isNaN(parseInt(pwd[i])) === false) return true
  }

  return false
}

const notLower = (pwd) => {
  for (var i = 0; i < pwd.length; i++) {
    if (pwd[i] === (pwd.toLowerCase(pwd[i]))
    ) return true
  }

  return false
}

const notUpper = (pwd) => {
  for (var i = 0; i < pwd.length; i++) {
    if (pwd[i] === (pwd.toUpperCase(data[i]))
    ) return true
  }

  return false
}

function notSpChar(pwd) {
  for (var i = 0; i < pwd.length; i++) {
    if (pwd[i] === '!@#$%^&*()') return true
  }

  return false
}

function validatePassword (pwd) {
  if 
 (notLength === false &&
  notLower === false &&
  notNumber === false &&
  notUpper === false &&
  notSpChar === false); false 

  }
}
  return true


module.exports = validatePassword

