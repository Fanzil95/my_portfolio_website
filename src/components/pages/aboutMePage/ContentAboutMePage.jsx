import React from 'react';
import TextContainer from './TextContainer';
import ImgContainer from './ImgContainer';
import Btn from './Btn';
import "./styleAboutMePage.css"


const ContentAboutMePage = ({up,down, stateBtn, slidesV}) => {
    return (
        <div className='containerAboutMe'>
            <TextContainer 
            slidesV={slidesV}
            stateBtn={stateBtn}
            />
            <ImgContainer 
            slidesV={slidesV}
            stateBtn={stateBtn}
            />
            <Btn  
            up={up}
            down={down}
            />
        </div>
    );
}
 
export default ContentAboutMePage;