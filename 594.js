require('./599');

require('./593');

require('./606');

require('./915');

require('./916');

require('react-native');

c(require('./917'));
c(require('./918'));

var module595 = require('./595'),
  module596 = require('./596'),
  React = c(require('react')),
  module919 = require('./919');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (l = function (t) {
    return t ? u : n;
  })(t);
}

function c(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = l(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var s = f ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (s && (s.get || s.set)) Object.defineProperty(o, c, s);
      else o[c] = t[c];
    }

  o.default = t;
  if (u) u.set(t, o);
  return o;
}

var s = module596.default.getLocales()[0];
exports.systemLanguage = s;
var p = module595.default;
exports.default = p;

exports.useTranslation = function (t) {
  return React.useContext(module919.default);
};
