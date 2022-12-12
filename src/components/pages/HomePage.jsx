import React from 'react';
import avatar from "./imgs/ava.jpg"


const HomePage = () => {
    return ( 
        <div className='homePage'>
            <img className='img' src={avatar} alt="" />
            <div className='txt'>
            <h3 className='titlePost'>Привет</h3>
            <br/>
            <h5>
                Меня зовут Фанзиль. 
                <br />
                <br /> Я начинающий web-разработчик.
                Представляю вам сайт-портфолио, разработанный мной.
                <br />
                <br /> Здесь вы найдёте подробную информацию обо мне, о моих проектах, и о том, как со мной связаться.
            </h5>
            </div>
           
        </div>
    );
}
 
export default HomePage;