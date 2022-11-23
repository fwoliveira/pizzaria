import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.TITLE,
  }))`
    width:100%;
    padding: 18px;
    border-radius:12px;
    background-color: ${({theme})=> theme.COLORS.PRIMARY_800};

    align-items:center;

`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.COLORS.TITLE};

`
