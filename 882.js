module.exports = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (t) {
    return this.xf['@@transducer/result'](t);
  },
};
