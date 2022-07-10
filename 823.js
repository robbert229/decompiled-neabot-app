var module824 = require('./824'),
  module913 = require('./913'),
  module914 = require('./914'),
  c = {
    TESTPING: '/kit/debug/ping',
    VERSION: 'app/version',
    LOGIN: 'api/en/login',
    SENDSIGNUPCODE: 'api/en/verifyPhoneCode',
    REFRESH: 'refresh',
    LOGOUT: 'logout',
  };

exports.URIS = c;
var p = {
  createApiClient: function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module913.BASE_URL,
      p = module824.create({
        baseURL: t,
        headers: {
          Accept: 'application/json',
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
        },
        timeout: 15e3,
      });
    p.addMonitor(module914.default);
    return {
      testPing: function (t) {
        return p.post(c.TESTPING, t);
      },
      setAuthorizationHeader: function (t) {
        return p.setHeader('Authorization', 'Bearer ' + t);
      },
      sendCode: function (t) {
        return p.post(c.SENDSIGNUPCODE, t);
      },
      loginUser: function (t) {
        return p.post(c.LOGIN, t);
      },
    };
  },
};
exports.default = p;
