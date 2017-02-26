const PropTypes = require('react').PropTypes;

const aphroditePropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ])),
  PropTypes.object,
  PropTypes.string,
]);

module.exports = aphroditePropType;
