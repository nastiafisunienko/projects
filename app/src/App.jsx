
import { useEffect, useState } from 'react'
import './App.css'
import { useEventListener } from './Useeventlistener';
import { MultipleScroll } from './Multiplescroll';


function App() {


  const scrolled = useEventListener(50)

  
  return(
    <div>
      <h1 className={scrolled ? "scrolled" : "h1"}>CV</h1>
      <Formulario/>
    </div>
  )
}

function Row({name, type, campo}) {
  return(
   <li>
     <label htmlFor={name}>{campo}</label>
     <input type={type} name={name}  id={name} required/>
   </li>
  )
 
 }
 const submitClick = () => {

  alert("Submittefd")

 }

 const handleSubmit = (e) => {
  e.preventDefault()
 }

 function Botones() {
  return(
  <li className='li'>
    <input type='submit'value="Submit" onClick={submitClick}></input>
    <input type='submit' value="Edit"></input>
  </li>
  )
 }


function Formulario() {

  const {scrolled, scrolled2} = MultipleScroll(200, 90)
  const {scr, scr2} = MultipleScroll(400, 60)




  return(
    <form onSubmit={handleSubmit}>
      <ul>
        <section className={scrolled2 ? 'blockScrolled' : scrolled ? 'blockScrolled2' : 'section1'}>
          <h1 className='h2'>General<br></br> information</h1>
          <div className='box'>

            <Row name={"name"} type={"text"} campo={"Name:"}/>
            <Row name={"email"} type={"email"} campo={"Email:"}/>
            <Row name={"number"} type={"text"} campo={"Phone number:"}/>
          </div>
        </section>

        <section className={scrolled ? "blockScrolled" : scrolled2 ? "blockScrolled2" : "section2"}>

        <h1 className='h2'>Educational<br></br> experience:</h1>
        <div className='box'>

        <Row name={"school"} type={"text"} campo={"School name:"}/>
        <Row name={"title"} type={"email"} campo={"Title of study:"}/>
        <Row name={"date"} type={"date"} campo={"Date of study:"}/>
        </div>

        </section>

        <section className={scrolled2 ? 'blockScrolled' : scrolled ? 'blockScrolled2' : 'section3'}>

        <h1 className='h2'>Practical experience:</h1>
        <div className='box'>

        <Row name={"company"} type={"text"} campo={"Company name:"}/>
        <Row name={"position"} type={"text"} campo={"Position title:"}/>
        <Row name={"responsabilities"} type={"text"} campo={"Main responsabilities:"}/>
        <Row name={"worked"} type={"text"} campo={"Date from and until when you worked for that company:"}/>
        </div>
        </section>

        <Botones/>
      </ul>
    </form>
  )
}





export default App;
