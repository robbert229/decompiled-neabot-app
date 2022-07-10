var module12 = require('./12'),
  module591 = require('./591');

if (!module591.default)
  throw new Error(
    '[@RNC/AsyncStorage]: NativeModule: AsyncStorage is null.\n\nTo fix this issue try these steps:\n\n  \u2022 Run `react-native link @react-native-community/async-storage` in the project root.\n\n  \u2022 Rebuild and restart the app.\n\n  \u2022 Run the packager with `--reset-cache` flag.\n\n  \u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then rebuild and re-run the app.\n\n  \u2022 If this happens while testing with Jest, check out docs how to integrate AsyncStorage with it: https://react-native-community.github.io/async-storage/docs/advanced/jest\n\nIf none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-async-storage/issues \n'
  );

function o(t, n) {
  var u = arguments.length > 1;

  if (
    ('string' != typeof t &&
      console.warn(
        '[AsyncStorage] Using ' + typeof t + ' type for key is not supported. This can lead to unexpected behavior/errors. Use string instead.\nKey passed: ' + t + '\n'
      ),
    u && 'string' != typeof n)
  ) {
    if (null == n)
      throw new Error(
        '[AsyncStorage] Passing null/undefined as value is not supported. If you want to remove value, Use .remove method instead.\nPassed value: ' +
          n +
          '\nPassed key: ' +
          t +
          '\n'
      );
    console.warn(
      '[AsyncStorage] The value for key "' +
        t +
        '" is not a string. This can lead to unexpected behavior/errors. Consider stringifying it.\nPassed value: ' +
        n +
        '\nPassed key: ' +
        t +
        '\n'
    );
  }
}

var s = {
  _getRequests: [],
  _getKeys: [],
  _immediate: null,
  getItem: function (t, n) {
    return new Promise(function (s, c) {
      o(t);
      module591.default.multiGet([t], function (t, u) {
        var o = u && u[0] && u[0][1] ? u[0][1] : null,
          f = l(t);
        if (n) n(f && f[0], o);
        if (f) c(f[0]);
        else s(o);
      });
    });
  },
  setItem: function (t, n, s) {
    return new Promise(function (c, f) {
      o(t, n);
      module591.default.multiSet([[t, n]], function (t) {
        var n = l(t);
        if (s) s(n && n[0]);
        if (n) f(n[0]);
        else c(null);
      });
    });
  },
  removeItem: function (t, n) {
    return new Promise(function (s, c) {
      o(t);
      module591.default.multiRemove([t], function (t) {
        var u = l(t);
        if (n) n(u && u[0]);
        if (u) c(u[0]);
        else s(null);
      });
    });
  },
  mergeItem: function (t, n, s) {
    return new Promise(function (c, f) {
      o(t, n);
      module591.default.multiMerge([[t, n]], function (t) {
        var n = l(t);
        if (s) s(n && n[0]);
        if (n) f(n[0]);
        else c(null);
      });
    });
  },
  clear: function (t) {
    return new Promise(function (n, o) {
      module591.default.clear(function (u) {
        var s = c(u);
        if (t) t(s);
        if (s) o(s);
        else n(null);
      });
    });
  },
  getAllKeys: function (t) {
    return new Promise(function (n, o) {
      module591.default.getAllKeys(function (u, s) {
        var l = c(u);
        if (t) t(l, s);
        if (l) o(l);
        else n(s);
      });
    });
  },
  flushGetRequests: function () {
    var t = this._getRequests,
      o = this._getKeys;
    this._getRequests = [];
    this._getKeys = [];
    module591.default.multiGet(o, function (u, o) {
      var s = {};
      if (o)
        o.forEach(function (t) {
          var u = module12.default(t, 2),
            o = u[0],
            l = u[1];
          s[o] = l;
          return l;
        });

      for (var l = t.length, c = 0; c < l; c++) {
        var f = t[c],
          h = f.keys.map(function (t) {
            return [t, s[t]];
          });
        if (f.callback) f.callback(null, h);
        if (f.resolve) f.resolve(h);
      }
    });
  },
  multiGet: function (t, n) {
    var u = this;
    if (!this._immediate)
      this._immediate = setImmediate(function () {
        u._immediate = null;
        u.flushGetRequests();
      });
    var o = {
        keys: t,
        callback: n,
        keyIndex: this._getKeys.length,
        resolve: null,
        reject: null,
      },
      s = new Promise(function (t, n) {
        o.resolve = t;
        o.reject = n;
      });

    this._getRequests.push(o);

    t.forEach(function (t) {
      if (-1 === u._getKeys.indexOf(t)) u._getKeys.push(t);
    });
    return s;
  },
  multiSet: function (t, s) {
    return new Promise(function (c, f) {
      t.forEach(function (t) {
        var u = module12.default(t, 2);
        o(u[0], u[1]);
      });
      module591.default.multiSet(t, function (t) {
        var n = l(t);
        if (s) s(n);
        if (n) f(n);
        else c(null);
      });
    });
  },
  multiRemove: function (t, n) {
    return new Promise(function (s, c) {
      t.forEach(function (t) {
        return o(t);
      });
      module591.default.multiRemove(t, function (t) {
        var u = l(t);
        if (n) n(u);
        if (u) c(u);
        else s(null);
      });
    });
  },
  multiMerge: function (t, n) {
    return new Promise(function (o, s) {
      module591.default.multiMerge(t, function (t) {
        var u = l(t);
        if (n) n(u);
        if (u) s(u);
        else o(null);
      });
    });
  },
};

function l(t) {
  return !t || (Array.isArray(t) && 0 === t.length)
    ? null
    : (Array.isArray(t) ? t : [t]).map(function (t) {
        return c(t);
      });
}

function c(t) {
  if (!t) return null;
  var n = new Error(t.message);
  n.key = t.key;
  return n;
}

if (!module591.default.multiMerge) {
  delete s.mergeItem;
  delete s.multiMerge;
}

var f = s;
exports.default = f;
