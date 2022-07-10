var module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  module24 = require('./24'),
  React = require('react'),
  ReactNative = require('react-native'),
  module407 = require('./407'),
  f = React.default.createContext(null);

exports.PortalContext = f;
var p = 'ANT_DESIGN_MOBILE_RN_ADD_PORTAL',
  h = 'ANT_DESIGN_MOBILE_RN_REMOVE_PORTAL',
  v = ReactNative.DeviceEventEmitter || new ReactNative.NativeEventEmitter(),
  y = new (function t() {
    var n = this;
    module24.default(this, t);
    this.nextKey = 1e4;

    this.add = function (t) {
      var u = n.nextKey++;
      v.emit(p, t, u);
      return u;
    };

    this.remove = function (t) {
      return v.emit(h, t);
    };
  })();
exports.portal = y;

var E = (function (t) {
  module35.default(E, t);
  var y = module401.default(E);

  function E() {
    var t;
    module24.default(this, E);
    (t = y.apply(this, arguments))._nextKey = 0;
    t._queue = [];

    t._setManager = function (n) {
      t._manager = n;
    };

    t._mount = function (n, u) {
      var o = u || t._nextKey++;
      if (t._manager) t._manager.mount(o, n);
      else
        t._queue.push({
          type: 'mount',
          key: o,
          children: n,
        });
      return o;
    };

    t._update = function (n, u) {
      if (t._manager) t._manager.update(n, u);
      else {
        var o = {
            type: 'mount',
            key: n,
            children: u,
          },
          l = t._queue.findIndex(function (t) {
            return 'mount' === t.type || ('update' === t.type && t.key === n);
          });

        if (l > -1) t._queue[l] = o;
        else t._queue.push(o);
      }
    };

    t._unmount = function (n) {
      if (t._manager) t._manager.unmount(n);
      else
        t._queue.push({
          type: 'unmount',
          key: n,
        });
    };

    return t;
  }

  module25.default(E, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this._manager,
          n = this._queue;

        for (v.addListener(p, this._mount), v.addListener(h, this._unmount); n.length && t; ) {
          var u = n.pop();
          if (u)
            switch (u.type) {
              case 'mount':
                t.mount(u.key, u.children);
                break;

              case 'update':
                t.update(u.key, u.children);
                break;

              case 'unmount':
                t.unmount(u.key);
            }
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        v.removeListener(p, this._mount);
        v.removeListener(h, this._unmount);
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          f.Provider,
          {
            value: {
              mount: this._mount,
              update: this._update,
              unmount: this._unmount,
            },
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: k.container,
              collapsable: false,
            },
            this.props.children
          ),
          React.default.createElement(module407.default, {
            ref: this._setManager,
          })
        );
      },
    },
  ]);
  return E;
})(React.default.Component);

exports.default = E;
E.displayName = 'Portal.Host';
var k = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
