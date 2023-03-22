import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {ROUTES} from '../../providers/navigation';
import {WalletContext} from '../../providers/wallet';
import {
  ButtonContainer,
  ButtonStyle,
  Container,
  CustomTextStyle,
  ContentContainer,
} from './styles';
import * as Keychain from 'react-native-keychain';
import {importMnemonic} from 'react-native-web3-wallet';
import {IWallet} from 'react-native-web3-wallet/interface';
import {KEYCHAIN_PRIVATE_KEY} from '../../utils/constants';
import Logo from '../../assets/logo.png';

export const OnboardingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {wallet, setWallet} = useContext(WalletContext);

  useEffect(() => {
    setIsLoading(true);
    Keychain.getGenericPassword({
      storage: Keychain.STORAGE_TYPE.FB,
      authenticationPrompt: {
        title: 'Open your wallet',
      },
      authenticationType:
        Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
    })
      .then(keychainWallet => {
        if (
          keychainWallet &&
          keychainWallet.username === KEYCHAIN_PRIVATE_KEY
        ) {
          return importMnemonic(
            keychainWallet.password,
            'password',
            "m/44'/60'/0'/0/0",
            true,
            true,
            false,
          );
        }
      })
      .then(newWallet => {
        if (newWallet) {
          setWallet(newWallet as IWallet);
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (wallet) {
      navigation.navigate(ROUTES.HOME);
    }
  }, [wallet, navigation]);

  const addWallet = () => {
    navigation.navigate(ROUTES.ADD_WALLET);
  };
  return (
    <SafeAreaView>
      <Container>
        <ContentContainer>
          <Image source={Logo} />
        </ContentContainer>
        <ContentContainer>
          <Text variant="titleLarge" style={CustomTextStyle}>
            EtherWallet
          </Text>
          <Text variant="bodyMedium" style={CustomTextStyle}>
            Welcome to EtherWallet. Connect your wallet to start.
          </Text>
        </ContentContainer>
        <ButtonContainer>
          <Button
            mode="contained"
            style={ButtonStyle}
            onPress={addWallet}
            disabled={isLoading}>
            Add wallet
          </Button>
        </ButtonContainer>
      </Container>
    </SafeAreaView>
  );
};
