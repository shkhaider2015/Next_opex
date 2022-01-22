import styled, { keyframes } from "styled-components";
import { MAIN_COLORS } from "../../Assets/Constant";

export const OpexDropdown = (props) => {
  return <DropdownWrapper isOpen={props.isOpen} >
  <div className='notifications-dropdown-item' onClick={() => props.setIsOpen(false) } >Item 1</div>
  <div className='notifications-dropdown-item' onClick={() => props.setIsOpen(false) } >Item 1</div>
  <div className='notifications-dropdown-item' onClick={() => props.setIsOpen(false) } >Item 1</div>
  <div className='notifications-dropdown-item' onClick={() => props.setIsOpen(false) } >Item 1</div>
</DropdownWrapper>
}

const DropdownWrapper = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none' };
    width: 100px;
    position: absolute;
    margin-left: -80px;
    background-color: ${MAIN_COLORS.WHITE};
    border-radius: 5px;

    
  transition: all 2s;

    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.21);
  -webkit-box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.21);
  -moz-box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.21);
  
.notifications-dropdown-item {
    padding-left: 10px;
    padding-right: 10px;
    padding-top:3px;
    padding-bottom: 3px;

    &:hover {
        background-color: ${MAIN_COLORS.GRAY};
        cursor: pointer;
    }
    
}
`;

const ScaleDown = keyframes`
0% {
  transform: scaleY(0)
}
80% {
  transform: scaleY(1.1)
}
100% {
  transform: scaleY(1)
}
`;
