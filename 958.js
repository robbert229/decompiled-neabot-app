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
    var l = y(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var v = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (v && (v.get || v.set)) Object.defineProperty(o, u, v);
        else o[u] = t[u];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module945 = require('./945');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (y = function (t) {
    return t ? l : n;
  })(t);
}

function h(t) {
  var n = V();
  return function () {
    var l,
      o = module34.default(t);

    if (n) {
      var v = module34.default(this).constructor;
      l = Reflect.construct(o, arguments, v);
    } else l = o.apply(this, arguments);

    return module37.default(this, l);
  };
}

function V() {
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

var A = 0,
  E = (function (t) {
    module35.default(u, t);
    var s = h(u);

    function u(t) {
      var l;
      module24.default(this, u);
      (l = s.call(this, t)).state = {
        elements: [],
        translateX: new ReactNative.Animated.Value(0),
        translateY: new ReactNative.Animated.Value(0),
        scaleX: new ReactNative.Animated.Value(1),
        scaleY: new ReactNative.Animated.Value(1),
      };
      l.handlers = [];
      return l;
    }

    module25.default(
      u,
      [
        {
          key: 'getChildContext',
          value: function () {
            var t = this,
              n = this.context,
              l = n.registerTopViewHandler,
              o = n.unregisterTopViewHandler;

            if (!l) {
              l = function (n) {
                t.handlers.push(n);
              };

              o = function (n) {
                for (var l = t.handlers.length - 1; l >= 0; --l)
                  if (t.handlers[l] === n) {
                    t.handlers.splice(l, 1);
                    return true;
                  }

                return false;
              };
            }

            return {
              registerTopViewHandler: l,
              unregisterTopViewHandler: o,
            };
          },
        },
        {
          key: 'handler',
          get: function () {
            return this.handlers.length > 0 ? this.handlers[this.handlers.length - 1] : this;
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var t = this,
              n = this.context.registerTopViewHandler;
            if (n) n(this);
            else {
              ReactNative.DeviceEventEmitter.addListener('addOverlay', function (n) {
                return t.handler.add(n);
              });
              ReactNative.DeviceEventEmitter.addListener('removeOverlay', function (n) {
                return t.handler.remove(n);
              });
              ReactNative.DeviceEventEmitter.addListener('removeAllOverlay', function (n) {
                return t.handler.removeAll(n);
              });
              ReactNative.DeviceEventEmitter.addListener('transformRoot', function (n) {
                return t.handler.transform(n);
              });
              ReactNative.DeviceEventEmitter.addListener('restoreRoot', function (n) {
                return t.handler.restore(n);
              });
            }
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var t = this.context.unregisterTopViewHandler;
            if (t) t(this);
            else {
              ReactNative.DeviceEventEmitter.removeAllListeners('addOverlay');
              ReactNative.DeviceEventEmitter.removeAllListeners('removeOverlay');
              ReactNative.DeviceEventEmitter.removeAllListeners('removeAllOverlay');
              ReactNative.DeviceEventEmitter.removeAllListeners('transformRoot');
              ReactNative.DeviceEventEmitter.removeAllListeners('restoreRoot');
            }
          },
        },
        {
          key: 'add',
          value: function (t) {
            var n = this.state.elements;
            n.push(t);
            this.setState({
              elements: n,
            });
          },
        },
        {
          key: 'remove',
          value: function (t) {
            for (var n = this.state.elements, l = n.length - 1; l >= 0; --l)
              if (n[l].key === t.key) {
                n.splice(l, 1);
                break;
              }

            this.setState({
              elements: n,
            });
          },
        },
        {
          key: 'removeAll',
          value: function (t) {
            this.state.elements;
            this.setState({
              elements: [],
            });
          },
        },
        {
          key: 'transform',
          value: function (t) {
            var n = this.state,
              l = n.translateX,
              o = n.translateY,
              s = n.scaleX,
              u = n.scaleY,
              v = t.transform,
              f = t.animated,
              p = t.animatesOnly,
              y = 0,
              h = 0,
              V = 1,
              A = 1;

            if (
              (v.map(function (t) {
                if (t && 'object' == typeof t)
                  for (var n in t) {
                    var l = t[n];

                    switch (n) {
                      case 'translateX':
                        y = l;
                        break;

                      case 'translateY':
                        h = l;
                        break;

                      case 'scaleX':
                        V = l;
                        break;

                      case 'scaleY':
                        A = l;
                    }
                  }
              }),
              f)
            ) {
              var E = [
                ReactNative.Animated.spring(l, {
                  toValue: y,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(o, {
                  toValue: h,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(s, {
                  toValue: V,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(u, {
                  toValue: A,
                  friction: 9,
                  useNativeDriver: false,
                }),
              ];
              if (p) p(E);
              else ReactNative.Animated.parallel(E).start();
            } else {
              if (p)
                p([
                  ReactNative.Animated.timing(l, {
                    toValue: y,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.timing(o, {
                    toValue: h,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.timing(s, {
                    toValue: V,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.timing(u, {
                    toValue: A,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                ]);
              else {
                l.setValue(y);
                o.setValue(h);
                s.setValue(V);
                u.setValue(A);
              }
            }
          },
        },
        {
          key: 'restore',
          value: function (t) {
            var n = this.state,
              l = n.translateX,
              o = n.translateY,
              s = n.scaleX,
              u = n.scaleY,
              v = t.animated,
              f = t.animatesOnly;

            if (v) {
              var p = [
                ReactNative.Animated.spring(l, {
                  toValue: 0,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(o, {
                  toValue: 0,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(s, {
                  toValue: 1,
                  friction: 9,
                  useNativeDriver: false,
                }),
                ReactNative.Animated.spring(u, {
                  toValue: 1,
                  friction: 9,
                  useNativeDriver: false,
                }),
              ];
              if (f) f(p);
              else ReactNative.Animated.parallel(p).start();
            } else {
              if (f)
                f([
                  ReactNative.Animated.timing(l, {
                    toValue: 0,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.timing(o, {
                    toValue: 0,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.timing(s, {
                    toValue: 1,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                  ReactNative.Animated.timing(u, {
                    toValue: 1,
                    duration: 1,
                    useNativeDriver: false,
                  }),
                ]);
              else {
                l.setValue(0);
                o.setValue(0);
                s.setValue(1);
                u.setValue(1);
              }
            }
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.state,
              n = t.elements,
              l = [
                {
                  translateX: t.translateX,
                },
                {
                  translateY: t.translateY,
                },
                {
                  scaleX: t.scaleX,
                },
                {
                  scaleY: t.scaleY,
                },
              ];
            return React.default.createElement(
              ReactNative.View,
              {
                style: {
                  backgroundColor: module945.default.screenColor,
                  flex: 1,
                },
              },
              React.default.createElement(
                ReactNative.Animated.View,
                {
                  style: {
                    flex: 1,
                    transform: l,
                  },
                },
                React.default.createElement(k, null, this.props.children)
              ),
              n.map(function (t, n) {
                return React.default.createElement(
                  ReactNative.View,
                  {
                    key: 'topView' + t.key,
                    style: D.overlay,
                    pointerEvents: 'box-none',
                  },
                  t.element
                );
              })
            );
          },
        },
      ],
      [
        {
          key: 'add',
          value: function (t) {
            var n = ++A;
            ReactNative.DeviceEventEmitter.emit('addOverlay', {
              key: n,
              element: t,
            });
            return n;
          },
        },
        {
          key: 'remove',
          value: function (t) {
            ReactNative.DeviceEventEmitter.emit('removeOverlay', {
              key: t,
            });
          },
        },
        {
          key: 'removeAll',
          value: function () {
            ReactNative.DeviceEventEmitter.emit('removeAllOverlay', {});
          },
        },
        {
          key: 'transform',
          value: function (t, n) {
            var l = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
            ReactNative.DeviceEventEmitter.emit('transformRoot', {
              transform: t,
              animated: n,
              animatesOnly: l,
            });
          },
        },
        {
          key: 'restore',
          value: function (t) {
            var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null;
            ReactNative.DeviceEventEmitter.emit('restoreRoot', {
              animated: t,
              animatesOnly: n,
            });
          },
        },
      ]
    );
    return u;
  })(React.Component);

exports.default = E;
E.contextTypes = {
  registerTopViewHandler: PropTypes.default.func,
  unregisterTopViewHandler: PropTypes.default.func,
};
E.childContextTypes = {
  registerTopViewHandler: PropTypes.default.func,
  unregisterTopViewHandler: PropTypes.default.func,
};

var D = ReactNative.StyleSheet.create({
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }),
  k = (function (t) {
    module35.default(u, t);
    var s = h(u);

    function u() {
      module24.default(this, u);
      return s.apply(this, arguments);
    }

    module25.default(u, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            this.props.children
          );
        },
      },
    ]);
    return u;
  })(React.PureComponent);

if (!ReactNative.AppRegistry.registerComponentOld) ReactNative.AppRegistry.registerComponentOld = ReactNative.AppRegistry.registerComponent;

ReactNative.AppRegistry.registerComponent = function (t, s) {
  var u = (function (t) {
    module35.default(c, t);
    var u = h(c);

    function c() {
      module24.default(this, c);
      return u.apply(this, arguments);
    }

    module25.default(c, [
      {
        key: 'render',
        value: function () {
          var t = s();
          return React.default.createElement(E, null, React.default.createElement(t, this.props));
        },
      },
    ]);
    return c;
  })(React.Component);

  return ReactNative.AppRegistry.registerComponentOld(t, function () {
    return u;
  });
};
