exports.default = function (t, l) {
  var f = new module1662.default();
  return {
    Root: function (u) {
      return React.default.createElement(
        module1663.default,
        {
          controller: f,
          renderSibling: l,
        },
        React.default.createElement(t, u)
      );
    },
    manager: {
      update: function (t, n, u) {
        f.update(t, n, u);
      },
      destroy: function (t, n) {
        f.destroy(t, n);
      },
    },
  };
};

var React = require('react'),
  module1662 = require('./1662'),
  module1663 = require('./1663');
