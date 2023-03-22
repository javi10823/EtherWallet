import {Dimensions, StyleProp, TextStyle} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  padding-horizontal: 16px;
  padding-top: 16px;
`;

export const ActionContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ActionButton = styled(Button)`
  width: ${Dimensions.get('window').width / 2 - 32}px;
  margin-right: 16px;
`;

export const AddressStyle: StyleProp<TextStyle> = {
  color: 'gray',
  marginTop: 10,
};
