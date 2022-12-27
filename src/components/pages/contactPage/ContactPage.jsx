import React from 'react';
import Contact from './Contact';
import FeedbackForm from './FeedbackForm';



const ContactPage = ({handleFeedback, stateFeedback}) => {
    return ( 
        <div className='contactPage'>
            {stateFeedback
            ? <Contact feedback={handleFeedback}/> 
            : <FeedbackForm feedback={handleFeedback}/> }
        
        </div>
    );
}
 
export default ContactPage;