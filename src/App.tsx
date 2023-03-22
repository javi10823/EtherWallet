import React from 'react';
import Navigation from './providers/navigation';
import {WalletProvider} from './providers/wallet';

const App = () => {
  return (
    <WalletProvider>
      <Navigation />
    </WalletProvider>
  );
};

export default App;
