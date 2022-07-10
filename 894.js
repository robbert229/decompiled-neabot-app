var module886 = require('./886');

module.exports = function (o, n) {
  module886.forEach(o, function (t, c) {
    if (c !== n && c.toUpperCase() === n.toUpperCase()) {
      o[n] = t;
      delete o[c];
    }
  });
};
