import React from 'react';
import avatar from "./imgs/ava.jpg"


const HomePage = () => {
    return ( 
        <div className='homePage'>
            <div className='txt'>
            <h3 className='titlePost'>Привет!</h3>
            <br/>
            <h5>
                Меня зовут Фанзиль. Я начинающий web-разработчик.
                Представляю вам, разработанный мной,  сайт-портфолио.
                Здесь вы найдёте подробную информацию обо мне, о моих проектах, и о том, как со мной связаться.
            </h5>
            </div>
           <img className='img' src={avatar} alt="" />
           
        </div>
    );
}
 
export default HomePage;