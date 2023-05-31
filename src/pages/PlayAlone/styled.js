import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;

export const Timer = styled.View`
  margin-bottom: ${RFValue(25)}px;
  margin-right: ${RFValue(15)}px;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
`;

export const TipContainer = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
`;

export const TipText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textLight};
`;
