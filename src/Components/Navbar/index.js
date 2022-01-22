import styled from 'styled-components';
import Image from 'next/image'
import LeftMenuSVG from "../../Assets/assets/img/menu-left.svg"
import SingleMenuSVG from "../../Assets/assets/img/menu-single.svg"
import OpexFlowPNG from "../../Assets/SVGs/opex-flow-png-file.png"
import { MAIN_COLORS } from "../../Assets/Constant";
import { OpexButton } from '../Button';

const Navbar = (props) => {
    return <NavbarWrapper>
        <div className='svg-menu' onClick={() => props.onClick() } >
            <LeftMenuSVG className="left-svg" />
            &nbsp;
            <SingleMenuSVG className="right-svg" />
        </div>

        <div className='logo-section'  >
            <Image src={OpexFlowPNG} width={200} height={50}  />
        </div>

        <div className='right-section' >
        <span>
        <i className="simple-icon-bell" />
        </span>
        <span>
        <i className="simple-icon-grid" />
        </span>
            <div className='user-btn' >
                <OpexButton 
                text={"Sign In"}
                backgroundColor={MAIN_COLORS.PRIMARY_COLOR}
                textColor={MAIN_COLORS.WHITE}
                />

            </div>
        </div>
    </NavbarWrapper>
}

const NavbarWrapper = styled.div`
width: 100vw;
height: 5%;
background-color: #FFFFFF;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 2%;
padding-top: 2%;
padding-right: 2%;
padding-bottom: 1%;

box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.39);
-webkit-box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.39);
-moz-box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.39);

position: relative;
z-index: 10;

.svg-menu {
    display: flex;
    flex-direction: row;
    &:hover {
        cursor: pointer;
        .right-svg {
            fill: ${MAIN_COLORS.SECONDARY_COLOR};
        }
        .left-svg {
        fill: ${MAIN_COLORS.SECONDARY_COLOR};
        }
    }
}
.svg-menu .left-svg {
    width: 14px;
    fill: ${MAIN_COLORS.PRIMARY_COLOR};
}
.svg-menu .right-svg {
    width: 30px;
    fill: ${MAIN_COLORS.PRIMARY_COLOR};
}

.logo-section .png-logo {
    max-width: 200px;
    max-height: 100px;
    border: 1px solid blue;
}

.right-section {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.right-section .simple-icon-grid {
    padding: 5%;
}
.right-section .simple-icon-bell {
    padding: 5%;
}
.right-section .user-btn {
    width: 50%;
    height: 80%;
}

`

export default Navbar;
