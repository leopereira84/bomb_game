import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background };
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(10)}px;
  padding-bottom: ${getStatusBarHeight() + RFValue(10)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  text-align: center;
  color: ${({theme}) => theme.colors.white };
`;

export const BombMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  margin: ${RFValue(30)}px 0;
  margin-bottom: ${RFValue(50)}px;
  text-align: center;
  color: #FF0044;
`;
