var module886 = require('./886');

function t() {
  this.handlers = [];
}

t.prototype.use = function (n, t, s) {
  this.handlers.push({
    fulfilled: n,
    rejected: t,
    synchronous: !!s && s.synchronous,
    runWhen: s ? s.runWhen : null,
  });
  return this.handlers.length - 1;
};

t.prototype.eject = function (n) {
  if (this.handlers[n]) this.handlers[n] = null;
};

t.prototype.forEach = function (t) {
  module886.forEach(this.handlers, function (n) {
    if (null !== n) t(n);
  });
};

module.exports = t;
