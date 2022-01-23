import styled from 'styled-components';
import { MAIN_COLORS } from '../../../Assets/Constant';
import OpexTable from '../../../Components/Table';
import { HomeNavbar } from './navbar';

const tableData = {
    headers : ['XXXX', 'XXXX', 'XXXX', 'XXXX'],
    data : [
        ['first name', 'ongoing', '12.2.2022', 'testing'],
        ['second name', 'ongoing', '23.3.2022', 'testing'],
        ['third name', 'ongoing', '27.4.2022', 'testing'],
    ]
}
export const HomeContent = (props) => {
    return <HomeContentWrapper isSidebar={props.isSidebar} >
        <HomeNavbar />
        <hr className='hr-line' />
        <div style={{ width: '80%' }} >
        <OpexTable tableData={tableData} />

        </div>
    </HomeContentWrapper>
}

const HomeContentWrapper = styled.div`
     min-height: 86vh;
     background-color: ${MAIN_COLORS.GRAY};
    //  padding-left: ${props => props.isSidebar ? '20%' : '10%' };
    padding-left: 12%;

     transition: padding-left 1.1s;

     .hr-line {
         color: ${MAIN_COLORS.BLACK};
         opacity: .4;
     }
`;