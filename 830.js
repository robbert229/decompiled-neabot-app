var module831 = require('./831');

module.exports = function (t) {
  return function u(o) {
    return 0 === arguments.length || module831(o) ? u : t.apply(this, arguments);
  };
};
