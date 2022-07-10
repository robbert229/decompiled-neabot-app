var n,
  o,
  module643 = require('./643'),
  module644 = require('./644'),
  v = 0,
  l = 0;

module.exports = function (u, t, f) {
  var k = (t && f) || 0,
    q = t || [],
    w = (u = u || {}).node || n,
    h = undefined !== u.clockseq ? u.clockseq : o;

  if (null == w || null == h) {
    var _ = module643();

    if (null == w) w = n = [1 | _[0], _[1], _[2], _[3], _[4], _[5]];
    if (null == h) h = o = 16383 & ((_[6] << 8) | _[7]);
  }

  var p = undefined !== u.msecs ? u.msecs : new Date().getTime(),
    x = undefined !== u.nsecs ? u.nsecs : l + 1,
    C = p - v + (x - l) / 1e4;
  if ((C < 0 && undefined === u.clockseq && (h = (h + 1) & 16383), (C < 0 || p > v) && undefined === u.nsecs && (x = 0), x >= 1e4))
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  v = p;
  l = x;
  o = h;
  var D = (1e4 * (268435455 & (p += 122192928e5)) + x) % 4294967296;
  q[k++] = (D >>> 24) & 255;
  q[k++] = (D >>> 16) & 255;
  q[k++] = (D >>> 8) & 255;
  q[k++] = 255 & D;
  var E = ((p / 4294967296) * 1e4) & 268435455;
  q[k++] = (E >>> 8) & 255;
  q[k++] = 255 & E;
  q[k++] = ((E >>> 24) & 15) | 16;
  q[k++] = (E >>> 16) & 255;
  q[k++] = (h >>> 8) | 128;
  q[k++] = 255 & h;

  for (var M = 0; M < 6; ++M) q[k + M] = w[M];

  return t || module644(q);
};
