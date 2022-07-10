exports.useAsyncStorage = function (t) {
  return {
    getItem: function (...args) {
      return module590.default.getItem.apply(module590.default, [t].concat(args));
    },
    setItem: function (...args) {
      return module590.default.setItem.apply(module590.default, [t].concat(args));
    },
    mergeItem: function (...args) {
      return module590.default.mergeItem.apply(module590.default, [t].concat(args));
    },
    removeItem: function (...args) {
      return module590.default.removeItem.apply(module590.default, [t].concat(args));
    },
  };
};

var module590 = require('./590');
