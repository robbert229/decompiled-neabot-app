var module685 = require('./685');

module.exports = function (n, _) {
  var o = n.__data__;
  return module685(_) ? o['string' == typeof _ ? 'string' : 'hash'] : o.map;
};
