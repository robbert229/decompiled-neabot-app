exports.clearMemo = function () {
  l = {};
};

exports.getSupportedPlatformInfoSync = p;
exports.getSupportedPlatformInfoAsync = v;

exports.getSupportedPlatformInfoFunctions = function (t) {
  var u = t.syncGetter,
    f = module52.default(t, c);
  return [
    function () {
      return v(f);
    },
    function () {
      return p(
        module11.default({}, f, {
          getter: u,
        })
      );
    },
  ];
};

var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  ReactNative = require('react-native'),
  c = ['syncGetter'],
  l = {};

function s(t, n, u) {
  var c = {};
  t.filter(function (t) {
    return ReactNative.Platform.OS == t;
  }).forEach(function (t) {
    return (c[t] = n);
  });
  return ReactNative.Platform.select(
    module11.default({}, c, {
      default: u,
    })
  );
}

function p(t) {
  var n = t.getter,
    u = t.supportedPlatforms,
    o = t.defaultValue,
    f = t.memoKey;
  if (f && undefined != l[f]) return l[f];
  var c = s(u, n, function () {
    return o;
  })();
  if (f) l[f] = c;
  return c;
}

function v(t) {
  var n, o, f, c, p;
  return regeneratorRuntime.default.async(
    function (v) {
      for (;;)
        switch ((v.prev = v.next)) {
          case 0:
            if (((n = t.getter), (o = t.supportedPlatforms), (f = t.defaultValue), !(c = t.memoKey) || undefined == l[c])) {
              v.next = 5;
              break;
            }

            return v.abrupt('return', l[c]);

          case 5:
            v.next = 7;
            return regeneratorRuntime.default.awrap(
              s(o, n, function () {
                return Promise.resolve(f);
              })()
            );

          case 7:
            p = v.sent;
            if (c) l[c] = p;
            return v.abrupt('return', p);

          case 10:
          case 'end':
            return v.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}
