import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";




 export const Container =  styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  justify-content: center;
  padding:  32px;
`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  padding: 10px 0;
`;

export const Image = styled.Image`

`;


export const RecoveryPassword = styled.Text`
  margin-left: 179px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
  margin-bottom: 20px;
  margin-top: 20px;
`;