module.exports = function check(str, bracketsConfig) {
  return str
    .split('')
    .includes(bracketsConfig)
}
