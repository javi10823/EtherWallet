import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Card, Text} from 'react-native-paper';
import {WalletContext} from '../../providers/wallet';
import {bigNumberFormatUnits, getBalance} from 'react-native-web3-wallet';
import {ActionButton, ActionContainer, AddressStyle, Container} from './styles';
import {RPC_ADDRESS} from '@env';
import {Header} from '../../components/Header';
import {ROUTES} from '../../providers/navigation';
import {useNavigation} from '@react-navigation/native';
import {ComingSoon} from '../../components/ComingSoon';

export const Home = () => {
  const {wallet} = useContext(WalletContext);
  const [balance, setBalance] = useState('-');
  const [commingSoonVisible, setCoomingSoonVisible] = useState(false);
  const navigation = useNavigation();

  const getUserBalance = useCallback(() => {
    if (wallet) {
      getBalance(RPC_ADDRESS, wallet?.address!)
        .then((res: any) => {
          return setBalance(bigNumberFormatUnits(res, 18));
        })
        .catch(err => {
          console.error("Failed to fetch wallet's balance", err);
        });
    }
  }, [wallet]);

  const onReceive = () => {
    navigation.navigate(ROUTES.RECEIVE);
  };

  useEffect(() => {
    getUserBalance();
  }, [getUserBalance]);

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Content>
            <Text variant="headlineLarge">{balance} ETH</Text>
            <Text variant="labelLarge" style={AddressStyle}>
              {wallet?.address}
            </Text>
          </Card.Content>
          <Card.Actions>
            <ActionContainer>
              <ActionButton mode="contained" onPress={onReceive}>
                Receive
              </ActionButton>
              <ActionButton
                mode="contained"
                onPress={() => setCoomingSoonVisible(true)}>
                Send
              </ActionButton>
            </ActionContainer>
          </Card.Actions>
        </Card>
      </Container>
      <ComingSoon
        visible={commingSoonVisible}
        onHide={() => setCoomingSoonVisible(false)}
      />
    </>
  );
};
