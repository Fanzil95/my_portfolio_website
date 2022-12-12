import React from 'react';

const style ={
    font : {
        fontWeight: 700,
    },
    color: {color: '#c4c4c2'}
}

const ContactPage = () => {
    return ( 
        <div className='contactPage'>
            <div className='txt'>
            <h3 className='titlePost'>Связь со мной</h3>
            <br />
            <br />
            <h5> 
            <b style={style.font}>Мобильная связь/WhatsApp:</b> +79681913434
            <br />
            <br />
            <b style={style.font}>Telegram:</b>
            <br />
            <a style={style.color} href="https://t.me/fanzil95" target="_blank" rel="noreferrer">t.me/fanzil95</a>
            <br />
            <br />
            <b style={style.font}>@Mail:</b> 
            <br />
            amirov_fanzil@mail.ru
            </h5>
            </div>
            
        </div>
    );
}
 
export default ContactPage;