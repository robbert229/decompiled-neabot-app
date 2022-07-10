function n(n) {
  var t = 'undefined' != typeof window && window.__fbBatchedBridgeConfig && window.__fbBatchedBridgeConfig.remoteModuleConfig;
  if (!Array.isArray(t) || ('localhost' !== n && '127.0.0.1' !== n))
    return {
      hostname: n,
      passed: false,
    };
  var o = n,
    s = false;
  t.some(function (n) {
    if (!n) return false;
    var t = n[0],
      f = n[1];

    if (('AndroidConstants' === t || 'PlatformConstants' === t) && f && f.ServerHost) {
      o = f.ServerHost.split(':')[0];
      s = true;
      return true;
    } else return !('SourceCode' !== t || !f || !f.scriptURL) && ((o = f.scriptURL.replace(/https?:\/\//, '').split(':')[0]), (s = true), true);
  });
  return {
    hostname: o,
    passed: s,
  };
}

function t(n) {
  var t,
    o,
    s,
    f = console.warn;
  if ('undefined' == typeof window || !window.__DEV__ || 'function' != typeof window.require || 'metroRequire' === window.require.name) return n;

  console.warn = function () {
    if (!(arguments[0] && 'function' == typeof arguments[0].indexOf && arguments[0].indexOf("Requiring module 'NativeModules' by name") > -1)) return f.apply(console, arguments);
  };

  try {
    t = window.require('NativeModules');
  } catch (n) {}

  console.warn = f;

  if (t) {
    o = t.PlatformConstants || t.AndroidConstants;
    s = t.SourceCode;
    return o && o.ServerHost ? o.ServerHost.split(':')[0] : s && s.scriptURL ? s.scriptURL.replace(/https?:\/\//, '').split(':')[0] : n;
  } else return n;
}

module.exports = function (o) {
  if ('object' != typeof __fbBatchedBridgeConfig || ('localhost' !== o && '127.0.0.1' !== o)) return o;
  var s = n(o);
  return s.passed ? s.hostname : t(o);
};
