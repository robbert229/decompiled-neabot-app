require('./48');

var module11 = require('./11'),
  module47 = require('./47'),
  module10 = require('./10'),
  module50 = require('./50'),
  module30 = require('./30'),
  s = {},
  l = new Set(),
  w = {},
  C = false;

function M() {
  if (!C) {
    w = module47.default.getConstants();
    C = true;
  }

  return w;
}

var v = module11.default({}, module47.default, {
  getConstants: function () {
    return M();
  },
  getViewManagerConfig: function (n) {
    if (undefined === s[n] && module47.default.getConstantsForViewManager)
      try {
        s[n] = module47.default.getConstantsForViewManager(n);
      } catch (t) {
        s[n] = null;
      }
    var t = s[n];
    if (t) return t;
    if (!globals.nativeCallSyncHook) return t;

    if (module47.default.lazilyLoadView && !l.has(n)) {
      var f = module47.default.lazilyLoadView(n);
      l.add(n);

      if (f.viewConfig) {
        M()[n] = f.viewConfig;
        V(n);
      }
    }

    return s[n];
  },
});

function V(n) {
  var t = M()[n];
  s[n] = t;

  if (t.Manager) {
    module30(t, 'Constants', {
      get: function () {
        var n = module10[t.Manager],
          o = {};
        if (n)
          Object.keys(n).forEach(function (t) {
            var f = n[t];
            if ('function' != typeof f) o[t] = f;
          });
        return o;
      },
    });
    module30(t, 'Commands', {
      get: function () {
        var n = module10[t.Manager],
          o = {},
          u = 0;
        if (n)
          Object.keys(n).forEach(function (t) {
            if ('function' == typeof n[t]) o[t] = u++;
          });
        return o;
      },
    });
  }
}

module47.default.getViewManagerConfig = v.getViewManagerConfig;
if (M().ViewManagerNames)
  module47.default.getConstants().ViewManagerNames.forEach(function (n) {
    module30(module47.default, n, {
      get: function () {
        return module47.default.getConstantsForViewManager(n);
      },
    });
  });
if (!globals.nativeCallSyncHook)
  Object.keys(M()).forEach(function (n) {
    if (!module50.includes(n)) {
      if (!s[n]) s[n] = M()[n];
      module30(module47.default, n, {
        get: function () {
          console.warn(
            "Accessing view manager configs directly off UIManager via UIManager['" + n + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + n + "') instead."
          );
          return v.getViewManagerConfig(n);
        },
      });
    }
  });
module.exports = v;
