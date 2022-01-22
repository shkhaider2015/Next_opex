import styled from 'styled-components';

export const HomeNavbar = () => {
 return <HomeNavbarWrapper>
        <div className='nav-header' >
            MarketPlace
        </div>
        <div className='vertical-line' />
        <div className='nav-element' >
            Some Other
        </div>
        <div className='vertical-line' />
        <div className='nav-element'>
            some other
        </div>
        <div className='vertical-line' />
        <div className='nav-element'>
            some others
        </div>
        <div className='vertical-line' />
        <div className='nav-element'>
            some others
        </div>
        <div className='vertical-line' />
 </HomeNavbarWrapper>
}

const HomeNavbarWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;