var module260 = require('./260'),
  module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = E(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1616 = require('./1616'),
  module1611 = E(require('./1611')),
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
  v = ['fontSize', 'fontWeight', 'height', 'paddingHorizontal', 'textAlign'];

function F(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (F = function (t) {
    return t ? o : n;
  })(t);
}

function E(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = F(n);
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

function I() {
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

var O = (function (t) {
  module35.default(_, t);

  var F = _,
    E = I(),
    O = function () {
      var t,
        n = module34.default(F);

      if (E) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function _() {
    module24.default(this, _);
    return O.apply(this, arguments);
  }

  module25.default(_, [
    {
      key: 'render',
      value: function () {
        var t,
          module24,
          f,
          c = this.props,
          p = c.disabled,
          s = c.editable,
          F = c.label,
          E = c.error,
          I = c.selectionColor,
          O = c.underlineColor,
          _ = c.dense,
          M = c.style,
          w = c.theme,
          N = c.render,
          z = c.multiline,
          B = c.parentState,
          H = c.innerRef,
          W = c.onFocus,
          k = c.forceFocus,
          D = c.onBlur,
          j = c.onChangeText,
          Z = c.onLayoutAnimatedText,
          X = c.onLeftAffixLayoutChange,
          V = c.onRightAffixLayoutChange,
          G = c.left,
          U = c.right,
          Y = c.placeholderTextColor,
          q = module52.default(c, x),
          J = w.colors,
          K = w.fonts.regular,
          Q = B.focused || E,
          $ = ReactNative.StyleSheet.flatten(M) || {},
          ee = $.fontSize,
          te = $.fontWeight,
          ne = $.height,
          oe = $.paddingHorizontal,
          re = $.textAlign,
          le = module52.default($, v),
          ae = ee || module1615.MAXIMIZED_LABEL_FONT_SIZE,
          ie = undefined !== oe && 'number' == typeof oe,
          de = module1611.getAdornmentConfig({
            left: G,
            right: U,
          }),
          ue = module1618.calculateFlatInputHorizontalPadding({
            adornmentConfig: de,
          }),
          fe = ue.paddingLeft,
          ce = ue.paddingRight;

        if (ie) {
          fe = oe;
          ce = oe;
        }

        var pe,
          se,
          ge,
          he,
          be,
          ye = B.leftLayout,
          me = B.rightLayout,
          Ae = (U && me.width) || module1615.ADORNMENT_SIZE,
          Te = (G && ye.width) || module1615.ADORNMENT_SIZE,
          Se = module1611.getAdornmentStyleAdjustmentForNativeInput({
            adornmentConfig: de,
            rightAffixWidth: Ae,
            leftAffixWidth: Te,
            paddingHorizontal: oe,
            inputOffset: module1615.FLAT_INPUT_OFFSET,
            mode: module1614.InputMode.Flat,
          });

        if (p) {
          pe = se = module564.default(J.text).alpha(0.54).rgb().string();
          he = J.disabled;
          ge = 'transparent';
        } else {
          pe = J.text;
          se = E ? J.error : J.primary;
          he = J.placeholder;
          be = J.error;
          ge = O || J.disabled;
        }

        var Le = {
            backgroundColor: w.dark ? module564.default(J.background).lighten(0.24).rgb().string() : module564.default(J.background).darken(0.06).rgb().string(),
            borderTopLeftRadius: w.roundness,
            borderTopRightRadius: w.roundness,
          },
          Ce = module1615.MINIMIZED_LABEL_FONT_SIZE / ae,
          xe = module1615.MAXIMIZED_LABEL_FONT_SIZE / ae,
          ve = B.labelLayout.width,
          Fe = B.labelLayout.height,
          Ee = ve / 2,
          Ie = Fe / 2,
          Oe = (ReactNative.I18nManager.isRTL ? 1 : -1) * (Ee - (Ce * ve) / 2) + (1 - Ce) * (ReactNative.I18nManager.isRTL ? -1 : 1) * fe,
          _e = _ ? (F ? 52 : 40) - 24 : 34,
          Pe = module1618.calculateInputHeight(Fe, ne, _e),
          Re = module1618.calculateLabelTopPosition(Fe, Pe, z && ne ? 0 : ne ? 0 : _e / 2);

        if (ne && 'number' != typeof ne) console.warn('Currently we support only numbers in height prop');
        t = {};
        module260.default(t, module1614.AdornmentSide.Left, De);
        module260.default(t, module1614.AdornmentSide.Right, je);
        module24 = {};
        module260.default(module24, module1614.AdornmentSide.Left, X);
        module260.default(module24, module1614.AdornmentSide.Right, V);
        var Me = {
            height: ne ? +ne : null,
            labelHalfHeight: Ie,
            offset: module1615.FLAT_INPUT_OFFSET,
            multiline: z || null,
            dense: _ || null,
            topPosition: Re,
            fontSize: ae,
            label: F,
            scale: xe,
            isAndroid: 'android' === ReactNative.Platform.OS,
            styles: ReactNative.StyleSheet.flatten(_ ? R.inputFlatDense : R.inputFlat),
          },
          we = module1618.calculatePadding(Me),
          Ne = module1618.adjustPaddingFlat(
            module11.default({}, Me, {
              pad: we,
            })
          ),
          ze = -Ie - (Re + -18),
          Be = Q ? module1618.interpolatePlaceholder(B.labeled, Q) : B.labelLayout.measured ? 1 : 0,
          He = ne || (_ ? (F ? 52 : 40) : 64),
          We = Pe + (ne ? 0 : _ ? 24 : 30),
          ke = (We - module1615.ADORNMENT_SIZE) / 2,
          De = ye.height
            ? module1618.calculateFlatAffixTopPosition(
                module11.default(
                  {
                    height: We,
                  },
                  Ne,
                  {
                    affixHeight: ye.height,
                  }
                )
              )
            : null,
          je = me.height
            ? module1618.calculateFlatAffixTopPosition(
                module11.default(
                  {
                    height: We,
                  },
                  Ne,
                  {
                    affixHeight: me.height,
                  }
                )
              )
            : null,
          Ze = {
            label: F,
            onLayoutAnimatedText: Z,
            placeholderOpacity: Be,
            error: E,
            placeholderStyle: R.placeholder,
            baseLabelTranslateY: ze,
            baseLabelTranslateX: Oe,
            font: K,
            fontSize: ae,
            fontWeight: te,
            labelScale: Ce,
            wiggleOffsetX: module1615.LABEL_WIGGLE_X_OFFSET,
            topPosition: Re,
            paddingOffset: {
              paddingLeft: fe,
              paddingRight: ce,
            },
            hasActiveOutline: Q,
            activeColor: se,
            placeholderColor: he,
            errorColor: be,
          },
          Xe = t,
          Ve = module24,
          Ge = {
            paddingHorizontal: oe,
            adornmentConfig: de,
            forceFocus: k,
            topPosition: ((f = {}), module260.default(f, module1614.AdornmentType.Affix, Xe), module260.default(f, module1614.AdornmentType.Icon, ke), f),
            onAffixChange: Ve,
            isTextInputFocused: this.props.parentState.focused,
          };
        if (de.length)
          Ge = module11.default({}, Ge, {
            left: G,
            right: U,
            textStyle: module11.default({}, K, {
              fontSize: ae,
              fontWeight: te,
            }),
            visible: this.props.parentState.labeled,
          });
        return (
          <ReactNative.View style={[Le, le]}>
            <P parentState={B} underlineColorCustom={ge} error={E} colors={J} activeColor={se} />
            <ReactNative.View
              style={[
                R.labelContainer,
                {
                  minHeight: He,
                },
              ]}
            >
              <module1616.default parentState={B} labelProps={Ze} />
              {null == N
                ? undefined
                : N(
                    module11.default({}, q, {
                      ref: H,
                      onChangeText: j,
                      placeholder: F ? B.placeholder : this.props.placeholder,
                      placeholderTextColor: null != Y ? Y : he,
                      editable: !p && s,
                      selectionColor: undefined === I ? se : I,
                      onFocus: W,
                      onBlur: D,
                      underlineColorAndroid: 'transparent',
                      multiline: z,
                      style: [
                        R.input,
                        {
                          paddingLeft: fe,
                          paddingRight: ce,
                        },
                        !z || (z && ne)
                          ? {
                              height: We,
                            }
                          : {},
                        Ne,
                        module11.default({}, K, {
                          fontSize: ae,
                          fontWeight: te,
                          color: pe,
                          textAlignVertical: z ? 'top' : 'center',
                          textAlign: re || (ReactNative.I18nManager.isRTL ? 'right' : 'left'),
                        }),
                        'web' === ReactNative.Platform.OS && {
                          outline: 'none',
                        },
                        Se,
                      ],
                    })
                  )}
            </ReactNative.View>
            <module1611.default />
          </ReactNative.View>
        );
      },
    },
  ]);
  return _;
})(React.Component);

O.defaultProps = {
  disabled: false,
  error: false,
  multiline: false,
  editable: true,
  render: function (t) {
    return <ReactNative.TextInput />;
  },
};
var _ = O;
exports.default = _;

var P = function (t) {
    var n = t.parentState,
      o = t.error,
      l = t.colors,
      u = t.activeColor,
      f = t.underlineColorCustom,
      c = n.focused ? u : f;
    if (o) c = l.error;
    return React.createElement(ReactNative.Animated.View, {
      style: [
        R.underline,
        {
          backgroundColor: c,
          transform: [
            {
              scaleY: n.focused ? 1 : 0.5,
            },
          ],
        },
      ],
    });
  },
  R = ReactNative.StyleSheet.create({
    placeholder: {
      position: 'absolute',
      left: 0,
    },
    underline: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 2,
    },
    labelContainer: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    input: {
      flexGrow: 1,
      margin: 0,
      zIndex: 1,
    },
    inputFlat: {
      paddingTop: 24,
      paddingBottom: 4,
    },
    inputFlatDense: {
      paddingTop: 22,
      paddingBottom: 2,
    },
  });
