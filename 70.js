var module63 = require('./63'),
  PropTypes = require('prop-types'),
  o = {
    shadowColor: module63,
    shadowOffset: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
  };

module.exports = o;
