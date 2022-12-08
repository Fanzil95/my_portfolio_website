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
                    {slide.complited
                    ?<img className='gif' src={slide.content} alt=""/> 
                    : <h6>play</h6>
                    }
                    {slide.complited
                    ?<div className='titleProject'>
                        {slide.title}
                    </div>
                    :''}
                </div>
            )}
           
        </div>
            )
}
 
export default ContentProjectPage;