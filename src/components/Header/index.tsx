import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {ROUTES} from '../../providers/navigation';

type HeaderProps = {
  hasBack?: boolean;
  hasSettings?: boolean;
};

export const Header = ({hasBack, hasSettings = true}: HeaderProps) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header>
      {hasBack && <Appbar.BackAction onPress={onBack} />}
      <Appbar.Content title="EtherWallet" />
      {hasSettings && (
        <Appbar.Action
          icon="cog"
          onPress={() => navigation.navigate(ROUTES.SETTINGS)}
        />
      )}
    </Appbar.Header>
  );
};
