var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  module408 = require('./408'),
  module1118 = require('./1118'),
  module1122 = require('./1122'),
  p = (function (n) {
    module35.default(C, n);
    var p = module401.default(C);

    function C(n) {
      var o;
      module24.default(this, C);

      (o = p.call(this, n)).onBackAndroid = function () {
        var n = o.props.onBackHandler;

        if ('function' == typeof n) {
          if (n()) o.onClose();
          return true;
        } else return !!o.state.visible && (o.onClose(), true);
      };

      o.onClose = function () {
        o.setState({
          visible: false,
        });
      };

      o.state = {
        visible: true,
      };
      return o;
    }

    module25.default(C, [
      {
        key: 'render',
        value: function () {
          var n = this,
            t = this.props,
            o = t.actions,
            l = t.onAnimationEnd,
            s = o.map(function (t) {
              var o = t.onPress || function () {};

              t.onPress = function () {
                var t = o();
                if (t && t.then)
                  t.then(function () {
                    n.onClose();
                  });
                else n.onClose();
              };

              return t;
            });
          return React.default.createElement(
            module408.WithTheme,
            {
              themeStyles: module1122.default,
            },
            function (t) {
              return React.default.createElement(module1118.default, {
                operation: true,
                transparent: true,
                maskClosable: true,
                visible: n.state.visible,
                onClose: n.onClose,
                onAnimationEnd: l,
                onRequestClose: n.onBackAndroid,
                style: t.operationContainer,
                bodyStyle: t.operationBody,
                footer: s,
              });
            }
          );
        },
      },
    ]);
    return C;
  })(React.default.Component);

exports.default = p;
