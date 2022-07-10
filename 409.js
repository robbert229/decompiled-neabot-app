var t = function (t) {
  return n(t) && !o(t);
};

function n(t) {
  return !!t && 'object' == typeof t;
}

function o(t) {
  var n = Object.prototype.toString.call(t);
  return '[object RegExp]' === n || '[object Date]' === n || u(t);
}

var c = 'function' == typeof Symbol && Symbol.for ? Symbol.for('react.element') : 60103;

function u(t) {
  return t.$$typeof === c;
}

function f(t, n) {
  return false !== n.clone && n.isMergeableObject(t) ? M(((o = t), Array.isArray(o) ? [] : {}), t, n) : t;
  var o;
}

function y(t, n, o) {
  return t.concat(n).map(function (t) {
    return f(t, o);
  });
}

function b(t, n) {
  if (!n.customMerge) return M;
  var o = n.customMerge(t);
  return 'function' == typeof o ? o : M;
}

function l(t) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(t).filter(function (n) {
        return t.propertyIsEnumerable(n);
      })
    : [];
}

function s(t) {
  return Object.keys(t).concat(l(t));
}

function p(t, n) {
  try {
    return n in t;
  } catch (t) {
    return false;
  }
}

function O(t, n) {
  return p(t, n) && !(Object.hasOwnProperty.call(t, n) && Object.propertyIsEnumerable.call(t, n));
}

function j(t, n, o) {
  var c = {};
  if (o.isMergeableObject(t))
    s(t).forEach(function (n) {
      c[n] = f(t[n], o);
    });
  s(n).forEach(function (u) {
    if (!O(t, u)) p(t, u) && o.isMergeableObject(n[u]) ? (c[u] = b(u, o)(t[u], n[u], o)) : (c[u] = f(n[u], o));
  });
  return c;
}

function M(n, o, c) {
  (c = c || {}).arrayMerge = c.arrayMerge || y;
  c.isMergeableObject = c.isMergeableObject || t;
  c.cloneUnlessOtherwiseSpecified = f;
  var u = Array.isArray(o);
  return u === Array.isArray(n) ? (u ? c.arrayMerge(n, o, c) : j(n, o, c)) : f(o, c);
}

M.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error('first argument should be an array');
  return t.reduce(function (t, o) {
    return M(t, o, n);
  }, {});
};

var v = M;
module.exports = v;
