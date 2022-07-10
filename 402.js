var module11 = require('./11'),
  React = require('react'),
  o = React.default.createContext({});

exports.LocaleContext = o;
var n = React.default.memo(function (t) {
  var n = React.default.useMemo(
    function () {
      return {
        antLocale: module11.default(module11.default({}, t.locale), {
          exist: true,
        }),
      };
    },
    [t.locale]
  );
  return React.default.createElement(
    o.Provider,
    {
      value: n,
    },
    t.children
  );
});
exports.default = n;
