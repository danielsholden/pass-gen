import { Option } from '../types';

export const generatePassword = (passLength: number, options: Set<Option>): string => {
  const map = {
    [Option.LowerCase]: 'abcdefghijklmnopqrstuvwxyz',
    [Option.UpperCase]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    [Option.Numbers]: '0123456789',
    [Option.Symbols]: '@#$%^&*()_+[]{}|;:,.<>?',
  };

  const array = [...options].map(option => map[option]);
  const pass = [];

  for (let i = 0; i < passLength; i++) {
    const symbols = array[i % array.length];
    const index = Math.floor(Math.random() * symbols.length);
    pass.push(symbols[index]);
  }
  shuffle(pass);
  return pass.join('');
};

const shuffle = (array: string[]): void => {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
};
