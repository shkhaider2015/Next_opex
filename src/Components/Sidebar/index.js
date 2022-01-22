import { useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLORS } from '../../Assets/Constant';

const slidebarData = [
    {
        icon: 'iconsminds-factory',
        text: 'Marketplace'
    },
    {
        icon: 'iconsminds-factory',
        text: 'Chat'
    },
    {
        icon: 'iconsminds-factory',
        text: 'Marketplace'
    }
]

const SlidebarItem = ({ icon, text, isSelected, index }) => {
    console.log("IsSelected : ", isSelected)
    return <SlidebarItemWrapper isSelected={isSelected === index} >
            <div className='item-vertical-line' />
            <div className='logo-section' >
                <div className={`side-icon ${icon}`}/>
                <div className='side-logo-text'>{text}</div>
            </div>
    </SlidebarItemWrapper>
}

export const OpexSlidebar = () => {

    const [isSelected, setIsSelected] = useState(-1);

    return <OpexSlidebarWrapper>
      
        {
            slidebarData.map((item, index) => 
                <div key={index} onClick={() => setIsSelected(index)} >
                    <SlidebarItem
                        key={index} 
                        icon={item.icon} 
                        text={item.text} 
                        index={index} 
                        isSelected={isSelected} 
                        // onClick={() => setIsSelected(index) }
                    />
                    <hr className='hr-line'  />
                </div>
             )
        }
        
    </OpexSlidebarWrapper>
}

const OpexSlidebarWrapper = styled.div`
 width: 10%;
 min-height: 86vh;
 background-color: white;
 padding-top: 3%;

 .hr-line {
     opacity: .3;
     margin-left: 2px;
     margin-right: 2px;
 }

`;
const SlidebarItemWrapper = styled.div`

     display: flex;
     flex-direction: row;
     width: 100%;
     padding-top: 1%;

     .item-vertical-line {
         border-right-width: 7px ;
         border-right-style: solid;
         border-right-color: ${props =>  props.isSelected ? MAIN_COLORS.PRIMARY_COLOR : MAIN_COLORS.WHITE };
         border-radius: 10px;
         transition: border-right-color .6s ;
     }
     .logo-section {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         width: 100%;
         padding-left: 10%;

         .side-icon {
             font-size: 40px;
             opacity: .5;
         }
         .side-logo-text {
             font-weight: normal;
             opacity: .5;
         }
     }

     &:hover {
         cursor: pointer;
     }

`;