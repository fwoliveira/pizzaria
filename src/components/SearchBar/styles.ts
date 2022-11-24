import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



export const Container = styled.View`

   flex-direction: row;
   width: 95%;
   
`
export const Input = styled(TextInput)`
    width: 75%;
    color:#000;
    padding: 15px 15px;
    background-color: ${({theme})=> theme.COLORS.TITLE};
    border-radius: 16px;
    margin-left: 25px;
    font-size: 17px;

`

export const  Icon = styled(Ionicons)`
font-size: ${RFValue(24)}px;
color:${({theme})=> theme.COLORS.TITLE} ;
`
export const Button = styled(TouchableOpacity)`
    padding: 18px;
    border-radius:12px;
    background-color: ${({theme})=> theme.COLORS.SUCCESS_900};
    align-items:center;
    margin-left: 7px;
    margin-right: 25px;
`;