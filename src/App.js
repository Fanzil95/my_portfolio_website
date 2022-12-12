import React, {useState}from 'react';
import HomePage from './components/pages/HomePage';
import Header from './components/navigation/Header';
import Footer from './components/Footer';
import ProjectPage from './components/pages/ProjectPage';
import'./index.css'
import AboutMePage from './components/pages/AboutMePage';
import ContactPage from './components/pages/ContactPage';
import { text } from './components/textContent/TextContent';
import {slidesContent} from './components/pages/projectPage/slidesContent';
import {TitleText} from './components/pages/projectPage/TitleText'
import { imgesForSlides } from './components/pages/aboutMePage/imgesForSlides';
function App() {

  const [navBar,setNavBar] = useState([
    {id:1, complited:true, title:'Главная'},
    {id:2, complited:false,title:'Проекты'},
    {id:3, complited:false,title:'Обо мне'},
    {id:4, complited:false, title:'Контакты'}
  ])
  
  const [slides, setSlides] = useState([
    {id:1, complited: true, title: TitleText.text1,content: slidesContent.slide1},
    {id:2, complited: false, title: TitleText.text2,content:slidesContent.slide2},
    {id:3, complited: false, title: TitleText.text3,content:slidesContent.slide3},
    {id:4, complited: false, title: TitleText.text4,content:slidesContent.slide4},
    {id:5, complited: false, title: TitleText.text5,content:slidesContent.slide5}
])

const slidesV = [
  {id:1, complited: false, text: text.text4, element: imgesForSlides.image1},
  {id:2, complited: false, text: text.text3, element: imgesForSlides.image2},
  {id:3, complited: false, text: text.text2, element: imgesForSlides.image3},
  {id:4, complited: false, text: text.text1, element: imgesForSlides.image4}
]

const [stateBtn, setStateBtn] = useState(0)

function up(){
  setStateBtn(stateBtn+1)
  if(stateBtn===slidesV.length-1){
    setStateBtn(0)
  }
}
function down (){
  setStateBtn(stateBtn-1)
  if(stateBtn <=0){
    setStateBtn(slidesV.length - 1)
  }
}



function changeStateNavBar (id) {
    setNavBar(
      navBar.map((link)=>{
        link.complited=false
        if(link.id === id){
          link.complited = !link.complited
        }
        return link
      })
    )
  }

 function changeStateSlides (id) {
  setSlides(slides.map((slide)=>{
    slide.complited = false
      if(slide.id===id){
        slide.complited = !slide.complited
      }
      return slide
    }))
  } 

  console.log(stateBtn)

  return (
  <div className='container'>
    <Header navBarLinks={navBar} onChange={changeStateNavBar}/>
    {navBar[0].complited?<HomePage/> :''} 
    {navBar[1].complited?<ProjectPage  slides={slides} onChange={changeStateSlides}/> :''} 
    {navBar[2].complited?<AboutMePage
    slidesV={slidesV} 
    stateBtn ={stateBtn}
    btnUp={up}
    btnDown = {down}
    /> :''} 
    {navBar[3].complited?<ContactPage/> :''} 

    <Footer/>
  </div>
  )
  
}

export default App;
