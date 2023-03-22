import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  padding-horizontal: 32px;
  padding-top: 32px;
`;

export const DescriptionStyle: StyleProp<TextStyle> = {
  textAlign: 'center',
};

export const ButtonStyle: StyleProp<ViewStyle> = {
  width: '100%',
};
