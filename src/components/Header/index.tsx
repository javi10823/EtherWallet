import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {ROUTES} from '../../providers/navigation';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.Content title="EtherWallet" />
      <Appbar.Action
        icon="cog"
        onPress={() => navigation.navigate(ROUTES.SETTINGS)}
      />
    </Appbar.Header>
  );
};
