import styled from 'styled-components';
import { MAIN_COLORS } from '../../Assets/Constant';

export const OpexButton = (props) => {
    return <OpexButtonWrapper backgroundColor={props.backgroundColor} textColor={props.textColor} borderColor={props.borderColor} >
        <span>{props.text}</span>
    </OpexButtonWrapper>
}

const OpexButtonWrapper = styled.div`
    padding-top: 2px;
    padding-bottom: 2px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : MAIN_COLORS.WHITE };
    color: ${props => props.textColor ? props.textColor : MAIN_COLORS.BLACK };
    border-radius: 50px;
    border: 1px solid ${props => props.borderColor ? props.borderColor : props.backgroundColor ? props.backgroundColor : MAIN_COLORS.WHITE };
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`;