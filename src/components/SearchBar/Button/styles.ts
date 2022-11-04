import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
    /* width:100%; */
    padding: 18px;
    border-radius:12px;
    background-color: ${({theme})=> theme.COLORS.SUCCESS_900};
    align-items:center;
    margin-left: 7px;
    margin-right: 25px;


`;

export const Icon = styled(Ionicons)`
    font-size: ${RFValue(24)}px;
    color:${({theme})=> theme.COLORS.TITLE} ;

`