var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  ReactNative = require('react-native'),
  module1143 = require('./1143');

module.exports = function (t) {
  var s = {
    install: function () {
      var ReactNative,
        module1143,
        s,
        c,
        f,
        p = arguments,
        h = this;
      return regeneratorRuntime.default.async(
        function (w) {
          for (;;)
            switch ((w.prev = w.next)) {
              case 0:
                ReactNative = p.length > 0 && undefined !== p[0] ? p[0] : t.codePushInstallModeOnNextRestart;
                module1143 = p.length > 1 && undefined !== p[1] ? p[1] : 0;
                s = p.length > 2 ? p[2] : undefined;
                c = h;
                f = module11.default({}, c);
                w.next = 7;
                return regeneratorRuntime.default.awrap(t.installUpdate(f, ReactNative, module1143));

              case 7:
                if (s) s();
                if (ReactNative == t.codePushInstallModeImmediate) t.restartApp(false);
                else {
                  t.clearPendingRestart();
                  c.isPending = true;
                }

              case 9:
              case 'end':
                return w.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    isPending: false,
  };
  return {
    local: s,
    remote: function (c) {
      return {
        download: function (f) {
          var p,
            h,
            w,
            v,
            P = this;
          return regeneratorRuntime.default.async(
            function (x) {
              for (;;)
                switch ((x.prev = x.next)) {
                  case 0:
                    if (P.downloadUrl) {
                      x.next = 2;
                      break;
                    }

                    throw new Error('Cannot download an update without a download url');

                  case 2:
                    if (f) {
                      h = new ReactNative.NativeEventEmitter(t);
                      p = h.addListener('CodePushDownloadProgress', f);
                    }

                    x.prev = 3;
                    w = module11.default({}, P);
                    Object.keys(w).forEach(function (t) {
                      return 'function' == typeof w[t] && delete w[t];
                    });
                    x.next = 8;
                    return regeneratorRuntime.default.awrap(t.downloadUpdate(w, !!f));

                  case 8:
                    v = x.sent;
                    if (c)
                      c(P).catch(function (t) {
                        module1143.default('Report download status failed: ' + t);
                      });
                    return x.abrupt('return', module11.default({}, v, s));

                  case 11:
                    x.prev = 11;
                    if (p) p.remove();
                    return x.finish(11);

                  case 14:
                  case 'end':
                    return x.stop();
                }
            },
            null,
            null,
            [[3, , 11, 14]],
            Promise
          );
        },
        isPending: false,
      };
    },
  };
};
