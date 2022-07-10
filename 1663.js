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
    var l = h(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, s, c);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  module1664 = require('./1664'),
  module1662 = require('./1662');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (h = function (t) {
    return t ? l : n;
  })(t);
}

function v() {
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

var b = (function (t) {
  module35.default(k, t);

  var h = k,
    b = v(),
    y = function () {
      var t,
        n = module34.default(h);

      if (b) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function k(t) {
    var l;
    module24.default(this, k);
    (l = y.call(this, t)).siblingsPool = [];
    l.updatedSiblings = new Set();
    l.unmounted = false;
    l.state = {
      siblings: [],
    };
    return l;
  }

  module25.default(k, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.props.controller.setCallback(function (n, l) {
          setImmediate(function () {
            return t.commitChange(n, l);
          });
        });
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {
        this.updatedSiblings.clear();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.unmounted = true;
      },
    },
    {
      key: 'commitChange',
      value: function (t, n) {
        var l = this,
          o = n.change,
          u = n.element,
          s = n.updateCallback;

        if (!this.unmounted) {
          var c = Array.from(this.siblingsPool),
            f = c.findIndex(function (n) {
              return n.id === t;
            });

          if (o === module1662.RootControllerChanges.Remove) {
            if (!(f > -1)) return void this.invokeCallback(s);
            c.splice(f, 1);
          } else if (o === module1662.RootControllerChanges.Update) {
            if (!(f > -1)) return void this.invokeCallback(s);
            c.splice(f, 1, {
              element: u,
              id: t,
            });
            this.updatedSiblings.add(t);
          } else {
            if (f > -1) c.splice(f, 1);
            c.push({
              element: u,
              id: t,
            });
            this.updatedSiblings.add(t);
          }

          this.siblingsPool = c;
          this.setState(
            {
              siblings: c,
            },
            function () {
              return l.invokeCallback(s);
            }
          );
        }
      },
    },
    {
      key: 'invokeCallback',
      value: function (t) {
        if (t) t();
      },
    },
    {
      key: 'renderSiblings',
      value: function () {
        var t = this;
        return this.state.siblings.map(function (n) {
          var l = n.id,
            o = n.element;
          return React.default.createElement(
            module1664.default,
            {
              key: 'root-sibling-' + l,
              shouldUpdate: t.updatedSiblings.has(l),
            },
            t.wrapSibling(o)
          );
        });
      },
    },
    {
      key: 'wrapSibling',
      value: function (t) {
        var n = this.props.renderSibling;
        return n ? n(t) : t;
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(React.default.Fragment, null, this.props.children, this.renderSiblings());
      },
    },
  ]);
  return k;
})(React.Component);

exports.default = b;
