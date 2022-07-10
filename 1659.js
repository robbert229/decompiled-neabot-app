exports.setSiblingWrapper = function (t) {
  v = t;
};

exports.RootSiblingParent = function (t) {
  var u = t.inactive,
    o = React.useState(function () {
      var t = module1661.default(module1660.default, h),
        n = t.Root,
        o = t.manager;
      j.push(o);
      if (u) P.add(o);
      return {
        Root: n,
        manager: o,
      };
    }),
    l = module12.default(o, 1)[0];
  React.useEffect(
    function () {
      return function () {
        if (l) {
          var t = j.indexOf(l.manager);
          if (t > 0) j.splice(t, 1);
        }
      };
    },
    [l]
  );
  if (u && l && !P.has(l.manager)) P.add(l.manager);
  else if (!u && l && P.has(l.manager)) P.delete(l.manager);
  var p = l.Root;
  return React.default.createElement(p, null, t.children);
};

exports.RootSiblingPortal = function (t) {
  var u = React.useState(function () {
      return new w(null);
    }),
    o = module12.default(u, 1)[0];
  o.update(t.children);
  React.useEffect(
    function () {
      if (o)
        return function () {
          return o.destroy();
        };
    },
    [o]
  );
  return null;
};

var module12 = require('./12'),
  module24 = require('./24'),
  module25 = require('./25'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1660 = require('./1660'),
  module1661 = require('./1661');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

var v = function (t) {
  return t;
};

function h(t) {
  return v(t);
}

if (!(globals.__rootSiblingsInjected || globals.__rootSiblingsDisabled)) {
  ReactNative.AppRegistry.setWrapperComponentProvider(function () {
    return b;
  });
  globals.__rootSiblingsInjected = true;
}

var y = module1661.default(module1660.default, h),
  b = y.Root,
  _ = y.manager,
  O = 0,
  j = [_],
  P = new Set();

function S() {
  for (var t = j.length - 1; t >= 0; t--) {
    var n = j[t];
    if (!P.has(n)) return n;
  }

  return _;
}

var w = (function () {
  function t(n, o) {
    module24.default(this, t);
    this.id = 'root-sibling-' + (O + 1);
    this.manager = S();
    this.manager.update(this.id, n, o);
    O++;
  }

  module25.default(t, [
    {
      key: 'update',
      value: function (t, n) {
        this.manager.update(this.id, t, n);
      },
    },
    {
      key: 'destroy',
      value: function (t) {
        this.manager.destroy(this.id, t);
      },
    },
  ]);
  return t;
})();

exports.default = w;
