require('./1658');

require('./1631');

var module1096 = require('./1096'),
  module12 = require('./12'),
  module608 = require('./608'),
  module810 = require('./810'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module1486 = require('./1486'),
  module1489 = require('./1489'),
  module588 = require('./588'),
  ReactNative = require('react-native'),
  module1493 = require('./1493'),
  module594 = require('./594');

require('./1627');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

var T = ReactNative.NativeModules.ControlApiModule;

exports.default = function (t) {
  module608.useStoreState(function (t) {
    return {
      status: t.login.status,
    };
  }).status;
  module810.STATUS.FETCHING;
  var v = module1489.default().theme,
    S = module594.useTranslation().t,
    x = t.route,
    h = t.navigation,
    k = x.params,
    M = k.isChanged,
    O = k.deviceId,
    w = k.item,
    E = '';
  if (undefined == w) w = {};
  if (w.hasOwnProperty('name')) E = w.name;

  var P = React.default.useState(E),
    j = module12.default(P, 2),
    I = j[0],
    V = j[1],
    _ = React.default.useState(M),
    z = module12.default(_, 2),
    F = z[0],
    N = z[1],
    A = React.useRef(null);

  return React.default.createElement(
    module1486.Container,
    {
      style: {
        backgroundColor: v.colors.background,
      },
    },
    React.default.createElement(
      ReactNative.ScrollView,
      {
        style: {
          flex: 1,
          backgroundColor: v.colors.background,
        },
      },
      React.default.createElement(
        ReactNative.View,
        {
          style: {
            flex: 1,
            backgroundColor: v.colors.background,
          },
        },
        React.default.createElement(
          ReactNative.View,
          {
            style: {
              backgroundColor: '#fff',
              paddingHorizontal: module588.default.setSpText(10),
              paddingVertical: module588.default.setSpText(10),
              marginTop: module588.default.setSpText(10),
            },
          },
          React.default.createElement(
            ReactNative.TextInput,
            {
              autoCapitalize: 'none',
              autoCorrect: false,
              ref: A,
              onChangeText: function (t) {
                N(true);
                V(t);
              },
              placeholder: S('enterNaming'),
              autoCapitalize: 'none',
              autoCorrect: false,
              editable: true,
              maxLength: 32,
              placeholderTextColor: '#CCCCCC',
              enablesReturnKeyAutomatically: true,
              style: {
                paddingVertical: 0,
              },
            },
            I.length >= 0 && M ? null : E
          )
        ),
        React.default.createElement(
          ReactNative.View,
          {
            style: {
              paddingHorizontal: module588.default.setSpText(10),
              marginTop: module588.default.setSpText(100),
            },
          },
          React.default.createElement(
            module1493.Button,
            {
              labelStyle: {
                color: v.colors.text,
              },
              mode: 'contained',
              style: {
                flex: 1,
                backgroundColor: '#F7F9FC',
              },
              onPress: function () {
                if (I != E) {
                  if (F && I.length > 0)
                    T.operateMap(
                      O,
                      'setMapInfo',
                      JSON.stringify({
                        tag: I,
                        mapId: w.mapId,
                      })
                    ).then(function (t) {
                      if (t && 200 == t.data.code)
                        module1096.default.info(
                          S('M1628755515'),
                          1,
                          function () {
                            h.goBack();
                          },
                          false
                        );
                      else module1096.default.info(t.localMsg ? t.localMsg : t.message, 1, function () {}, false);
                    });
                } else module1096.default.info(S('T1628755728'), 1, function () {}, false);
              },
            },
            S('btnConfirm')
          )
        )
      )
    )
  );
};
