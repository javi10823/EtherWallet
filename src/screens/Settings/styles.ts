import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const DescriptionStyle: StyleProp<TextStyle> = {
  textAlign: 'center',
};

export const ButtonStyle: StyleProp<ViewStyle> = {
  width: '100%',
};
