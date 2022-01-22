import React from 'react';
import styled from 'styled-components';
import { MAIN_COLORS } from "../../Colors"

const MenuIcon = () => (
    <MenuWrapper>
    <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
          <rect x="0.48" y="0.5" width="7" height="1" />
          <rect x="0.48" y="7.5" width="7" height="1" />
          <rect x="0.48" y="15.5" width="7" height="1" />
        </svg>
    <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
          <rect x="1.56" y="0.5" width="16" height="1" />
          <rect x="1.56" y="7.5" width="16" height="1" />
          <rect x="1.56" y="15.5" width="16" height="1" />
        </svg>
  </MenuWrapper>
);

const MenuWrapper = styled.div`
max-height: 14px;
max-width: 20px;
svg {
    height: 12px;
}
.main {
    fill: black;
    width: 10px;
    
}
.sub {
    fill: black;
}

&:hover {
    cursor: pointer;
    .main {
        fill: ${MAIN_COLORS.PRIMARY_COLOR};
    }
    .sub {
        fill: ${MAIN_COLORS.PRIMARY_COLOR};
    }
}


`;

export default MenuIcon;