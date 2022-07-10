var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module1627 = require('./1627'),
  module1488 = require('./1488'),
  c = ['style'];

exports.default = function (t) {
  var s = t.style,
    v = module52.default(t, c);
  return React.default.createElement(
    module1488.default,
    module11.default({}, v, {
      style: [module1627.default.section, s],
    })
  );
};
