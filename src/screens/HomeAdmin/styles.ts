import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`
export const Header = styled.View`
    flex-direction: row;
    background-color: ${( {theme} ) => theme.COLORS.PRIMARY_800};
    width: 100%;
    height: ${RFPercentage(30)}px;
    
    align-items: center;
    justify-content: space-between;

`
export const Emoji = styled.Image`
    
     margin-left: 25px;


`
export const Title = styled.Text`
   
    font-family:  ${( {theme} ) => theme.FONTS.TITLE} ;
    font-size: ${RFValue(25)}px;
    margin-left: 15px;
    color: ${( {theme} ) => theme.COLORS.TITLE} ;


    
`
export const Icon = styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    margin-right: 25px;
    color: ${( {theme} ) => theme.COLORS.TITLE} ;
    
    


`
export const AdmInfo = styled.View`
    flex-direction: row;
`
export const SeachBarCard = styled.View`
    position: absolute;
    margin-top: ${RFPercentage(26)}px;
    margin-right: 22px;
`