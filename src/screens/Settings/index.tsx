import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {ROUTES} from '../../providers/navigation';
import {WalletContext} from '../../providers/wallet';
import {ButtonStyle, Container} from './styles';
import * as Keychain from 'react-native-keychain';

export const SettingsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {setWallet} = useContext(WalletContext);
  const navigation = useNavigation();

  const removeWallet = async () => {
    setIsLoading(true);
    setWallet(undefined);
    await Keychain.resetGenericPassword({
      storage: Keychain.STORAGE_TYPE.FB,
      authenticationPrompt: {
        title: 'Save your wallet',
      },
      authenticationType:
        Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
    });
    setIsLoading(false);
    navigation.navigate(ROUTES.ONBOARDING);
  };

  return (
    <SafeAreaView>
      <Container>
        <Text variant="headlineLarge">Settings</Text>
        <Button
          mode="contained"
          style={ButtonStyle}
          onPress={removeWallet}
          disabled={isLoading}>
          Remove wallet
        </Button>
      </Container>
    </SafeAreaView>
  );
};
