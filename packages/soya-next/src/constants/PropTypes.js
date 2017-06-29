import PropTypes from 'prop-types';

export const localeShape = PropTypes.shape({
  country: PropTypes.string,
  language: PropTypes.string,
});

export const urlShape = PropTypes.shape({
  pathname: PropTypes.string.isRequired,
  query: PropTypes.objectOf(PropTypes.string),
});