exports.useOnMount = s;

exports.useOnEvent = function (t, n, f) {
  var l = s(n, f),
    v = l.loading,
    E = l.result,
    p = React.useState(f),
    _ = module12.default(p, 2),
    w = _[0],
    I = _[1];

  React.useEffect(
    function () {
      I(E);
    },
    [E]
  );
  React.useEffect(
    function () {
      var n = c.addListener(t, I);
      return function () {
        return n.remove();
      };
    },
    [t]
  );
  return {
    loading: v,
    result: w,
  };
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = require('react'),
  ReactNative = require('react-native');

function s(t, f) {
  var s = React.useState({
      loading: true,
      result: f,
    }),
    c = module12.default(s, 2),
    l = c[0],
    v = c[1];
  React.useEffect(
    function () {
      var u;
      regeneratorRuntime.default.async(
        function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                o.next = 2;
                return regeneratorRuntime.default.awrap(t());

              case 2:
                u = o.sent;
                v({
                  loading: false,
                  result: u,
                });

              case 4:
              case 'end':
                return o.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    [t]
  );
  return l;
}

var c = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo);
exports.deviceInfoEmitter = c;
