var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = (function (t) {
    module35.default(l, t);
    var s = module401.default(l);

    function l() {
      module24.default(this, l);
      return s.apply(this, arguments);
    }

    module25.default(l, [
      {
        key: 'componentDidMount',
        value: function () {
          if (!this.props.manager) throw new Error('Looks like you forgot to wrap your root component with `Provider` component from `@ant-design/react-native`.\n\n');
          this._key = this.props.manager.mount(this.props.children);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this.props.manager.update(this._key, this.props.children);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.props.manager.unmount(this._key);
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ]);
    return l;
  })(require('react').default.Component);

exports.default = React;
