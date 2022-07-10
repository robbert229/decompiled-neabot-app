exports.default = function (t, u) {
  var c =
      arguments.length > 2 && undefined !== arguments[2]
        ? arguments[2]
        : [
            {
              text: '\u786e\u5b9a',
            },
          ],
    f = arguments.length > 3 ? arguments[3] : undefined,
    v = module403.default.add(
      React.default.createElement(module1124.default, {
        title: t,
        content: u,
        actions: c,
        onAnimationEnd: function (t) {
          if (!t) module403.default.remove(v);
        },
        onBackHandler: f,
      })
    );
  return v;
};

var React = require('react'),
  module403 = require('./403'),
  module1124 = require('./1124');
