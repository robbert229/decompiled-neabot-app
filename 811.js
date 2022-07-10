var module11 = require('./11'),
  module608 = require('./608'),
  module810 = require('./810'),
  f = function () {
    return {
      status: module810.STATUS.NOT_STARTED,
      updateStatus: module608.action(function (t, u) {
        t.status = u;
      }),
      mergeState: module608.action(function (t, n) {
        module11.default(t, n);
      }),
    };
  };

exports.default = f;
