var module11 = require('./11'),
  module63 = require('./63'),
  module66 = require('./66'),
  module70 = require('./70'),
  module71 = require('./71'),
  PropTypes = require('prop-types'),
  c = module11({}, module66, module70, module71, {
    resizeMode: PropTypes.oneOf(['center', 'contain', 'cover', 'repeat', 'stretch']),
    backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
    backgroundColor: module63,
    borderColor: module63,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    overflow: PropTypes.oneOf(['visible', 'hidden']),
    tintColor: module63,
    opacity: PropTypes.number,
    overlayColor: PropTypes.string,
    borderTopLeftRadius: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    borderBottomLeftRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
  });

module.exports = c;
