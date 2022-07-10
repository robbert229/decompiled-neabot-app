require('./1196');

var module594 = (function (t, l) {
  if (!l && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = n(l);
  if (o && o.has(t)) return o.get(t);
  var f = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var p = u ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
      else f[c] = t[c];
    }

  f.default = t;
  if (o) o.set(t, f);
  return f;
})(require('./594'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    o = new WeakMap();
  return (n = function (t) {
    return t ? o : l;
  })(t);
}

var module1212 = {
  get wifi_0() {
    var n = module594.default.locale;
    if (!('Hans' != module594.default.locale && 'Hant' != module594.default.locale)) n = 'zh';
    return require('zh' === n ? d[2] : d[3]);
  },

  get wifi_1() {
    var n = module594.default.locale;
    if (!('Hans' != module594.default.locale && 'Hant' != module594.default.locale)) n = 'zh';
    return require('zh' === n ? d[4] : d[5]);
  },

  get wifi_2() {
    var n = module594.default.locale;
    if (!('Hans' != module594.default.locale && 'Hant' != module594.default.locale)) n = 'zh';
    return require('zh' === n ? d[6] : d[7]);
  },

  a1bp8GkMOe2: require('./1209'),
  newWifi01: require('./1210'),
  newWifi02: require('./1211'),
  a1Wi9Hfe7VT: require('./1212'),
  N2TurnOn: require('./1213'),
  N2MatchNetWork: require('./1214'),
  a1iQ12ffASR: require('./1215'),
  secondGenerationNeabot0: require('./1216'),
  secondGenerationNeabot1: require('./1217'),
  a1XKU4BoqtH: require('./1212'),
};
exports.default = module1212;
