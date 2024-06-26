// src/components/Paragraph.jsx

import PropTypes from 'prop-types';
import styles from './Paragraph.module.css';

const Paragraph = ({ text }) => {
  return <p className={styles.paragraph}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default Paragraph;
