import React from 'react';
import styles from './styles.css';

const Title = ({ title, city }) => (
  <div>
    <h1>{title}</h1>
    <div>
      <p>{city}</p>
    </div>
  </div>
);

export default Title;
