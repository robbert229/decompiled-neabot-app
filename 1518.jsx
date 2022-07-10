var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = y(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, l, f);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1519 = require('./1519');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
    return t ? u : n;
  })(t);
}

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var v = React.createContext(null);
exports.PortalContext = v;

var k = (function (t, ...args) {
  module35.default(O, t);

  var y = O,
    k = h(),
    P = function () {
      var t,
        n = module34.default(y);

      if (k) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function O() {
    var t;
    module24.default(this, O);

    (t = P.call(this, ...args)).setManager = function (n) {
      t.manager = n;
    };

    t.mount = function (n) {
      var u = t.nextKey++;
      if (t.manager) t.manager.mount(u, n);
      else
        t.queue.push({
          type: 'mount',
          key: u,
          children: n,
        });
      return u;
    };

    t.update = function (n, u) {
      if (t.manager) t.manager.update(n, u);
      else {
        var o = {
            type: 'mount',
            key: n,
            children: u,
          },
          c = t.queue.findIndex(function (t) {
            return 'mount' === t.type || ('update' === t.type && t.key === n);
          });
        if (c > -1) t.queue[c] = o;
        else t.queue.push(o);
      }
    };

    t.unmount = function (n) {
      if (t.manager) t.manager.unmount(n);
      else
        t.queue.push({
          type: 'unmount',
          key: n,
        });
    };

    t.nextKey = 0;
    t.queue = [];
    return t;
  }

  module25.default(O, [
    {
      key: 'componentDidMount',
      value: function () {
        for (var t = this.manager, n = this.queue; n.length && t; ) {
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
      key: 'render',
      value: function () {
        return (
          <v.Provider
            value={{
              mount: this.mount,
              update: this.update,
              unmount: this.unmount,
            }}
          >
            <ReactNative.View style={b.container} collapsable={false} pointerEvents="box-none">
              {this.props.children}
            </ReactNative.View>
            <module1519.default ref={this.setManager} />
          </v.Provider>
        );
      },
    },
  ]);
  return O;
})(React.Component);

exports.default = k;
k.displayName = 'Portal.Host';
var b = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
