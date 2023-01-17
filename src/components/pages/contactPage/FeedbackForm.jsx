import React from 'react';
import './feedback.css'

const FeedbackForm = ({feedback, stateForm, onChange}) => {
  console.log(stateForm)
  function handleBack(e){
    e.preventDefault()
    feedback(true)
  }
    return (
        <div  className='contact'>
            <form 
            onSubmit={(e)=>{e.preventDefault()}}
            action="/">
          <div className="row">
            <div className="form-group">
              <label htmlFor="name">Ваше имя:</label>
              <input 
              type="text" 
              id="name" 
              placeholder="Введите ваше имя..."
              value={stateForm.name}
              onChange={event=>onChange({...stateForm, name: event.target.value})}
              />
                
            </div>

            <div className="form-group">
              <label htmlFor="email">Ваш email:</label>
              <input 
              type="email" 
              id="email" 
              placeholder="Введите email..."
              value={stateForm.email}
              onChange={event=>onChange({...stateForm, email: event.target.value})}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="text">Вашe сообщение:</label>

            <textarea id="text" 
            rows="2" 
            cols="15" 
            placeholder='Форма находится на стадии разработки.'
            value={stateForm.message}
            onChange={event=>onChange({...stateForm, message: event.target.value})}
            >

            </textarea>
          </div>

          <input 
          style={{color:'red'}}
          className="btn" 
          type="submit" 
          value="Связаться!"
          />
          <input 
          className="btn" 
          type="submit" 
          value="Назад"
          onClick={(e)=>{handleBack(e)}}
          />

        </form>
        </div>
    );
}
 
export default FeedbackForm;