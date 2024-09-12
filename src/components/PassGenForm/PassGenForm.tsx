import React from 'react';

import { Slider } from './components/Slider';

import styles from './PassGenForm.module.scss';

const PassGenForm = () => {
  const [length, setLength] = React.useState(10);
  const [includeLower, setIncludeLower] = React.useState(true);
  const [includeUpper, setIncludeUpper] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const generatePassword = (): void => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let characterSet = "";

    if (includeLower) characterSet += lower;
    if (includeUpper) characterSet += upper;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

    if (characterSet === "") return;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      newPassword += characterSet[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.passwordOutput}
        value={password}
        placeholder='Generated password'
        readOnly
      />
      <button
        className={styles.copyButton}
        onClick={copyToClipboard}
      >
        Copy
      </button>
      <Slider value={length} onChange={setLength} />
      <div className={styles.options}>
        <label>
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>
      <button className={styles.generateButton} onClick={generatePassword}>
        Generate
      </button>
    </div>
  );
};

export default React.memo(PassGenForm);
