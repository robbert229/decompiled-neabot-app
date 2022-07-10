exports.default = function (t, F, x, C) {
  var k = x ? x.replace(/\.(otf|ttf)$/, '') : F,
    E = module1508.Platform.select({
      windows: '/Assets/' + x + '#' + F,
      android: k,
      web: k,
      default: F,
    }),
    M = PropTypes.default.oneOf(Object.keys(t)),
    j = (function (n, ...args) {
      module35.default(O, n);

      var module20 = O,
        PropTypes = R(),
        b = function () {
          var t,
            n = module34.default(module20);

          if (PropTypes) {
            var l = module34.default(this).constructor;
            t = Reflect.construct(n, arguments, l);
          } else t = n.apply(this, arguments);

          return module37.default(this, t);
        };

      function O() {
        var t;
        module24.default(this, O);
        (t = b.call(this, ...args)).root = null;

        t.handleRef = function (n) {
          t.root = n;
        };

        return t;
      }

      module25.default(O, [
        {
          key: 'setNativeProps',
          value: function (t) {
            if (this.root) this.root.setNativeProps(t);
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this.props,
              o = n.name,
              u = n.size,
              c = n.color,
              f = n.style,
              s = n.children,
              p = module52.default(n, I),
              y = o ? t[o] || '?' : '';
            if ('number' == typeof y) y = String.fromCodePoint(y);
            var b = {
                fontSize: u,
                color: c,
              },
              O = {
                fontFamily: E,
                fontWeight: 'normal',
                fontStyle: 'normal',
              };
            p.style = [b, f, O, C || {}];
            p.ref = this.handleRef;
            return React.default.createElement(module1508.Text, p, y, s);
          },
        },
      ]);
      return O;
    })(React.PureComponent);

  j.propTypes = {
    allowFontScaling: PropTypes.default.bool,
    name: M,
    size: PropTypes.default.number,
    color: PropTypes.default.any,
    children: PropTypes.default.node,
    style: PropTypes.default.any,
  };
  j.defaultProps = {
    size: _,
    allowFontScaling: false,
  };
  var T = module1510.default();

  function A(n) {
    var o = t[n] || '?';
    return 'number' == typeof o ? String.fromCodePoint(o) : o;
  }

  function B(t) {
    var o,
      l,
      u,
      c,
      f,
      module37,
      module34,
      v = arguments;
    return regeneratorRuntime.default.async(
      function (y) {
        for (;;)
          switch ((y.prev = y.next)) {
            case 0:
              if (
                ((o = v.length > 1 && undefined !== v[1] ? v[1] : _),
                (l = v.length > 2 && undefined !== v[2] ? v[2] : N),
                module1509.default(),
                (u = A(t)),
                (c = module1508.processColor(l)),
                (f = u + ':' + o + ':' + c),
                !T.has(f))
              ) {
                y.next = 8;
                break;
              }

              return y.abrupt('return', T.get(f));

            case 8:
              y.prev = 8;
              y.next = 11;
              return regeneratorRuntime.default.awrap(S.getImageForFont(E, u, o, c));

            case 11:
              module37 = y.sent;
              module34 = {
                uri: module37,
                scale: module1508.PixelRatio.get(),
              };
              T.setValue(f, module34);
              return y.abrupt('return', module34);

            case 17:
              throw ((y.prev = 17), (y.t0 = y.catch(8)), T.setError(f, y.t0), y.t0);

            case 21:
            case 'end':
              return y.stop();
          }
      },
      null,
      null,
      [[8, 17]],
      Promise
    );
  }

  j.Button = module1511.default(j);
  j.TabBarItem = module1515.default(M, B);
  j.TabBarItemIOS = j.TabBarItem;
  j.getImageSource = B;

  j.getImageSourceSync = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : _,
      o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : N;
    module1509.default();
    var l = A(t),
      u = module1508.processColor(o),
      c = l + ':' + n + ':' + u;
    if (T.has(c)) return T.get(c);

    try {
      var f = S.getImageForFontSync(E, l, n, u),
        s = {
          uri: f,
          scale: module1508.PixelRatio.get(),
        };
      T.setValue(c, s);
      return s;
    } catch (t) {
      throw (T.setError(c, t), t);
    }
  };

  j.loadFont = function () {
    var t,
      l = arguments;
    return regeneratorRuntime.default.async(
      function (u) {
        for (;;)
          switch ((u.prev = u.next)) {
            case 0:
              if (((t = l.length > 0 && undefined !== l[0] ? l[0] : x), 'ios' !== module1508.Platform.OS)) {
                u.next = 7;
                break;
              }

              if ((module1509.default(), t)) {
                u.next = 5;
                break;
              }

              throw new Error('Unable to load font, because no file was specified. ');

            case 5:
              u.next = 7;
              return regeneratorRuntime.default.awrap(S.loadFontWithFileName.apply(S, module20.default(t.split('.'))));

            case 7:
            case 'end':
              return u.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  };

  j.hasIcon = function (n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  };

  j.getRawGlyphMap = function () {
    return t;
  };

  j.getFontFamily = function () {
    return E;
  };

  return j;
};

var regeneratorRuntime = require('regenerator-runtime'),
  module20 = require('./20'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = F(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, c, f);
        else l[c] = t[c];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  module1508 = require('./1508'),
  module1509 = require('./1509'),
  module1510 = require('./1510'),
  module1511 = require('./1511'),
  module1515 = require('./1515'),
  I = ['name', 'size', 'color', 'style', 'children'];

function F(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (F = function (t) {
    return t ? o : n;
  })(t);
}

function R() {
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

var S = module1508.NativeModules.RNVectorIconsManager || module1508.NativeModules.RNVectorIconsModule;
exports.NativeIconAPI = S;
var _ = 12;
exports.DEFAULT_ICON_SIZE = _;
var N = 'black';
exports.DEFAULT_ICON_COLOR = N;
