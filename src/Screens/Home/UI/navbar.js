import { useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLORS } from '../../../Assets/Constant';
import { OpexButton } from '../../../Components/Button';

export const HomeNavbar = () => {
    const [slectedItem, setSelectedItem] = useState(0);

 return <HomeNavbarWrapper>
        <div className='home-nav-left' >
        <div className='nav-header' >
            MarketPlace
        </div>
        <div className='vertical-line' />
        <div
             className={`nav-element ${slectedItem === 0 ? 'animated-class' : '' } `}
             onClick={() => setSelectedItem(0)}
             >
            <span style={{ width: '100%', height: '100%', backgroundColor: MAIN_COLORS.GRAY }} >Home</span>
        </div>
        <div className='vertical-line' />
        <div
             className={`nav-element ${slectedItem === 1 ? 'animated-class' : '' } `}
             onClick={() => setSelectedItem(1)}
             >
            <span style={{ width: '100%', height: '100%', backgroundColor: MAIN_COLORS.GRAY }} >Applications</span>
        </div>
        <div className='vertical-line' />
        <div
             className={`nav-element ${slectedItem === 2 ? 'animated-class' : '' } `}
             onClick={() => setSelectedItem(2)}
             >
            <span style={{ width: '100%', height: '100%', backgroundColor: MAIN_COLORS.GRAY }} >Marketplace</span>
        </div>
        </div>
        <div className='home-nav-right' >
        <OpexButton 
            text={"Add New"}
            backgroundColor={MAIN_COLORS.PRIMARY_COLOR}
            textColor={MAIN_COLORS.WHITE}
        />
        </div>
 </HomeNavbarWrapper>
}

const HomeNavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2%;

    .home-nav-left {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .home-nav-left .nav-header {
        font-size: 28px;
        padding-left: 5px;
        padding-right: 2%;
        line-height: 35px;
        height: 32px;
    }
    .home-nav-left .vertical-line {
        border-right: 2px solid ${MAIN_COLORS.BLACK};
        opacity: .2;
        height: 15px;
    }
    .home-nav-left .nav-element {
        font-size: 13px;
        margin-left: 10px;
        margin-right: 10px;
        padding-bottom: 3px;
        border-radius: 2px;

        &:hover {
            cursor: pointer;
        }
    }
    .home-nav-left .nav-element.animated-class {
        
        background-color: ${MAIN_COLORS.SECONDARY_COLOR};

        transition: background-color .4s;
    }

    .home-nav-right {
        width: 120px;
        height: 40px;
        display: flex;
        align-items: flex-end;
    }

`;