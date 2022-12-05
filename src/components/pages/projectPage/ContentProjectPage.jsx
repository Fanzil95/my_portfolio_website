import React from 'react';
import "./styleProjectPage.css"

const ContentProjectPage = ({slides, onChange}) => {
    function selectSlide (id){
    onChange(id)
    }
    return (
        <div className='containerProjectPage'>
            {slides.map(slide=>
                <div 
                className={slide.complited?'slide active':'slide'}
                key={slide.id}
                onClick={()=>selectSlide(slide.id)}
                >
                    <h1>{slide.complited?slide.title : ''}</h1> 
                </div>
            )}
        </div>
            )
}
 
export default ContentProjectPage;