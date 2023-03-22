import React, {useContext} from 'react';
import {Card, Text} from 'react-native-paper';
import {WalletContext} from '../../providers/wallet';
import {Header} from '../../components/Header';
import {AddressStyle, Container} from './styles';

export const Receive = () => {
  const {wallet} = useContext(WalletContext);

  return (
    <>
      <Header hasBack />
      <Container>
        <Card>
          <Card.Content>
            <Text variant="headlineLarge">Main Wallet</Text>
            <Text variant="labelLarge" style={AddressStyle}>
              {wallet?.address}
            </Text>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};
