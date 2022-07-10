var t = require;

module.exports = function (n) {
  return Promise.resolve().then(function () {
    return t.importAll(n);
  });
};
