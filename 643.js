var n = ('undefined' != typeof crypto && crypto.getRandomValues.bind(crypto)) || ('undefined' != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto));

if (n) {
  var t = new Uint8Array(16);

  module.exports = function () {
    n(t);
    return t;
  };
} else {
  var o = new Array(16);

  module.exports = function () {
    for (var n, t = 0; t < 16; t++) {
      if (0 == (3 & t)) n = 4294967296 * Math.random();
      o[t] = (n >>> ((3 & t) << 3)) & 255;
    }

    return o;
  };
}
