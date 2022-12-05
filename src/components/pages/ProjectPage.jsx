import React from 'react';
import ContentProjectPage from './projectPage/ContentProjectPage';



const ProjectPage = ({slides, onChange}) => {
    return ( 
        <div className='projectPage'>
           <ContentProjectPage 
           slides={slides}
           onChange={onChange}
        />
        </div>
    );
}
 
export default ProjectPage;