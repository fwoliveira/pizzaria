import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`
export const Header = styled.View`
    flex-direction: row;
    background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900};
    width: 100%;
    height: ${RFPercentage(30)}px;

`
export const Emoji = styled.Image`
     margin-top: ${RFPercentage(15)}px;
     margin-left: 25px;

`
export const Title = styled.Text`
    margin-top: ${RFPercentage(15)}px;
    font-family:  ${( {theme} ) => theme.FONTS.TITLE} ;
    font-size: ${RFValue(18)}px;
    margin-left: 15px;

    
`
export const Icon = styled(Ionicons)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
    margin-top: ${RFPercentage(15)}px;

`