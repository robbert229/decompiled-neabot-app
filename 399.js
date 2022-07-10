require('./1489');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module400 = require('./400'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = M(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module412 = require('./412'),
  module421 = require('./421'),
  module1659 = require('./1659'),
  module608 = require('./608'),
  module606 = require('./606'),
  module919 = require('./919'),
  module1490 = require('./1490'),
  module1493 = require('./1493'),
  module1665 = require('./1665'),
  module594 = require('./594');

function M(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (M = function (t) {
    return t ? l : n;
  })(t);
}

function _() {
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

var k = function () {
    try {
      var t = module594.useTranslation(),
        n = t.localeProvider,
        l = t.changeLocale,
        u = React.useCallback(
          function (t) {
            if (null != t && undefined != t && t.lan && t.country) {
              ReactNative.DeviceEventEmitter.emit('CountryChange', t.country);
              var u,
                o = t.lan,
                f = t.country,
                c = t.script;
              u = null != c && undefined != c && '' != c ? o + '-' + c + '-' + f : o + '-' + f;

              if (3 == n.id) {
                var v = {
                  id: 3,
                  name: 'fs',
                  isRTL: false,
                  languageCode: o,
                  languageTag: u,
                  countryCode: f,
                  label: 'SYSTEM',
                };
                if ('' != c) v.scriptCode = c;
                l(v);
              }
            }
          },
          [n]
        );
      React.useEffect(
        function () {
          var t = ReactNative.DeviceEventEmitter.addListener('languageChange', u);
          return function () {
            return t.remove();
          };
        },
        [u]
      );
    } catch (t) {}

    return React.default.createElement(
      module1493.Provider,
      null,
      React.default.createElement(
        module1665.AppContextProvider,
        null,
        React.default.createElement(module400.default, null, React.default.createElement(module421.NavigationContainer, null, React.default.createElement(module412.default, null)))
      )
    );
  },
  w = module606.default(),
  T = function () {
    return React.default.createElement(
      module608.StoreProvider,
      {
        store: w,
      },
      React.default.createElement(module919.LocaleContextProvider, null, React.default.createElement(module1490.ThemeProvider, null, React.default.createElement(k, null)))
    );
  },
  D = (function (t) {
    module35.default(y, t);

    var module400 = y,
      ReactNative = _(),
      p = function () {
        var t,
          n = module34.default(module400);

        if (ReactNative) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function y() {
      module24.default(this, y);
      return p.apply(this, arguments);
    }

    module25.default(y, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(module1659.RootSiblingParent, null, React.default.createElement(T, null));
        },
      },
    ]);
    return y;
  })(React.default.Component);

exports.default = D;
