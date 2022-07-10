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
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function y() {
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

var h = ReactNative.Dimensions.get('window').width,
  v = (function (t) {
    module35.default(w, t);

    var p = w,
      h = y(),
      v = function () {
        var t,
          n = module34.default(p);

        if (h) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w(t) {
      var o;
      module24.default(this, w);
      (o = v.call(this, t)).state = {
        isVisible: o.props.show,
      };
      o.entityList = o.props.entityList;
      return o;
    }

    module25.default(w, [
      {
        key: 'componentWillReceiveProps',
        value: function (t) {
          this.setState({
            isVisible: t.show,
          });
        },
      },
      {
        key: 'closeModal',
        value: function () {
          this.setState({
            isVisible: false,
          });
          this.props.closeModal(false);
        },
      },
      {
        key: 'renderItem',
        value: function (t, n) {
          return React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              key: n,
              onPress: this.choose.bind(this, n),
              style: b.item,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: b.itemText,
              },
              t
            )
          );
        },
      },
      {
        key: 'choose',
        value: function (t) {
          if (this.state.isVisible) {
            this.props.callback(t);
            this.closeModal();
          }
        },
      },
      {
        key: 'renderDialog',
        value: function () {
          var t = this;
          return React.default.createElement(
            ReactNative.View,
            {
              style: b.modalStyle,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: b.optArea,
              },
              this.entityList.map(function (n, o) {
                return t.renderItem(n, o);
              })
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            React.default.createElement(
              ReactNative.Modal,
              {
                transparent: true,
                visible: this.state.isVisible,
                animationType: 'fade',
                onRequestClose: function () {
                  return t.closeModal();
                },
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: b.container,
                  activeOpacity: 1,
                  onPress: function () {
                    return t.closeModal();
                  },
                },
                this.renderDialog()
              )
            )
          );
        },
      },
    ]);
    return w;
  })(React.Component);

exports.default = v;
var b = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalStyle: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: h,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  optArea: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 12,
    marginBottom: 12,
  },
  item: {
    width: h,
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  cancel: {
    width: h,
    height: 30,
    marginTop: 12,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
