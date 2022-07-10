var module661 = require('./661'),
  module749 = require('./749'),
  t = 'object' == typeof exports && exports && !exports.nodeType && exports,
  p = t && 'object' == typeof module && module && !module.nodeType && module,
  n = p && p.exports === t ? module661.Buffer : undefined,
  y = (n ? n.isBuffer : undefined) || module749;

module.exports = y;
