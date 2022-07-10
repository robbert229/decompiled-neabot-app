var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  n = /^[ \n\r\t]*[{\[]/,
  f = function (n) {
    for (var f = new Uint8Array(n), u = f.length, o = '', s = 0; s < u; s += 3) {
      o += t[f[s] >> 2];
      o += t[((3 & f[s]) << 4) | (f[s + 1] >> 4)];
      o += t[((15 & f[s + 1]) << 2) | (f[s + 2] >> 6)];
      o += t[63 & f[s + 2]];
    }

    if (u % 3 == 2) o = o.substring(0, o.length - 1) + '=';
    else if (u % 3 == 1) o = o.substring(0, o.length - 2) + '==';
    return o;
  },
  u = function (t, n) {
    if (globals.ArrayBuffer && n instanceof globals.ArrayBuffer)
      return {
        base64: true,
        data: f(n),
      };

    if (globals.Buffer) {
      if (n instanceof globals.Buffer)
        return {
          base64: true,
          data: n.toString('base64'),
        };
      if (n && 'Buffer' === n.type && Array.isArray(n.data))
        return {
          base64: true,
          data: (globals.Buffer.from ? globals.Buffer.from(n.data) : new globals.Buffer(n.data)).toString('base64'),
        };
    }

    return n;
  };

module.exports.decode = function (t) {
  if (null == t) return null;
  if ('#1' === t || '#2' === t) return t;
  var f = t.toString();
  if (!n.test(f)) return f;

  try {
    return JSON.parse(f);
  } catch (t) {}

  return f;
};

module.exports.encode = function (t) {
  return '#1' === t || '#2' === t ? t : JSON.stringify(t, u);
};
