var ReactNative = require('react-native');

exports.default = function (t) {
  return ReactNative.StyleSheet.create({
    container: {
      height: t.list_item_height + t.border_width_sm,
      borderBottomWidth: ReactNative.StyleSheet.hairlineWidth,
      borderBottomColor: t.border_color_base,
      marginLeft: t.h_spacing_lg,
      paddingRight: t.h_spacing_lg,
      marginTop: 0,
      marginBottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginRight: t.h_spacing_sm,
      textAlignVertical: 'center',
      fontSize: t.font_size_heading,
      color: t.color_text_base,
    },
    input: {
      flex: 1,
      backgroundColor: 'transparent',
      fontSize: t.input_font_size,
      color: t.color_text_base,
    },
    inputDisabled: {
      backgroundColor: t.fill_disabled,
      color: t.color_text_disabled,
    },
    inputErrorColor: {
      color: '#f50',
    },
    clear: {
      backgroundColor: t.color_icon_base,
      borderRadius: 15,
      padding: 2,
    },
    extra: {
      marginLeft: t.h_spacing_sm,
      fontSize: t.font_size_subhead,
      color: t.color_text_caption,
    },
    errorIcon: {
      marginLeft: t.h_spacing_sm,
      width: t.icon_size_sm,
      height: t.icon_size_sm,
    },
  });
};
