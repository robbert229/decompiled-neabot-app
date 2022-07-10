exports.getCalendar = function () {
  return u.calendar;
};

exports.getCountry = function () {
  return u.country;
};

exports.getCurrencies = function () {
  return u.currencies;
};

exports.getLocales = function () {
  return u.locales;
};

exports.getNumberFormatSettings = function () {
  return u.numberFormatSettings;
};

exports.getTemperatureUnit = function () {
  return u.temperatureUnit;
};

exports.getTimeZone = function () {
  return u.timeZone;
};

exports.uses24HourClock = function () {
  return u.uses24HourClock;
};

exports.usesMetricSystem = function () {
  return u.usesMetricSystem;
};

exports.usesAutoDateAndTime = function () {
  return u.usesAutoDateAndTime;
};

exports.usesAutoTimeZone = function () {
  return u.usesAutoTimeZone;
};

var ReactNative = require('react-native'),
  n = ReactNative.NativeModules.RNLocalize,
  u = n.initialConstants,
  o = new ReactNative.NativeEventEmitter(n);

var s = new Set();
exports.handlers = s;
o.addListener('localizationDidChange', function (t) {
  if (JSON.stringify(t) !== JSON.stringify(u)) {
    u = t;
    s.forEach(function (t) {
      return t();
    });
  }
});
