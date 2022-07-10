var t = '[object String]',
  n = Object.prototype.toString,
  o = Array.isArray;

function c(t) {
  return !!t && 'object' == typeof t;
}

module.exports = function (f) {
  return 'string' == typeof f || (!o(f) && c(f) && n.call(f) == t);
};
