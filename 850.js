var module849 = require('./849'),
  n = Object.prototype.toString;

module.exports = function () {
  return '[object Arguments]' === n.call(arguments)
    ? function (t) {
        return '[object Arguments]' === n.call(t);
      }
    : function (n) {
        return module849('callee', n);
      };
};
