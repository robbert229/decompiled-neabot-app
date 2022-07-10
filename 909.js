function t(t) {
  this.message = t;
}

t.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

t.prototype.__CANCEL__ = true;
module.exports = t;
