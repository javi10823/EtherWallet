import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 32px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;

export const ContentContainer = styled.View`
  flex: 2;
  justify-content: center;
`;

export const CustomTextStyle: StyleProp<TextStyle> = {
  textAlign: 'center',
};

export const ButtonStyle: StyleProp<ViewStyle> = {
  width: '100%',
};
