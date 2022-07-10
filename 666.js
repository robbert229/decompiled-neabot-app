var n,
  module667 = require('./667'),
  o = (n = /[^.]+$/.exec((module667 && module667.keys && module667.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + n : '';

module.exports = function (n) {
  return !!o && o in n;
};
