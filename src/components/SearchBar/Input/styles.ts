import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
    width: 80%;
    color:#000;
    padding: 15px 15px;
    background-color: ${({theme})=> theme.COLORS.TITLE};
    border-radius: 16px;
    margin-left: 25px;
    font-size: 17px;
    
`
