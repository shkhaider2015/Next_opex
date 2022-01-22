import React from 'react';
import styled from 'styled-components';
import Navbar from "../../Components/Navbar";
import { MAIN_COLORS } from "../../Assets/Constant";
import { OpexSlidebar } from '../../Components/Sidebar';

const HomeScreen = () => {
    return <HomeScreenWrapper >
        <Navbar />
        <OpexSlidebar />
    </HomeScreenWrapper>
}

const HomeScreenWrapper = styled.div`
    min-height: 100vh;
    background-color: ${MAIN_COLORS.GRAY}
`;

export default HomeScreen;