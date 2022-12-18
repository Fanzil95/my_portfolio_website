import React from 'react';


const TextTitle = ({slides}) => {
    return (
        <div>
            {slides.map(slide=>
                slide.complited
                    ?<div className='titleProject'>
                        {slide.title}
                    </div>
                    :'')}
        </div>
    );
}
 
export default TextTitle;