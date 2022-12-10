import React from 'react';

const ImgContainer = ({stateBtn, slidesV}) => {
    console.log()
    return (
        <div className={'main-slide'} style={{transform:`translateY(-${stateBtn * 400}px)` }}>
            {slidesV.map(slides=>
             <div key={slides.id}>
             <img src={slides.element} alt="" />
             </div>
                )}
               
               
            </div>
    );
}
 
export default ImgContainer;