exports.getComponentLocale = function (l, n, o, c) {
  var u = {};
  if (n && n.antLocale && n.antLocale[o]) u = n.antLocale[o];
  else {
    var f = c();
    u = f.default || f;
  }
  var L = module11.default({}, u);

  if (l.locale) {
    L = module11.default(module11.default({}, L), l.locale);
    if (l.locale.lang) L.lang = module11.default(module11.default({}, u.lang), l.locale.lang);
  }

  return L;
};

exports.getLocaleCode = function (l) {
  var t = l.antLocale && l.antLocale.locale;
  if (l.antLocale && l.antLocale.exist && !t) return 'zh-cn';
  return t;
};

var module11 = require('./11');
