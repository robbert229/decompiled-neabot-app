var module11 = require('./11'),
  module63 = require('./63'),
  module74 = require('./74'),
  PropTypes = require('prop-types'),
  u = module11({}, module74, {
    color: module63,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontStyle: PropTypes.oneOf(['normal', 'italic']),
    fontWeight: PropTypes.oneOf(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),
    fontVariant: PropTypes.arrayOf(PropTypes.oneOf(['small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums'])),
    textShadowOffset: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    textShadowRadius: PropTypes.number,
    textShadowColor: module63,
    letterSpacing: PropTypes.number,
    lineHeight: PropTypes.number,
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    textAlignVertical: PropTypes.oneOf(['auto', 'top', 'bottom', 'center']),
    includeFontPadding: PropTypes.bool,
    textDecorationLine: PropTypes.oneOf(['none', 'underline', 'line-through', 'underline line-through']),
    textDecorationStyle: PropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),
    textDecorationColor: module63,
    textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
    writingDirection: PropTypes.oneOf(['auto', 'ltr', 'rtl']),
  });

module.exports = u;
