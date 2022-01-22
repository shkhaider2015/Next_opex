import { useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLORS } from '../../Assets/Constant';

const slidebarData = [
    {
        icon: 'iconsminds-factory',
        text: 'Marketplace'
    },
    {
        icon: 'iconsminds-speach-bubble',
        text: 'Chat'
    },
    {
        icon: 'iconsminds-library',
        text: 'Marketplace'
    }
]

const SlidebarItem = ({ icon, text, isSelected, index }) => {
    return <SlidebarItemWrapper isSelected={isSelected === index} >
            <div className='item-vertical-line' />
            <div className='logo-section' >
                <div className={`side-icon ${icon}`}/>
                <div className='side-logo-text'>{text}</div>
            </div>
    </SlidebarItemWrapper>
}

export const OpexSlidebar = (props) => {

    const [isSelected, setIsSelected] = useState(0);

    return <OpexSlidebarWrapper isSidebar={props.isSidebar} >
      
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
        {/* <div className='sidebar-item' isSelected={false} >
            <div className='item-vertical-line' />
            <div className='logo-section' >
                <div className={`side-icon iconsminds-factory`}/>
                <div className='side-logo-text'>text</div>
            </div>
    </div> */}
        
    </OpexSlidebarWrapper>
}

const OpexSlidebarWrapper = styled.div`
 width: ${props => props.isSidebar ? '10' : '0' }% ;
 min-height: 88vh;
 background-color: white;
 padding-top: 3%;
 position: fixed;
 margin-left: ${props => props.isSidebar ? '0' : '-10' }%;

 transition: width 1.1s, margin-left 1.1s;

 .hr-line {
     opacity: .3;
     margin-left: 2px;
     margin-right: 2px;
 }

`;
const SlidebarItemWrapper = styled.div`

     display: flex;
     width: 100%;
     padding-top: 1%;
     position: relative;

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
             opacity: ${props => props.isSelected ? 1 : .5 } ;
         }
         .side-logo-text {
             font-weight: normal;
             opacity: ${props => props.isSelected ? 1 : .5 } ;
         }
     }

     &:hover {
         cursor: pointer;
     }

`;