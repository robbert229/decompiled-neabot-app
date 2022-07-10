Object.defineProperty(exports, 'Screen', {
  enumerable: true,
  get: function () {
    return module1487.default;
  },
});
Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function () {
    return module1487.Container;
  },
});
Object.defineProperty(exports, 'Section', {
  enumerable: true,
  get: function () {
    return module1629.default;
  },
});
Object.defineProperty(exports, 'InputX', {
  enumerable: true,
  get: function () {
    return module1630.default;
  },
});
Object.defineProperty(exports, 'PasswordInputX', {
  enumerable: true,
  get: function () {
    return module1630.PasswordInputX;
  },
});
Object.defineProperty(exports, 'ItemX', {
  enumerable: true,
  get: function () {
    return module1653.default;
  },
});
Object.defineProperty(exports, 'ButtonX', {
  enumerable: true,
  get: function () {
    return module1654.default;
  },
});
Object.defineProperty(exports, 'TouchableX', {
  enumerable: true,
  get: function () {
    return module1655.default;
  },
});

var module1487 = b(require('./1487')),
  module1629 = require('./1629'),
  module1630 = b(require('./1630')),
  module1653 = require('./1653'),
  module1654 = require('./1654'),
  module1655 = require('./1655');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

function b(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = p(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    f = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
      else o[c] = t[c];
    }

  o.default = t;
  if (u) u.set(t, o);
  return o;
}
