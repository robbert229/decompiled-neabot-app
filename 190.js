var module11 = require('./11'),
  module187 = require('./187'),
  module75 = {
    uiViewClassName: 'RCTSinglelineTextInputView',
    bubblingEventTypes: {
      topBlur: {
        phasedRegistrationNames: {
          bubbled: 'onBlur',
          captured: 'onBlurCapture',
        },
      },
      topChange: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture',
        },
      },
      topEndEditing: {
        phasedRegistrationNames: {
          bubbled: 'onEndEditing',
          captured: 'onEndEditingCapture',
        },
      },
      topFocus: {
        phasedRegistrationNames: {
          bubbled: 'onFocus',
          captured: 'onFocusCapture',
        },
      },
      topKeyPress: {
        phasedRegistrationNames: {
          bubbled: 'onKeyPress',
          captured: 'onKeyPressCapture',
        },
      },
      topSubmitEditing: {
        phasedRegistrationNames: {
          bubbled: 'onSubmitEditing',
          captured: 'onSubmitEditingCapture',
        },
      },
      topTouchCancel: {
        phasedRegistrationNames: {
          bubbled: 'onTouchCancel',
          captured: 'onTouchCancelCapture',
        },
      },
      topTouchEnd: {
        phasedRegistrationNames: {
          bubbled: 'onTouchEnd',
          captured: 'onTouchEndCapture',
        },
      },
      topTouchMove: {
        phasedRegistrationNames: {
          bubbled: 'onTouchMove',
          captured: 'onTouchMoveCapture',
        },
      },
    },
    directEventTypes: {},
    validAttributes: module11.default({}, module187.default.validAttributes, {
      fontSize: true,
      fontWeight: true,
      fontVariant: true,
      textShadowOffset: {
        diff: require('./78'),
      },
      allowFontScaling: true,
      fontStyle: true,
      textTransform: true,
      textAlign: true,
      fontFamily: true,
      lineHeight: true,
      isHighlighted: true,
      writingDirection: true,
      textDecorationLine: true,
      textShadowRadius: true,
      letterSpacing: true,
      textDecorationStyle: true,
      textDecorationColor: {
        process: require('./75'),
      },
      color: {
        process: require('./75'),
      },
      maxFontSizeMultiplier: true,
      textShadowColor: {
        process: require('./75'),
      },
      editable: true,
      inputAccessoryViewID: true,
      caretHidden: true,
      enablesReturnKeyAutomatically: true,
      placeholderTextColor: {
        process: require('./75'),
      },
      onSelectionChange: true,
      clearButtonMode: true,
      onContentSizeChange: true,
      keyboardType: true,
      selection: true,
      returnKeyType: true,
      blurOnSubmit: true,
      mostRecentEventCount: true,
      onChange: true,
      scrollEnabled: true,
      selectionColor: {
        process: require('./75'),
      },
      contextMenuHidden: true,
      secureTextEntry: true,
      onTextInput: true,
      placeholder: true,
      autoCorrect: true,
      onScroll: true,
      multiline: true,
      textContentType: true,
      maxLength: true,
      autoCapitalize: true,
      keyboardAppearance: true,
      passwordRules: true,
      spellCheck: true,
      selectTextOnFocus: true,
      text: true,
      clearTextOnFocus: true,
    }),
  };

module.exports = module75;
