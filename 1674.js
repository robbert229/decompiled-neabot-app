var regeneratorRuntime = require('regenerator-runtime'),
  ReactNative = require('react-native'),
  module589 = require('./589'),
  f = {
    isLogin: function () {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                t.next = 2;
                return regeneratorRuntime.default.awrap(module589.default.getItem('TOKEN'));

              case 2:
                if (null !== t.sent) {
                  t.next = 8;
                  break;
                }

                globals.TOKEN = false;
                return t.abrupt('return', false);

              case 8:
                globals.TOKEN = true;
                return t.abrupt('return', true);

              case 10:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
  };

exports.default = f;
var o = 'ios' === ReactNative.Platform.OS ? 750 : 720;

exports.px2dp = function (t) {
  return (t / o) * SCREEN_WIDTH;
};
