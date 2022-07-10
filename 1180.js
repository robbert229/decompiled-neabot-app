var ReactNative = require('react-native').NativeModules.ControlApiModule,
  n = function (t, n) {
    if (((t = 'string' == typeof t ? JSON.parse(t) : t), '[object Error]' == Object.prototype.toString.call(t))) {
      Object.keys(t).map(function (n) {
        if ('message' == n) t[n];
      });
      if (n) n(t);
    }
  },
  o = function (t, n, o) {
    if (200 == t.code) {
      if (n) n(t);
    } else if (o) o(t);
  },
  c = function (c, u, f, s) {
    if (c && undefined != c && c.hasOwnProperty('deviceId'))
      ReactNative.getStatus(c.deviceId).then(
        function (t) {
          o(t, u, f);
        },
        function (t, o) {
          n(t, s);
        }
      );
  },
  u = function (c, u, f, s) {
    if (c && undefined != c && c.hasOwnProperty('deviceId') && c.deviceId)
      ReactNative.getProperties(c.deviceId).then(
        function (t) {
          if (t) o(t, u, f);
        },
        function (t, o) {
          if (t) n(t, s);
        }
      );
  };

exports.default = function (t, n, o, f, s) {
  switch (t) {
    case 'getStatus':
      c(n, o, s, f);
      break;

    case 'getDeviceAttributes':
      u(n, o, s, f);
  }
};
