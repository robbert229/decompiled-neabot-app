var t = (function () {
  function t(t) {
    this.f = t;
  }

  t.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  t.prototype['@@transducer/result'] = function (t) {
    return t;
  };

  t.prototype['@@transducer/step'] = function (t, n) {
    return this.f(t, n);
  };

  return t;
})();

module.exports = function (n) {
  return new t(n);
};
