import React from 'react';
import './feedback.css'

const FeedbackForm = ({feedback}) => {
  function handleBack(e){
    e.preventDefault()
    feedback(true)
  }
    return (
        <div  className='contact'>
            <form action="/">
          <div className="row">
            <div className="form-group">
              <label htmlFor="name">Ваше имя:</label>
              <input type="text" id="name" placeholder="Введите ваше имя..."/>
                
            </div>

            <div className="form-group">
              <label htmlFor="email">Ваш email:</label>
              <input type="email" id="email" placeholder="Введите email..."/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="text">Вашe сообщение:</label>

            <textarea id="text" rows="2" cols="15" placeholder='Форма находится на стадии разработки.'></textarea>
          </div>

          <input 
          style={{color:'red'}}
          className="btn" 
          type="submit" 
          value="Связаться!"
          onClick={(e)=>{e.preventDefault()}}/>
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