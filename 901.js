module.exports = function (t) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
};
