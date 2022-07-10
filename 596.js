var t = {
  addEventListener: true,
  removeEventListener: true,
  findBestAvailableLanguage: true,
  getCalendar: true,
  getCountry: true,
  getCurrencies: true,
  getLocales: true,
  getNumberFormatSettings: true,
  getTemperatureUnit: true,
  getTimeZone: true,
  uses24HourClock: true,
  usesAutoDateAndTime: true,
  usesAutoTimeZone: true,
  usesMetricSystem: true,
};
exports.addEventListener = c;
exports.removeEventListener = l;
exports.findBestAvailableLanguage = f;
Object.defineProperty(exports, 'getCalendar', {
  enumerable: true,
  get: function () {
    return module597.getCalendar;
  },
});
Object.defineProperty(exports, 'getCountry', {
  enumerable: true,
  get: function () {
    return module597.getCountry;
  },
});
Object.defineProperty(exports, 'getCurrencies', {
  enumerable: true,
  get: function () {
    return module597.getCurrencies;
  },
});
Object.defineProperty(exports, 'getLocales', {
  enumerable: true,
  get: function () {
    return module597.getLocales;
  },
});
Object.defineProperty(exports, 'getNumberFormatSettings', {
  enumerable: true,
  get: function () {
    return module597.getNumberFormatSettings;
  },
});
Object.defineProperty(exports, 'getTemperatureUnit', {
  enumerable: true,
  get: function () {
    return module597.getTemperatureUnit;
  },
});
Object.defineProperty(exports, 'getTimeZone', {
  enumerable: true,
  get: function () {
    return module597.getTimeZone;
  },
});
Object.defineProperty(exports, 'uses24HourClock', {
  enumerable: true,
  get: function () {
    return module597.uses24HourClock;
  },
});
Object.defineProperty(exports, 'usesAutoDateAndTime', {
  enumerable: true,
  get: function () {
    return module597.usesAutoDateAndTime;
  },
});
Object.defineProperty(exports, 'usesAutoTimeZone', {
  enumerable: true,
  get: function () {
    return module597.usesAutoTimeZone;
  },
});
Object.defineProperty(exports, 'usesMetricSystem', {
  enumerable: true,
  get: function () {
    return module597.usesMetricSystem;
  },
});

var module597 = require('./597'),
  u = require(d[1]);

function o(t) {
  console.error('`' + t + '` is not a valid react-native-localize event');
}

function s(t) {
  var n = t.languageCode,
    u = t.scriptCode;
  return n + (u ? '-' + u : '');
}

function c(t, u) {
  if ('change' !== t) o(t);
  else if (!module597.handlers.has(u)) module597.handlers.add(u);
}

function l(t, u) {
  if ('change' !== t) o(t);
  else if (module597.handlers.has(u)) module597.handlers.delete(u);
}

function f(t) {
  for (var u = module597.getLocales(), o = 0; o < u.length; o++) {
    var c = u[o],
      l = c.languageTag,
      f = c.languageCode,
      b = c.isRTL;
    if (t.includes(l))
      return {
        languageTag: l,
        isRTL: b,
      };
    var T = s(c),
      y = u[o + 1];
    if ((!y || T !== s(y)) && t.includes(T))
      return {
        languageTag: T,
        isRTL: b,
      };
    if ((!y || f !== y.languageCode) && t.includes(f))
      return {
        languageTag: f,
        isRTL: b,
      };
  }
}

Object.keys(u).forEach(function (n) {
  if ('default' !== n && '__esModule' !== n)
    Object.prototype.hasOwnProperty.call(t, n) ||
      (n in exports && exports[n] === u[n]) ||
      Object.defineProperty(exports, n, {
        enumerable: true,
        get: function () {
          return u[n];
        },
      });
});
var b = {
  getCalendar: module597.getCalendar,
  getCountry: module597.getCountry,
  getCurrencies: module597.getCurrencies,
  getLocales: module597.getLocales,
  getNumberFormatSettings: module597.getNumberFormatSettings,
  getTemperatureUnit: module597.getTemperatureUnit,
  getTimeZone: module597.getTimeZone,
  uses24HourClock: module597.uses24HourClock,
  usesAutoDateAndTime: module597.usesAutoDateAndTime,
  usesAutoTimeZone: module597.usesAutoTimeZone,
  usesMetricSystem: module597.usesMetricSystem,
  findBestAvailableLanguage: f,
  addEventListener: c,
  removeEventListener: l,
};
exports.default = b;
