var module276 = require('@babel/runtime/helpers/interopRequireDefault')(require('./276')),
  module3 = require('./3'),
  l = {
    setGlobalOptions: function (l) {
      if ((undefined !== l.debug && module3(module276.default, 'Trying to debug FrameRateLogger without the native module!'), module276.default)) {
        var u = {
          debug: !!l.debug,
          reportStackTraces: !!l.reportStackTraces,
        };
        module276.default.setGlobalOptions(u);
      }
    },
    setContext: function (o) {
      if (module276.default) module276.default.setContext(o);
    },
    beginScroll: function () {
      if (module276.default) module276.default.beginScroll();
    },
    endScroll: function () {
      if (module276.default) module276.default.endScroll();
    },
  };

module.exports = l;
