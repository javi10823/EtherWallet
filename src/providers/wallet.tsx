import React, {createContext, PropsWithChildren, useState} from 'react';
import {IWallet} from 'react-native-web3-wallet/interface';

type WalletContextType = {
  wallet?: IWallet;
  setWallet: (wallet?: IWallet) => void;
};

const initialValue = {
  wallet: undefined,
  setWallet: () => {},
};

export const WalletContext = createContext<WalletContextType>(initialValue);

export const WalletProvider = ({children}: PropsWithChildren) => {
  const [wallet, setWallet] = useState<IWallet>();

  return (
    <WalletContext.Provider value={{wallet, setWallet}}>
      {children}
    </WalletContext.Provider>
  );
};
