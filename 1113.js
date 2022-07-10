require('react-native');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  module1082 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = h(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var o = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (o && (o.get || o.set)) Object.defineProperty(f, c, o);
        else f[c] = t[c];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('./1082')),
  module1114 = require('./1114'),
  module594 = require('./594'),
  module1115 = require('./1115'),
  module1116 = require('./1116');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
}

function O() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var j = (function (t) {
  module35.default(P, t);

  var h = P,
    j = O(),
    w = function () {
      var t,
        n = module34.default(h);

      if (j) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    module24.default(this, P);
    return w.call(this, t);
  }

  module25.default(P, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          module1082.default,
          {
            locked: true,
            renderTabBar: function () {
              return React.default.createElement(module1114.default, null);
            },
          },
          React.default.createElement(module1115.default, {
            tabLabel: module594.default.t('myShare'),
          }),
          React.default.createElement(module1116.default, {
            tabLabel: module594.default.t('myAccept'),
          })
        );
      },
    },
  ]);
  return P;
})(React.default.Component);

exports.sharedNews = j;
var w = j;
exports.default = w;
