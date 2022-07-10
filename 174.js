(function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = f(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var p in t)
    if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
      var c = l ? Object.getOwnPropertyDescriptor(t, p) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, p, c);
      else o[p] = t[p];
    }

  o.default = t;
  if (u) u.set(t, o);
})(require('react'));

var module175 = require('./175'),
  module83 = require('./83'),
  module186 = require('./186');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

var l,
  module172 = require('./172'),
  c = module83.default({
    supportedCommands: ['focus', 'blur', 'setTextAndSelection'],
  });

exports.Commands = c;

if (globals.RN$Bridgeless) {
  module172.register('AndroidTextInput', function () {
    return module186.default;
  });
  l = 'AndroidTextInput';
} else l = module175.default('AndroidTextInput');

var s = l;
exports.default = s;
