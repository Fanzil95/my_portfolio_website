import React from 'react';

const TextContainer = ({stateBtn, slidesV}) => {
    
    return (
        <div className={'sidebar'} 
        style={{transform:`translateY(${stateBtn * 400}px)`, top: `-${(slidesV.length -1) * 100}%`}}
        >
                {slidesV.map(slides=>
             <div key={slides.id}>
             {slides.text}
             </div>
            )}
            </div>
    );
}
 
export default TextContainer;