var module38 = require('./38');

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = (function (t, u) {
    if (!u && t && t.__esModule) return t;
    if (null === t || ('object' !== module38(t) && 'function' != typeof t))
      return {
        default: t,
      };
    var l = y(u);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, c, p);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  module402 = require('./402'),
  module403 = require('./403'),
  module408 = require('./408');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
    return t ? u : n;
  })(t);
}

var h = (function (t) {
  module35.default(y, t);
  var n = module401.default(y);

  function y() {
    module24.default(this, y);
    return n.apply(this, arguments);
  }

  module25.default(y, [
    {
      key: 'render',
      value: function () {
        return (
          <module402.default locale={this.props.locale}>
            <module408.ThemeProvider value={this.props.theme}>{React.createElement(module403.default.Host, null, this.props.children)}</module408.ThemeProvider>
          </module402.default>
        );
      },
    },
  ]);
  return y;
})(React.Component);

exports.default = h;
