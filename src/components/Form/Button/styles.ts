import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons'

interface ButtonProps{
    type: 'red' | 'green';
  }

export const Container = styled(TouchableOpacity)<ButtonProps>`
    width:100%;
    padding: 18px;
    border-radius:12px;
    align-items:center;
    margin-left: 7px;
    margin-right: 25px;
   background-color: ${({ theme, type }) =>
    type === 'red' ? theme.COLORS.PRIMARY_800 : theme.SUCCESS_900};


`;

export const Title = styled(Ionicons)`
    font-size: ${RFValue(14)}px;
    color:${({theme})=> theme.COLORS.TITLE} ;

`