import React, { PropsWithChildren } from 'react';

import styles from './Checkbox.module.scss';

type Props = {
  checked: boolean;
  onChange(): void;
}

const Checkbox: React.FC<PropsWithChildren<Props>> = (props) => (
  <div className={styles.checkbox}>
    <label>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.children}
    </label>
  </div>
);

export default React.memo(Checkbox);