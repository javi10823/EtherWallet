import {StyleProp, TextStyle} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  padding-horizontal: 16px;
  padding-top: 16px;
`;

export const AddressStyle: StyleProp<TextStyle> = {
  color: 'gray',
  marginTop: 10,
};
