var module44 = require('./44');

module.exports = function (t, o) {
  return function (c, s, u) {
    if (!(globals.RN$Bridgeless || module44.getViewManagerConfig(u) || undefined === c[s])) console.warn('`' + s + '` supplied to `' + u + '` has been deprecated. ' + o);

    for (var p = arguments.length, f = new Array(p > 3 ? p - 3 : 0), l = 3; l < p; l++) f[l - 3] = arguments[l];

    return t.apply(undefined, [c, s, u].concat(f));
  };
};
