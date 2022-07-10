exports.checkIP = function (n, c) {
  var t = function () {
    HTTP.get('https://api.myip.com/').then(
      function (t) {
        if (t && t.cc && t.cc == n) {
          if (c) c(true);
        } else if (c) c(false);
      },
      function (n, t) {
        if (c) c(true);
      }
    );
  };

  if (n)
    HTTP.get('http://ip-api.com/json/?lang=zh-CN').then(
      function (o) {
        var u = '';

        if (o) {
          if (o.hasOwnProperty('cc')) u = o.cc;
          if (o.hasOwnProperty('countryCode')) u = o.countryCode;
        }

        if ('' != u && u == n) {
          if (c) c(true);
        } else if ('' != u) {
          if (c) c(false);
        } else t();
      },
      function (n, c) {
        t();
      }
    );
  else if (c) c(true);
};

require('react');

exports.WHITELIST = {};
exports.BLACKLIST = {};
