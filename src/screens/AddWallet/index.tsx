import React, {useContext, useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {
  ButtonStyle,
  Container,
  ContentContainer,
  ImageContainer,
  InputStyle,
  Label,
} from './styles';
import {importMnemonic} from 'react-native-web3-wallet';
import * as Keychain from 'react-native-keychain';
import {WalletContext} from '../../providers/wallet';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../providers/navigation';
import {KEYCHAIN_PRIVATE_KEY} from '../../utils/constants';
import Logo from '../../assets/logo.png';

export const AddWalletScreen = () => {
  const [seed, setSeed] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {setWallet} = useContext(WalletContext);

  const getPrivateKey = () => {
    console.log('Add');
    importMnemonic(seed, 'password', "m/44'/60'/0'/0/0", true, true, false)
      .then(wallet => {
        console.log('Wallet loaded', wallet);

        setWallet(wallet);
        if (wallet.privateKey) {
          console.log('Wallet private key');
          return Keychain.setGenericPassword(KEYCHAIN_PRIVATE_KEY, seed, {
            storage: Keychain.STORAGE_TYPE.FB,
            authenticationPrompt: {
              title: 'Save your wallet',
            },
            service: '',
          });
        }
      })
      .then(() => {
        console.log('Wallet saved');

        navigation.navigate(ROUTES.HOME);
      })
      .finally(() => {
        console.log('Finally');

        setIsLoading(false);
      });
  };

  return (
    <SafeAreaView>
      <Container>
        <ImageContainer>
          <Image source={Logo} />
        </ImageContainer>
        <ContentContainer>
          <Label>Write your recovery phrase to add a wallet</Label>
          <TextInput label="Seed" onChangeText={setSeed} style={InputStyle} />
        </ContentContainer>
        <Button
          loading={isLoading}
          mode="contained"
          style={ButtonStyle}
          onPress={getPrivateKey}>
          Add wallet
        </Button>
      </Container>
    </SafeAreaView>
  );
};
