var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, u) {
    if (!u && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = B(u);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = o ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, s, f);
        else l[s] = t[s];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  b = [
    'style',
    'children',
    'pointerEvents',
    'opacity',
    'defaultValue',
    'value',
    'step',
    'max',
    'min',
    'valueStyle',
    'valueFormat',
    'subButton',
    'addButton',
    'showSeparator',
    'disabled',
    'editable',
    'onLayout',
    'onChange',
  ];

function B(t) {
  if ('function' != typeof WeakMap) return null;
  var u = new WeakMap(),
    n = new WeakMap();
  return (B = function (t) {
    return t ? n : u;
  })(t);
}

function S() {
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

var w = (function (t) {
  module35.default(V, t);

  var PropTypes = V,
    B = S(),
    w = function () {
      var t,
        u = module34.default(PropTypes);

      if (B) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function V(t) {
    var u;
    module24.default(this, V);
    (u = w.call(this, t)).state = {
      value: t.value ? t.value : t.defaultValue ? t.defaultValue : 0,
      height: null,
    };
    return u;
  }

  module25.default(V, [
    {
      key: 'value',
      get: function () {
        return undefined === this.props.value ? this.state.value : this.props.value;
      },
    },
    {
      key: 'onLayout',
      value: function (t) {
        if (null === this.state.height)
          this.setState({
            height: t.nativeEvent.layout.height,
          });
        if (this.props.onLayout) this.props.onLayout(t);
      },
    },
    {
      key: 'onSubButtonPress',
      value: function () {
        var t = this.props,
          u = t.step,
          n = t.min,
          l = t.onChange,
          o = this.value;
        if ((o -= u) < n) o = n;
        this.setState({
          value: o,
        });
        if (l) l(o);
      },
    },
    {
      key: 'onAddButtonPress',
      value: function () {
        var t = this.props,
          u = t.step,
          n = t.max,
          l = t.onChange,
          o = this.value;
        if ((o += u) > n) o = n;
        this.setState({
          value: o,
        });
        if (l) l(o);
      },
    },
    {
      key: 'buildStyle',
      value: function () {
        var t = this.props.style;
        t = [
          {
            backgroundColor: module945.default.stepperColor,
            borderColor: module945.default.stepperBorderColor,
            borderWidth: module945.default.stepperBorderWidth,
            borderRadius: module945.default.stepperBorderRadius,
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'hidden',
          },
        ].concat(t);
        return t;
      },
    },
    {
      key: 'renderSubButton',
      value: function () {
        var t = this,
          u = this.props,
          n = u.subButton,
          l = u.disabled,
          o = u.editable,
          s = u.min,
          f = !o || this.value <= s,
          p = !l && f ? module945.default.stepperDisabledOpacity : 1;

        if (!React.default.isValidElement(n)) {
          var h = {
              width: module945.default.stepperButtonWidth,
              height: module945.default.stepperButtonHeight,
              alignItems: 'center',
              justifyContent: 'center',
            },
            b = {
              color: module945.default.stepperBtnTextColor,
              fontSize: module945.default.stepperBtnFontSize,
            };
          n = React.default.createElement(
            ReactNative.View,
            {
              style: h,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: b,
              },
              n
            )
          );
        }

        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            disabled: f,
            onPress: function () {
              return t.onSubButtonPress();
            },
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                opacity: p,
              },
            },
            n
          )
        );
      },
    },
    {
      key: 'renderAddButton',
      value: function () {
        var t = this,
          u = this.props,
          n = u.addButton,
          l = u.disabled,
          o = u.editable,
          s = u.max,
          f = !o || this.value >= s,
          p = !l && f ? module945.default.stepperDisabledOpacity : 1,
          h = {
            width: module945.default.stepperButtonWidth,
            height: module945.default.stepperButtonHeight,
            alignItems: 'center',
            justifyContent: 'center',
          },
          b = {
            color: module945.default.stepperBtnTextColor,
            fontSize: module945.default.stepperBtnFontSize,
          };
        if (!React.default.isValidElement(n))
          n = React.default.createElement(
            ReactNative.View,
            {
              style: h,
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: b,
              },
              n
            )
          );
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            disabled: f,
            onPress: function () {
              return t.onAddButtonPress();
            },
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                opacity: p,
              },
            },
            n
          )
        );
      },
    },
    {
      key: 'renderValue',
      value: function () {
        var t = this.props,
          module11 = t.valueStyle,
          n = t.valueFormat;
        module11 = [
          {
            color: module945.default.stepperTextColor,
            fontSize: module945.default.stepperFontSize,
            textAlign: 'center',
            minWidth: module945.default.stepperValueMinWidth,
            paddingHorizontal: module945.default.stepperValuePaddingHorizontal,
          },
        ].concat(module11);
        return React.default.createElement(
          ReactNative.Text,
          {
            style: module11,
            numberOfLines: 1,
          },
          n ? n(this.value) : this.value
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t,
          l = this,
          o = this.props,
          s = o.style,
          f = o.pointerEvents,
          p = o.opacity,
          h = o.showSeparator,
          B = o.disabled,
          S = module52.default(o, b);

        if (((s = this.buildStyle()), h)) {
          var w = ReactNative.StyleSheet.flatten(s);
          t = React.default.createElement(ReactNative.View, {
            style: {
              backgroundColor: w.borderColor,
              width: w.borderWidth,
              height: this.state.height,
            },
          });
        }

        return React.default.createElement(
          ReactNative.View,
          module11.default(
            {
              style: s,
              pointerEvents: B ? 'none' : f,
              opacity: B ? module945.default.stepperDisabledOpacity : p,
              onLayout: function (t) {
                return l.onLayout(t);
              },
            },
            S
          ),
          this.renderSubButton(),
          t,
          this.renderValue(),
          t,
          this.renderAddButton()
        );
      },
    },
  ]);
  return V;
})(React.Component);

exports.default = w;
w.propTypes = module11.default({}, ReactNative.ViewPropTypes, {
  defaultValue: PropTypes.default.number,
  value: PropTypes.default.number,
  step: PropTypes.default.number,
  max: PropTypes.default.number,
  min: PropTypes.default.number,
  valueStyle: ReactNative.Text.propTypes.style,
  valueFormat: PropTypes.default.func,
  subButton: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string]),
  addButton: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string]),
  showSeparator: PropTypes.default.bool,
  disabled: PropTypes.default.bool,
  editable: PropTypes.default.bool,
  onChange: PropTypes.default.func,
});
w.defaultProps = module11.default({}, ReactNative.View.defaultProps, {
  defaultValue: 0,
  step: 1,
  subButton: '\uff0d',
  addButton: '\uff0b',
  showSeparator: true,
  disabled: false,
  editable: true,
});
