// src/components/Image.jsx

import PropTypes from 'prop-types';
import styles from './Image.module.css';

const Image = ({ src, alt, width, height }) => {
  return <img className={styles.image} src={src} alt={alt} width={width} height={height} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Image;
