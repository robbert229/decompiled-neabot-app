var module841 = require('./841');

module.exports = function (n, o) {
  return function () {
    var p = arguments.length;
    if (0 === p) return o();
    var u = arguments[p - 1];
    return module841(u) || 'function' != typeof u[n] ? o.apply(this, arguments) : u[n].apply(u, Array.prototype.slice.call(arguments, 0, p - 1));
  };
};
