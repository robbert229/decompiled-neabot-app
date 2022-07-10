var module1035 = require('./1035');

function n(n) {
  if (n && 'number' == typeof n)
    module1035(false, 'Error when using Navigator from react-native-custom-components. Please provide a raw object to `props.sceneStyle` instead of a StyleSheet reference.');
  return n;
}

module.exports = function o(f) {
  if (f) {
    if ((module1035(true !== f, 'style may be false but not true'), !Array.isArray(f))) return n(f);

    for (var s = {}, u = 0, c = f.length; u < c; ++u) {
      var v = o(f[u]);
      if (v) for (var y in v) s[y] = v[y];
    }

    return s;
  }
};
