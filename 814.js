Object.defineProperty(exports, 'Manager', {
  enumerable: true,
  get: function () {
    return module815.default;
  },
});

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = v(require('react')),
  module815 = require('./815'),
  module817 = v(require('./817'));

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function v(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = y(n);
  if (o && o.has(t)) return o.get(t);
  var u = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
      else u[f] = t[f];
    }

  u.default = t;
  if (o) o.set(t, u);
  return u;
}

function w() {
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

var b = (function (t, ...args) {
  module35.default(k, t);

  var y = k,
    v = w(),
    module819 = function () {
      var t,
        n = module34.default(y);

      if (v) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k() {
    var t;
    module24.default(this, k);
    (t = module819.call(this, ...args)).toast = null;
    return t;
  }

  module25.default(
    k,
    [
      {
        key: 'componentWillMount',
        value: function () {
          this.toast = new module815.default(
            React.default.createElement(
              module817.default,
              module11.default({}, this.props, {
                duration: 0,
              })
            )
          );
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          this.toast.update(
            React.default.createElement(
              module817.default,
              module11.default({}, t, {
                duration: 0,
              })
            )
          );
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.toast.destroy();
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ],
    [
      {
        key: 'showSuccess',
        value: function (t) {
          var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
          this.show(
            t,
            module11.default(
              {
                containerStyle: {
                  minWidth: 105,
                  minHeight: 105,
                  backgroundColor: 'rgba(30,30,30,.85)',
                },
                imgStyle: {
                  width: 45,
                  height: 45,
                },
                textStyle: {
                  marginTop: 10,
                },
                position: this.position.CENTER,
                imgSource: require('./819'),
              },
              o
            )
          );
        },
      },
      {
        key: 'showLoading',
        value: function (t) {
          var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
          this.show(
            t,
            module11.default(
              {
                containerStyle: {
                  minWidth: 90,
                  minHeight: 80,
                  backgroundColor: 'rgba(30,30,30,.85)',
                },
                textStyle: {
                  fontSize: 14,
                  top: 6,
                },
                mask: true,
                duration: 0,
                loading: true,
                position: this.position.CENTER,
              },
              o
            )
          );
        },
      },
      {
        key: 'show',
        value: function (t) {
          var module24,
            u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
            l = u.onHidden;

          u.onHidden = function () {
            if (module24) module24.destroy();
            if (l) l();
          };

          module24 = new module815.default(
            React.default.createElement(
              module817.default,
              module11.default({}, u, {
                visible: true,
                showText: !!t,
              }),
              t
            )
          );
          this.toast = module24;
          return module24;
        },
      },
      {
        key: 'hide',
        value: function (t) {
          if (t instanceof module815.default) t.destroy();
          else if (this.toast instanceof module815.default) this.toast.destroy();
        },
      },
    ]
  );
  return k;
})(React.Component);

b.propTypes = module817.default.propTypes;
b.position = module817.position;
b.duration = module817.duration;
var k = b;
exports.default = k;
