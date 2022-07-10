var module722 = require('./722'),
  module723 = require('./723'),
  module724 = require('./724'),
  u =
    module722 && 1 / module724(new module722([, -0]))[1] == 1 / 0
      ? function (t) {
          return new module722(t);
        }
      : module723;

module.exports = u;
