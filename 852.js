var module829 = require('./829')(function (n, t) {
  var o = {};

  for (var f in t) o[f] = t[f];

  delete o[n];
  return o;
});

module.exports = module829;
