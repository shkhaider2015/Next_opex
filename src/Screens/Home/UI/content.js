import styled from 'styled-components';
import { MAIN_COLORS } from '../../../Assets/Constant';
import { HomeNavbar } from './navbar';

export const HomeContent = (props) => {
    return <HomeContentWrapper isSidebar={props.isSidebar} >
        <HomeNavbar />
    </HomeContentWrapper>
}

const HomeContentWrapper = styled.div`
     min-height: 86vh;
     background-color: ${MAIN_COLORS.GRAY};
     padding-left: ${props => props.isSidebar ? '20%' : '10%' };

     transition: padding-left 1.1s;
`;