import React from 'react';
import {Button, Dialog, Paragraph} from 'react-native-paper';

type ComingSoonProps = {
  visible: boolean;
  onHide: () => void;
};

export const ComingSoon = ({visible, onHide}: ComingSoonProps) => {
  return (
    <Dialog visible={visible} onDismiss={onHide}>
      <Dialog.Title>Coming soon!</Dialog.Title>
      <Dialog.Content>
        <Paragraph>This feature is not yet implemented.</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onHide}>OK</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
