exports.default = function (t) {
  var h = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    O = Object.keys(t);
  if (0 === O.length) throw new Error('You need to add at least one style');
  var S = module11.default(
      {
        defaultStyle: O[0],
        fallbackFamily: function () {
          return O[0];
        },
        glyphValidator: function () {
          return true;
        },
      },
      h
    ),
    I = O.reduce(function (n, u) {
      var o = t[u];
      n[u] = module1507.default(o.glyphMap || {}, o.fontFamily || '', o.fontFile || '', o.fontStyle || {});
      return n;
    }, {});

  function j(t) {
    return Object.keys(t).reduce(function (n, u) {
      return -1 !== O.indexOf(u) && true === t[u] ? u : n;
    }, S.defaultStyle);
  }

  function F(t) {
    var n = t.name,
      u = j(t);
    if (S.glyphValidator(n, u)) return I[u];
    var o = S.fallbackFamily(n);
    return -1 === O.indexOf(o) ? S.defaultStyle : I[o];
  }

  function _(t) {
    return Object.keys(t).reduce(function (n, u) {
      if (-1 === O.indexOf(u)) n[u] = t[u];
      return n;
    }, {});
  }

  function k(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '';
    return -1 === O.indexOf(t)
      ? I[S.defaultStyle]
      : n
      ? F(
          module260.default(
            {
              name: n,
            },
            t,
            true
          )
        )
      : I[j(module260.default({}, t, true))];
  }

  function w() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
      c = (function (c) {
        module35.default(h, c);

        var module11 = h,
          PropTypes = b(),
          s = function () {
            var t,
              n = module34.default(module11);

            if (PropTypes) {
              var u = module34.default(this).constructor;
              t = Reflect.construct(n, arguments, u);
            } else t = n.apply(this, arguments);

            return module37.default(this, t);
          };

        function h() {
          module24.default(this, h);
          return s.apply(this, arguments);
        }

        module25.default(h, [
          {
            key: 'render',
            value: function () {
              var module24 = o,
                u,
                o = F(this.props),
                l = (u = t).length > 0 ? module24[u] : module24,
                f = _(this.props);

              return React.default.createElement(l, f);
            },
          },
        ]);
        return h;
      })(React.PureComponent);

    c.propTypes = O.reduce(function (t, n) {
      t[n] = PropTypes.default.bool;
      return t;
    }, {});
    c.defaultProps = O.reduce(function (t, n) {
      t[n] = false;
      return t;
    }, {});
    return c;
  }

  var P = w();
  P.Button = w('Button');
  P.TabBarItem = w('TabBarItem');
  P.TabBarItemIOS = w('TabBarItemIOS');
  P.getStyledIconSet = k;

  P.getImageSource = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : module1507.DEFAULT_ICON_SIZE,
      u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : module1507.DEFAULT_ICON_COLOR;
    return k(arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : S.defaultStyle, t).getImageSource(t, n, u);
  };

  P.getFontFamily = function () {
    return k(arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : S.defaultStyle).getFontFamily();
  };

  P.getRawGlyphMap = function () {
    return k(arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : S.defaultStyle).getRawGlyphMap();
  };

  P.hasIcon = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : S.defaultStyle;
    return S.glyphValidator(t, n);
  };

  return P;
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module260 = require('./260'),
  module11 = require('./11'),
  React = O(require('react')),
  PropTypes = require('prop-types'),
  module1507 = O(require('./1507'));

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
}

function O(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = h(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
      else o[f] = t[f];
    }

  o.default = t;
  if (u) u.set(t, o);
  return o;
}

function b() {
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
