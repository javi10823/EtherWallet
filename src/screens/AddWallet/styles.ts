import {StyleProp, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
`;

export const ImageContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContentContainer = styled.View`
  flex: 2;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Label = styled(Text)`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
`;

export const InputStyle = {
  width: '100%',
};

export const ButtonStyle: StyleProp<ViewStyle> = {
  width: '100%',
};
