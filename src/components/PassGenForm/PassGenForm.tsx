import React from 'react';

import { Slider } from './components/Slider';
import { InputClipboard } from './components/InputClipboard';
import { Checkbox } from './components/Checkbox';

import { generatePassword } from './helpers/generatePass';
import { Option } from './types';

import styles from './PassGenForm.module.scss';

const initOption = new Set([Option.LowerCase]);

const PassGenForm = () => {
  const [passLength, setLength] = React.useState(10);
  const [options, setOption] = React.useState<Set<Option>>(initOption);
  const [password, setPassword] = React.useState('');

  const handleSelectOption = (option: Option): void => {
    if (options.size === 1 && options.has(option)) {
      return;
    }
    const newOptions = new Set(options);
    if (options.has(option)) {
      newOptions.delete(option);
    } else {
      newOptions.add(option);
    }
    setOption(newOptions);
  };

  const handleGeneratePassword = (): void => {
    setPassword(generatePassword(passLength, options));
  };

  return (
    <div className={styles.container}>
      <InputClipboard value={password} />
      <Slider value={passLength} onChange={setLength} />
      <div className={styles.options}>
        <Checkbox
          checked={options.has(Option.LowerCase)}
          onChange={() => handleSelectOption(Option.LowerCase)}
        >
          Include Lowercase
        </Checkbox>
        <Checkbox
          checked={options.has(Option.UpperCase)}
          onChange={() => handleSelectOption(Option.UpperCase)}
        >
          Include Uppercase
        </Checkbox>
        <Checkbox
          checked={options.has(Option.Numbers)}
          onChange={() => handleSelectOption(Option.Numbers)}
        >
          Include Numbers
        </Checkbox>
        <Checkbox
          checked={options.has(Option.Symbols)}
          onChange={() => handleSelectOption(Option.Symbols)}
        >
          Include Symbols
        </Checkbox>
      </div>
      <button className={styles.generateButton} onClick={handleGeneratePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default React.memo(PassGenForm);
