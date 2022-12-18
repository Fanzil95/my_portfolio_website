import React from 'react';
import "./styleProjectPage.css"
import TextTitle from './TextTitle';

const ContentProjectPage = ({slides, onChange}) => {
    function selectSlide (id){
    onChange(id)
    }
    return (
        <div className='mainContainerPrPg'>
        <div className='containerProjectPage'>
            {slides.map(slide=>
                <div 
                className={slide.complited?'slide active':'slide'}
                key={slide.id}
                onClick={()=>selectSlide(slide.id)}
                >
                    {slide.complited
                    ?<img className='gif' src={slide.content} alt="приложение"/> 
                    : <h6>project</h6>
                    }
                </div>
            
            )}
           
        </div>
        <TextTitle slides={slides}/>
        </div>
            )
}
 
export default ContentProjectPage;