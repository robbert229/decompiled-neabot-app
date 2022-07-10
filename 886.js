var module887 = require('./887'),
  n = Object.prototype.toString;

function o(t) {
  return '[object Array]' === n.call(t);
}

function u(t) {
  return undefined === t;
}

function c(t) {
  return null !== t && 'object' == typeof t;
}

function f(t) {
  if ('[object Object]' !== n.call(t)) return false;
  var o = Object.getPrototypeOf(t);
  return null === o || o === Object.prototype;
}

function l(t) {
  return '[object Function]' === n.call(t);
}

function s(t, n) {
  if (null !== t && undefined !== t)
    if (('object' != typeof t && (t = [t]), o(t))) for (var u = 0, c = t.length; u < c; u++) n.call(null, t[u], u, t);
    else for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && n.call(null, t[f], f, t);
}

module.exports = {
  isArray: o,
  isArrayBuffer: function (t) {
    return '[object ArrayBuffer]' === n.call(t);
  },
  isBuffer: function (t) {
    return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  },
  isFormData: function (t) {
    return 'undefined' != typeof FormData && t instanceof FormData;
  },
  isArrayBufferView: function (t) {
    return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
  },
  isString: function (t) {
    return 'string' == typeof t;
  },
  isNumber: function (t) {
    return 'number' == typeof t;
  },
  isObject: c,
  isPlainObject: f,
  isUndefined: u,
  isDate: function (t) {
    return '[object Date]' === n.call(t);
  },
  isFile: function (t) {
    return '[object File]' === n.call(t);
  },
  isBlob: function (t) {
    return '[object Blob]' === n.call(t);
  },
  isFunction: l,
  isStream: function (t) {
    return c(t) && l(t.pipe);
  },
  isURLSearchParams: function (t) {
    return 'undefined' != typeof URLSearchParams && t instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return (
      ('undefined' == typeof navigator || ('ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product)) &&
      'undefined' != typeof window &&
      'undefined' != typeof document
    );
  },
  forEach: s,
  merge: function t() {
    var n = {};

    function u(u, c) {
      if (f(n[c]) && f(u)) n[c] = t(n[c], u);
      else if (f(u)) n[c] = t({}, u);
      else if (o(u)) n[c] = u.slice();
      else n[c] = u;
    }

    for (var c = 0, l = arguments.length; c < l; c++) s(arguments[c], u);

    return n;
  },
  extend: function (n, o, u) {
    s(o, function (o, c) {
      n[c] = u && 'function' == typeof o ? module887(o, u) : o;
    });
    return n;
  },
  trim: function (t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
  },
  stripBOM: function (t) {
    if (65279 === t.charCodeAt(0)) t = t.slice(1);
    return t;
  },
};
