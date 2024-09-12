import React from 'react';

import clipboardImg from './public/clipboard.svg';
import checkmarkImg from './public/checkmark.svg';

import styles from './InputClipboard.module.scss';

type Props = {
  value: string;
};

const InputClipboard: React.FC<Props> = (props) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(props.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={props.value}
        placeholder='Generated password'
        readOnly
      />
      <button onClick={copyToClipboard} className={styles.button}>
        <img src={copied ? checkmarkImg : clipboardImg} alt='clipboard' /> 
      </button>
    </div>
  );
};

export default React.memo(InputClipboard);