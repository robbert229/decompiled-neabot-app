var module11 = require('./11'),
  module12 = require('./12'),
  module18 = require('./18'),
  module3 = require('./3');

function l(o, l) {
  if (!o) return null;
  var f = module12(o, 5),
    v = f[0],
    h = f[1],
    y = f[2],
    C = f[3],
    M = f[4];
  if ((module3(!v.startsWith('RCT') && !v.startsWith('RK'), "Module name prefixes should've been stripped by the native side but wasn't for " + v), !h && !y))
    return {
      name: v,
    };
  var b = {};
  if (y)
    y.forEach(function (n, t) {
      var o = C && c(C, t),
        f = M && c(M, t);
      module3(!o || !f, 'Cannot have a method that is both async and a sync hook');
      var v = o ? 'promise' : f ? 'sync' : 'async';
      b[n] = s(l, t, v);
    });
  module11(b, h);
  if (null == b.getConstants)
    b.getConstants = function () {
      return h || Object.freeze({});
    };
  else
    console.warn(
      "Unable to define method 'getConstants()' on NativeModule '" + v + "'. NativeModule '" + v + "' already has a constant or method called 'getConstants'. Please remove it."
    );
  return {
    name: v,
    module: b,
  };
}

function f(n, t) {
  module3(globals.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
  var o = l(globals.nativeRequireModuleConfig(n), t);
  return o && o.module;
}

function s(n, t, l) {
  var f = null;
  (f =
    'promise' === l
      ? function (...args) {
          var s = new Error();
          return new Promise(function (u, f) {
            module18.enqueueNativeCall(
              n,
              t,
              args,
              function (n) {
                return u(n);
              },
              function (n) {
                return f(v(n, s));
              }
            );
          });
        }
      : function (...args) {
          var v = args.length > 0 ? args[args.length - 1] : null,
            h = args.length > 1 ? args[args.length - 2] : null,
            y = 'function' == typeof v,
            C = 'function' == typeof h;
          if (C) module3(y, 'Cannot have a non-function arg after a function arg.');
          var M = y ? v : null,
            b = C ? h : null,
            p = y + C;
          if (((args = args.slice(0, args.length - p)), 'sync' === l)) return module18.callNativeSyncHook(n, t, args, b, M);
          module18.enqueueNativeCall(n, t, args, b, M);
        }).type = l;
  return f;
}

function c(n, t) {
  return -1 !== n.indexOf(t);
}

function v(t, o) {
  return module11(o, t || {});
}

globals.__fbGenNativeModule = l;
var h = {};
if (globals.nativeModuleProxy) h = globals.nativeModuleProxy;
else if (!globals.nativeExtensions) {
  var y = globals.__fbBatchedBridgeConfig;
  module3(y, '__fbBatchedBridgeConfig is not set, cannot invoke native modules');

  var module30 = require('./30');

  (y.remoteModuleConfig || []).forEach(function (n, t) {
    var o = l(n, t);
    if (o)
      o.module
        ? (h[o.name] = o.module)
        : module30(h, o.name, {
            get: function () {
              return f(o.name, t);
            },
          });
  });
}
module.exports = h;
