const PropTypes = require('prop-types');

const aphroditePropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ])),
  PropTypes.object,
  PropTypes.string,
]);

module.exports = aphroditePropType;
