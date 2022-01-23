import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from "../../Components/Navbar";
import { MAIN_COLORS } from "../../Assets/Constant";
import { OpexSlidebar } from '../../Components/Sidebar';
import { HomeContent } from './UI/content';

const HomeScreen = () => {
    const [isSidebar, setIsSidebar] = useState(true);

    return <HomeScreenWrapper >
        <Navbar onClick={() => setIsSidebar(!isSidebar)} />
        <div className='home-content' >
        <OpexSlidebar isSidebar={isSidebar} />
        <HomeContent isSidebar={isSidebar} />
        </div>
    </HomeScreenWrapper>
}

const HomeScreenWrapper = styled.div`
    min-height: 100vh;
    background-color: ${MAIN_COLORS.GRAY}

    .home-content {
        display: flex;
        flex-direction: row;
    }
`;

export default HomeScreen;