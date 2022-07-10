var module829 = require('./829')(function (n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
});

module.exports = module829;
