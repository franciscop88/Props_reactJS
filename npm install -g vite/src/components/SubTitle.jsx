// src/components/SubTitle.jsx

import PropTypes from 'prop-types';
import styles from './SubTitle.module.css';

const SubTitle = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default SubTitle;

