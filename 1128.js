exports.default = function (t, o) {
  var f = module403.default.add(
    React.default.createElement(module1129.default, {
      actions:
        t.length > 0
          ? t
          : [
              {
                text: '\u786e\u5b9a',
              },
            ],
      onAnimationEnd: function (t) {
        if (!t) module403.default.remove(f);
      },
      onBackHandler: o,
    })
  );
  return f;
};

var React = require('react'),
  module403 = require('./403'),
  module1129 = require('./1129');
