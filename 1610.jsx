var module260 = require('./260'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = I(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1611 = I(require('./1611')),
  module1616 = require('./1616'),
  module1617 = require('./1617'),
  module1615 = require('./1615'),
  module1618 = require('./1618'),
  module1614 = require('./1614'),
  x = [
    'disabled',
    'editable',
    'label',
    'error',
    'selectionColor',
    'underlineColor',
    'outlineColor',
    'dense',
    'style',
    'theme',
    'render',
    'multiline',
    'parentState',
    'innerRef',
    'onFocus',
    'forceFocus',
    'onBlur',
    'onChangeText',
    'onLayoutAnimatedText',
    'onLeftAffixLayoutChange',
    'onRightAffixLayoutChange',
    'left',
    'right',
    'placeholderTextColor',
  ],
  E = ['fontSize', 'fontWeight', 'height', 'backgroundColor', 'textAlign'];

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (L = function (t) {
    return t ? o : n;
  })(t);
}

function I(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = L(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
      else l[f] = t[f];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
}

function _() {
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

var M = (function (t) {
  module35.default(P, t);

  var L = P,
    I = _(),
    M = function () {
      var t,
        n = module34.default(L);

      if (I) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return M.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'render',
      value: function () {
        var t,
          module24,
          f,
          c,
          s,
          p,
          L,
          I,
          _ = this.props,
          M = _.disabled,
          P = _.editable,
          N = _.label,
          F = _.error,
          B = _.selectionColor,
          D = _.outlineColor,
          k = _.dense,
          W = _.style,
          Z = _.theme,
          j = _.render,
          z = _.multiline,
          H = _.parentState,
          X = _.innerRef,
          V = _.onFocus,
          Y = _.forceFocus,
          G = _.onBlur,
          q = _.onChangeText,
          J = _.onLayoutAnimatedText,
          K = _.onLeftAffixLayoutChange,
          Q = _.onRightAffixLayoutChange,
          U = _.left,
          $ = _.right,
          ee = _.placeholderTextColor,
          te = module52.default(_, x),
          ne = module1611.getAdornmentConfig({
            left: U,
            right: $,
          }),
          oe = Z.colors,
          le = Z.fonts.regular,
          re = H.focused || F,
          ae = ReactNative.StyleSheet.flatten(W) || {},
          ie = ae.fontSize,
          ue = ae.fontWeight,
          de = ae.height,
          fe = ae.backgroundColor,
          ce = undefined === fe ? oe.background : fe,
          se = ae.textAlign,
          pe = module52.default(ae, E),
          he = ie || module1615.MAXIMIZED_LABEL_FONT_SIZE;

        if (M) {
          var ge = 0 === module564.default(D).alpha();
          c = s = module564.default(oe.text).alpha(0.54).rgb().string();
          L = oe.disabled;
          p = ge ? D : oe.disabled;
        } else {
          c = oe.text;
          s = F ? oe.error : oe.primary;
          L = oe.placeholder;
          p = D || oe.placeholder;
          I = oe.error;
        }

        var be = module1615.MINIMIZED_LABEL_FONT_SIZE / he,
          ye = module1615.MAXIMIZED_LABEL_FONT_SIZE / he,
          me = H.labelLayout.width,
          Ae = H.labelLayout.height,
          Ce = me / 2,
          Oe = Ae / 2,
          Te = (ReactNative.I18nManager.isRTL ? 1 : -1) * (Ce - (be * me) / 2 - (he - module1615.MINIMIZED_LABEL_FONT_SIZE) * be),
          Se = 0;
        if (
          ne.some(function (t) {
            var n = t.side,
              o = t.type;
            return n === module1614.AdornmentSide.Left && o === module1614.AdornmentType.Icon;
          })
        )
          Se = (ReactNative.I18nManager.isRTL ? -1 : 1) * (module1615.ADORNMENT_SIZE + module1615.ADORNMENT_OFFSET - 8);
        var ve = (k ? 48 : 64) - 8,
          xe = module1618.calculateInputHeight(Ae, de, ve),
          Ee = module1618.calculateLabelTopPosition(Ae, xe, 8);
        if (de && 'number' != typeof de) console.warn('Currently we support only numbers in height prop');
        t = {};
        module260.default(t, module1614.AdornmentSide.Left, Fe);
        module260.default(t, module1614.AdornmentSide.Right, Be);
        module24 = {};
        module260.default(module24, module1614.AdornmentSide.Left, K);
        module260.default(module24, module1614.AdornmentSide.Right, Q);

        var Le = {
            height: de ? +de : null,
            labelHalfHeight: Oe,
            offset: 8,
            multiline: z || null,
            dense: k || null,
            topPosition: Ee,
            fontSize: he,
            label: N,
            scale: ye,
            isAndroid: 'android' === ReactNative.Platform.OS,
            styles: ReactNative.StyleSheet.flatten(k ? w.inputOutlinedDense : w.inputOutlined),
          },
          Ie = module1618.calculatePadding(Le),
          _e = module1618.adjustPaddingOut(
            module11.default({}, Le, {
              pad: Ie,
            })
          ),
          Me = -Oe - (Ee + -6),
          Pe = {
            label: N,
            onLayoutAnimatedText: J,
            placeholderOpacity: re ? module1618.interpolatePlaceholder(H.labeled, re) : H.labelLayout.measured ? 1 : 0,
            error: F,
            placeholderStyle: w.placeholder,
            baseLabelTranslateY: Me,
            baseLabelTranslateX: Te,
            font: le,
            fontSize: he,
            fontWeight: ue,
            labelScale: be,
            wiggleOffsetX: module1615.LABEL_WIGGLE_X_OFFSET,
            topPosition: Ee,
            hasActiveOutline: re,
            activeColor: s,
            placeholderColor: L,
            backgroundColor: ce,
            errorColor: I,
            labelTranslationXOffset: Se,
          },
          Re = de || (k ? 48 : 64),
          we = H.leftLayout,
          Ne = H.rightLayout,
          Fe = module1618.calculateOutlinedIconAndAffixTopPosition({
            height: Re,
            affixHeight: we.height || 0,
            labelYOffset: 6,
          }),
          Be = module1618.calculateOutlinedIconAndAffixTopPosition({
            height: Re,
            affixHeight: Ne.height || 0,
            labelYOffset: 6,
          }),
          De = module1618.calculateOutlinedIconAndAffixTopPosition({
            height: Re,
            affixHeight: module1615.ADORNMENT_SIZE,
            labelYOffset: 6,
          }),
          ke = ($ && Ne.width) || module1615.ADORNMENT_SIZE,
          We = (U && we.width) || module1615.ADORNMENT_SIZE,
          Ze = module1611.getAdornmentStyleAdjustmentForNativeInput({
            adornmentConfig: ne,
            rightAffixWidth: ke,
            leftAffixWidth: We,
            mode: 'outlined',
          }),
          je = t,
          ze = module24,
          He = {
            adornmentConfig: ne,
            forceFocus: Y,
            topPosition: ((f = {}), module260.default(f, module1614.AdornmentType.Icon, De), module260.default(f, module1614.AdornmentType.Affix, je), f),
            onAffixChange: ze,
            isTextInputFocused: H.focused,
          };

        if (ne.length)
          He = module11.default({}, He, {
            left: U,
            right: $,
            textStyle: module11.default({}, le, {
              fontSize: he,
              fontWeight: ue,
            }),
            visible: this.props.parentState.labeled,
          });
        return (
          <ReactNative.View style={pe}>
            <ReactNative.View>
              <R theme={Z} hasActiveOutline={re} activeColor={s} outlineColor={p} backgroundColor={ce} />
              <ReactNative.View
                style={[
                  w.labelContainer,
                  {
                    paddingTop: 8,
                    minHeight: Re,
                  },
                ]}
              >
                <module1616.default parentState={H} labelProps={Pe} labelBackground={module1617.default} />
                {null == j
                  ? undefined
                  : j(
                      module11.default({}, te, {
                        ref: X,
                        onChangeText: q,
                        placeholder: N ? H.placeholder : this.props.placeholder,
                        placeholderTextColor: ee || L,
                        editable: !M && P,
                        selectionColor: undefined === B ? s : B,
                        onFocus: V,
                        onBlur: G,
                        underlineColorAndroid: 'transparent',
                        multiline: z,
                        style: [
                          w.input,
                          !z || (z && de)
                            ? {
                                height: xe,
                              }
                            : {},
                          _e,
                          module11.default({}, le, {
                            fontSize: he,
                            fontWeight: ue,
                            color: c,
                            textAlignVertical: z ? 'top' : 'center',
                            textAlign: se || (ReactNative.I18nManager.isRTL ? 'right' : 'left'),
                          }),
                          'web' === ReactNative.Platform.OS && {
                            outline: 'none',
                          },
                          Ze,
                        ],
                      })
                    )}
              </ReactNative.View>
              <module1611.default />
            </ReactNative.View>
          </ReactNative.View>
        );
      },
    },
  ]);
  return P;
})(React.Component);

M.defaultProps = {
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: function (t) {
    return <ReactNative.TextInput />;
  },
};
var P = M;
exports.default = P;

var R = function (t) {
    var n = t.theme,
      o = t.hasActiveOutline,
      l = t.activeColor,
      u = t.outlineColor,
      f = t.backgroundColor;
    return (
      <ReactNative.View
        pointerEvents="none"
        style={[
          w.outline,
          {
            backgroundColor: f,
            borderRadius: n.roundness,
            borderWidth: o ? 2 : 1,
            borderColor: o ? l : u,
          },
        ]}
      />
    );
  },
  w = ReactNative.StyleSheet.create({
    placeholder: {
      position: 'absolute',
      left: 0,
      paddingHorizontal: 14,
    },
    outline: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 6,
      bottom: 0,
    },
    labelContainer: {
      paddingBottom: 0,
    },
    input: {
      flexGrow: 1,
      paddingHorizontal: 14,
      margin: 0,
      zIndex: 1,
    },
    inputOutlined: {
      paddingTop: 8,
      paddingBottom: 8,
    },
    inputOutlinedDense: {
      paddingTop: 4,
      paddingBottom: 4,
    },
  });
