import React from 'react';

const Contact = ({feedback}) => {
    const style ={
        font : {
            fontWeight: 700,
            },
        color: {color: '#c4c4c2'}
    }
    const feedbackStyle = {
        fontWeight:700,
        color: '#c4c4c2',
        textDecoration: 'underline',
        cursor: 'pointer'
    }
    return (
            <div className='txt'>
            <h3 className='titlePost'>Связь со мной</h3>
            <br />
            <h5> 
            <b style={style.font}>Мобильная связь/WhatsApp:</b> +79681913434
            <br />
            <br />
            <b style={style.font}>Telegram</b>
            <br />
            <a style={style.color} href="https://t.me/fanzil95" target="_blank" rel="noreferrer">t.me/fanzil95</a>
            <br />
            <br />
            <b style={style.font}>LinkedIn</b>
            <br />
            <a style={style.color} href="http://www.linkedin.com/in/fanzil95" target="_blank" rel="noreferrer">linkedin.com/in/fanzil95</a>
            <br />
            <br />
            <b style={style.font}>@Mail</b> 
            <br />
            amirov_fanzil@mail.ru
            <br />
            <br />
            <b 
            style={feedbackStyle}
            onClick={()=>{feedback(false)}}
            >Форма обратной связи </b> 
            <h4 style={{textDecoration: 'none', color: 'red',}}>этот сервис сейчас разрабатывается</h4>
            </h5>
            <br />
            
            
            </div>
            
        
    );
}
 
export default Contact;