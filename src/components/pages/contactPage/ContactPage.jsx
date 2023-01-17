import React from 'react';
import Contact from './Contact';
import FeedbackForm from './FeedbackForm';



const ContactPage = ({handleFeedback, stateFeedback, stateForm, onChange}) => {
    return ( 
        <div className='contactPage'>
            {stateFeedback
            ? <Contact feedback={handleFeedback}/> 
            : <FeedbackForm 
            feedback={handleFeedback}
            stateForm={stateForm}
            onChange={onChange}
            /> }
        
        </div>
    );
}
 
export default ContactPage;