import React from 'react';

import styles from './Slider.module.scss';

type Props = {
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<Props> = (props) => {
  return (
    <div>
      <label htmlFor="length">
        Character length&nbsp;
        <span className={styles.lengthValue}>{props.value}</span>
      </label>
      <input
        type="range"
        id="length"
        className={styles.lengthSlider}
        min="1"
        max="20"
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default React.memo(Slider);
