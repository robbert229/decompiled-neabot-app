var module865 = require('./865'),
  module866 = require('./866'),
  module867 = require('./867'),
  module849 = require('./849'),
  module868 = require('./868'),
  module848 = require('./848'),
  module869 = require('./869');

function l(s, c, u, o) {
  var f = module865(s),
    l = module865(c);

  function p(n, t) {
    return y(n, t, u.slice(), o.slice());
  }

  return !module866(
    function (n, s) {
      return !module866(p, s, n);
    },
    l,
    f
  );
}

function y(n, t, p, A) {
  if (module868(n, t)) return true;
  var v = module869(n);
  if (v !== module869(t)) return false;
  if (null == n || null == t) return false;
  if ('function' == typeof n['fantasy-land/equals'] || 'function' == typeof t['fantasy-land/equals'])
    return 'function' == typeof n['fantasy-land/equals'] && n['fantasy-land/equals'](t) && 'function' == typeof t['fantasy-land/equals'] && t['fantasy-land/equals'](n);
  if ('function' == typeof n.equals || 'function' == typeof t.equals) return 'function' == typeof n.equals && n.equals(t) && 'function' == typeof t.equals && t.equals(n);

  switch (v) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if ('function' == typeof n.constructor && 'Promise' === module867(n.constructor)) return n === t;
      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (typeof n != typeof t || !module868(n.valueOf(), t.valueOf())) return false;
      break;

    case 'Date':
      if (!module868(n.valueOf(), t.valueOf())) return false;
      break;

    case 'Error':
      return n.name === t.name && n.message === t.message;

    case 'RegExp':
      if (n.source !== t.source || n.global !== t.global || n.ignoreCase !== t.ignoreCase || n.multiline !== t.multiline || n.sticky !== t.sticky || n.unicode !== t.unicode)
        return false;
  }

  for (var q = p.length - 1; q >= 0; ) {
    if (p[q] === n) return A[q] === t;
    q -= 1;
  }

  switch (v) {
    case 'Map':
      return n.size === t.size && l(n.entries(), t.entries(), p.concat([n]), A.concat([t]));

    case 'Set':
      return n.size === t.size && l(n.values(), t.values(), p.concat([n]), A.concat([t]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      return false;
  }

  var b = module848(n);
  if (b.length !== module848(t).length) return false;
  var h = p.concat([n]),
    k = A.concat([t]);

  for (q = b.length - 1; q >= 0; ) {
    var O = b[q];
    if (!module849(O, t) || !y(t[O], n[O], h, k)) return false;
    q -= 1;
  }

  return true;
}

module.exports = y;
