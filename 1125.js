exports.default = function (t, u, c) {
  var f = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 'default',
    s = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : '',
    v = arguments.length > 5 && undefined !== arguments[5] ? arguments[5] : ['', ''],
    h = arguments.length > 6 ? arguments[6] : undefined;
  if (!c) return void console.error('Must specify callbackOrActions');
  var p = module403.default.add(
    React.default.createElement(module1126.default, {
      title: t,
      message: u,
      actions: c,
      type: f,
      defaultValue: s,
      onAnimationEnd: function (t) {
        if (!t) module403.default.remove(p);
      },
      placeholders: v,
      onBackHandler: h,
    })
  );
  return p;
};

var React = require('react'),
  module403 = require('./403'),
  module1126 = require('./1126');
