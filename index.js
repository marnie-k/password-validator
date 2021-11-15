
const determineLength = () => {
  if (determineLength.length < 8) {
    return false
  }
  else true
}

function determineNumber(password) {
  for (var i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i])) === false) return true
  }

  return false
}

const determineLower = (password) => {
  for (var i = 0; i < password.length; i++) {
    if (password[i] === (password.toLowerCase(password[i]))
    ) return true
  }

  return false
}

const determineUpper = (password) => {
  for (var i = 0; i < password.length; i++) {
    if (password[i] === (password.toUpperCase(data[i]))
    ) return true
  }

  return false
}

function determineSpChar(password) {
  for (var i = 0; i < password.length; i++) {
    if (password[i] === '!@#$%^&*()') return true
  }

  return false
}

let validatePassword = (password) => {
  if ((determineLength(password)) &&
  (determineLower(password)) &&
  (determineNumber(password)) &&
  (determineUpper(password)) &&
  (determineSpChar(password))) {
    return true
  }
  else return false
}

module.exports = validatePassword

