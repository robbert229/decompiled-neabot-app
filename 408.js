exports.WithTheme = function (t) {
  var u = t.children,
    o = t.themeStyles,
    v = t.styles,
    s = React.default.useRef(undefined),
    h = React.default.useRef(undefined),
    T = React.default.useCallback(
      function (t) {
        if (o && undefined === h.current) h.current = o(t);

        if (v && !module410.default(s.current, v)) {
          s.current = v;
          h.current = module409.default(h.current, v);
        }

        return h.current || {};
      },
      [o, v]
    );
  return React.default.createElement(c.Consumer, null, function (t) {
    return u(T(t), t);
  });
};

var module11 = require('./11'),
  React = require('react'),
  module409 = require('./409'),
  module410 = require('./410'),
  module411 = require('./411'),
  c = React.default.createContext(module411.default);

exports.ThemeContext = c;

exports.ThemeProvider = function (t) {
  var l = t.value,
    f = t.children,
    v = React.default.useMemo(
      function () {
        return module11.default(module11.default({}, module411.default), l);
      },
      [l]
    );
  return React.default.createElement(
    c.Provider,
    {
      value: v,
    },
    f
  );
};

exports.useTheme = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    l = React.default.useContext(c);
  return module11.default(module11.default({}, l), t.theme);
};
