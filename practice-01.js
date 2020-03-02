function getPow(num, degree) {
  if (degree === 1) {
    return num;
  }
  return num * getPow(num, degree - 1);
}
module.exports = getPow
