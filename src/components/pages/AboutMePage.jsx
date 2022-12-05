import React from 'react';
import ContentAboutMePage from './aboutMePage/ContentAboutMePage';


const AboutMePage = ({btnUp, btnDown, stateBtn, slidesV}) => {
    return ( 
        <div className='aboutMe'>
            <ContentAboutMePage  
            slidesV={slidesV}
            stateBtn={stateBtn}
            up={btnUp}
            down={btnDown}
            
            />
        </div>
    );
}
 
export default AboutMePage;