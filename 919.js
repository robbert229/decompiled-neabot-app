var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module12 = require('./12'),
  module920 = O(require('./920')),
  React = O(require('react')),
  module595 = require('./595'),
  module921 = O(require('./921')),
  module810 = require('./810'),
  module922 = require('./922'),
  module596 = require('./596');

require('./923');

var module943 = require('./943'),
  module608 = require('./608'),
  ReactNative = require('react-native');

function y(n) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    t = new WeakMap();
  return (y = function (n) {
    return n ? t : l;
  })(n);
}

function O(n, l) {
  if (!l && n && n.__esModule) return n;
  if (null === n || ('object' != typeof n && 'function' != typeof n))
    return {
      default: n,
    };
  var t = y(l);
  if (t && t.has(n)) return t.get(n);
  var o = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in n)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(n, c)) {
      var f = u ? Object.getOwnPropertyDescriptor(n, c) : null;
      if (f && (f.get || f.set)) Object.defineProperty(o, c, f);
      else o[c] = n[c];
    }

  o.default = n;
  if (t) t.set(n, o);
  return o;
}

ReactNative.NativeModules.AccountApiModule;
ReactNative.NativeModules.LdLoginHelperModule;

var S = React.default.createContext(),
  M = function (n, l) {
    switch (
      (3 == l.id && (n.scriptCode && (l.scriptCode = n.scriptCode), (l.languageCode = n.languageCode), (l.languageTag = n.languageTag)),
      (l.countryCode = n.countryCode),
      (l.isRTL = n.isRTL),
      l.id)
    ) {
      case 1:
        l.label = module922.default('English');
        break;

      case 2:
        l.label = module922.default('simplifiedChinese');
        break;

      default:
        l.label = module922.default('followSystem');
    }

    return l;
  },
  b = function (n) {
    var l = n.name;
    if ('fs' == n.name)
      l = null != n && n.scriptCode && 'fs' != (null == n ? undefined : n.scriptCode) ? (null == n ? undefined : n.scriptCode) : null == n ? undefined : n.languageCode;
    if (!('Hans' != l && 'Hant' != l)) l = 'zh';
    var t = '';
    [
      {
        name: 'zh',
        language: 'zh-CN',
      },
      {
        name: 'en',
        language: 'en-US',
      },
      {
        name: 'fr',
        language: 'fr-FR',
      },
      {
        name: 'de',
        language: 'de-DE',
      },
      {
        name: 'ja',
        language: 'ja-JP',
      },
      {
        name: 'ko',
        language: 'ko-KR',
      },
      {
        name: 'es',
        language: 'es-ES',
      },
      {
        name: 'ru',
        language: 'ru-RU',
      },
      {
        name: 'it',
        language: 'it-IT',
      },
      {
        name: 'hi',
        language: 'hi-IN',
      },
      {
        name: 'pt',
        language: 'pt-PT',
      },
      {
        name: 'pl',
        language: 'pl-PL',
      },
      {
        name: 'nl',
        language: 'nl-NL',
      },
    ].forEach(function (n) {
      if (n && n.name == l) t = n.language;
    });
    if (0 == t.length) t = 'en-US';
    if ('ios' == ReactNative.Platform.OS) ReactNative.NativeModules.AccountApiModule.setLanguage(t);
  };

exports.LocaleContextProvider = function (n) {
  var y = module596.default.getLocales()[0],
    O = module921.default('@language', module810.LOCALES.SYSTEM),
    j = module12.default(O, 2),
    A = j[0],
    E = j[1];
  console.log('provider locale:' + JSON.stringify(A));
  var k = module608.useStoreActions(function (n) {
      return n.app.onLanguageChange;
    }),
    w = React.useCallback(
      function (n) {
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  k(n);

                case 1:
                case 'end':
                  return l.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [k]
    ),
    N = M(y, module920.default.cloneDeep(A)),
    T = undefined != N.name ? N.name : N.languageCode;
  if ('fs' == N.name)
    T =
      'ios' == ReactNative.Platform.OS
        ? null != N && N.scriptCode && 'fs' != (null == N ? undefined : N.scriptCode)
          ? null == N
            ? undefined
            : N.scriptCode
          : null == N
          ? undefined
          : N.languageCode
        : module943.default.getAndroidSystemLanguage();
  console.log('language:' + T);
  module595.default.locale = T;
  if ('ios' == ReactNative.Platform.OS) b(N);
  ReactNative.DeviceEventEmitter.emit('onChangeLanguageUI', N);
  return React.default.createElement(
    S.Provider,
    {
      value: module11.default({}, module595.default, {
        localeProvider: N,
        t: module922.default,
        changeLocale: function (n) {
          var l = module596.default.getLocales()[0],
            t = M(l, module920.default.cloneDeep(n)),
            o = undefined != t.name ? t.name : t.languageCode,
            c = false;

          if ('fs' == n.name) {
            o =
              'ios' == ReactNative.Platform.OS
                ? null != t && t.scriptCode && 'fs' != (null == t ? undefined : t.scriptCode)
                  ? null == t
                    ? undefined
                    : t.scriptCode
                  : null == t
                  ? undefined
                  : t.languageCode
                : module943.default.getAndroidSystemLanguage();
            c = true;
          }

          module595.default.locale = o;
          if ('ios' == ReactNative.Platform.OS) b(t);
          E(t);
          w(t);
          if (c && 'android' == ReactNative.Platform.OS) ReactNative.NativeModules.ReloadAppModule.reload();
        },
      }),
    },
    n.children
  );
};

var j = S;
exports.default = j;
