import React from 'react';

import { PassGenForm } from './components/PassGenForm';

import styles from './App.module.scss';

const App: React.FC = () => (
  <div className={styles.container}>
    <PassGenForm />
  </div>
);

export default App;
