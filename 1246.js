var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  l = (function (t) {
    module35.default(h, t);
    var l = module401.default(h);

    function h(t) {
      var u;
      module24.default(this, h);

      (u = l.call(this, t)).focus = function () {
        if (u.inputRef) u.inputRef.focus();
      };

      u.clear = function () {
        if (u.inputRef) u.inputRef.clear();
      };

      u.state = {
        focused: t.focused || false,
      };
      return u;
    }

    module25.default(h, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (t.focused !== this.state.focused)
            this.setState({
              focused: t.focused,
            });
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          if (this.inputRef && (this.props.autoFocus || this.props.focused)) this.inputRef.focus();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          if (this.inputRef && this.props.focused) this.inputRef.focus();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            ReactNative.TextInput,
            module11.default(
              {
                ref: function (u) {
                  return (t.inputRef = u);
                },
                underlineColorAndroid: 'transparent',
              },
              this.props
            )
          );
        },
      },
    ]);
    return h;
  })(React.default.Component);

exports.default = l;
