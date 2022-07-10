var regeneratorRuntime = require('regenerator-runtime'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

function p() {
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

var React = (function (t) {
  module35.default(v, t);

  var s = v,
    React = p(),
    y = function () {
      var t,
        n = module34.default(s);

      if (React) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function v() {
    module24.default(this, v);
    return y.apply(this, arguments);
  }

  module25.default(v, [
    {
      key: 'componentDidMount',
      value: function () {
        return regeneratorRuntime.default.async(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  this.checkManager();
                  t.next = 3;
                  return regeneratorRuntime.default.awrap(Promise.resolve());

                case 3:
                  this.key = this.props.manager.mount(this.props.children);

                case 4:
                case 'end':
                  return t.stop();
              }
          },
          null,
          this,
          null,
          Promise
        );
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {
        this.checkManager();
        this.props.manager.update(this.key, this.props.children);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.checkManager();
        this.props.manager.unmount(this.key);
      },
    },
    {
      key: 'checkManager',
      value: function () {
        if (!this.props.manager)
          throw new Error(
            "Looks like you forgot to wrap your root component with `Provider` component from `react-native-paper`.\n\nPlease read our getting-started guide and make sure you've followed all the required steps.\n\nhttps://callstack.github.io/react-native-paper/getting-started.html"
          );
      },
    },
    {
      key: 'render',
      value: function () {
        return null;
      },
    },
  ]);
  return v;
})(
  (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')).Component
);

exports.default = React;
