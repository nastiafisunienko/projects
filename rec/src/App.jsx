
import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(()=> {
    const handleScroll =()=> {

      if(window.scrollY > 50) {

        setScrolled(true)

      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

  }, []);

  
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
  <li>
    <input type='submit'value="Submit" onClick={submitClick}></input>
    <input type='submit' value="Edit"></input>
  </li>
  )
 }


function Formulario() {
  const [blockScroll, setBlockScroll] = useState(false);
  const [blockScroll2, setBlockScroll2] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY > 400) {

        setBlockScroll(false)
        setBlockScroll2(true)

      } else if (window.scrollY > 20) {

        setBlockScroll2(false)
        setBlockScroll(true)

      }else {
        setBlockScroll(false)
        setBlockScroll2(false)
      }
    }

    return window.addEventListener('scroll', handleScroll);
  }, [])

  return(
    <form onSubmit={handleSubmit}>
      <ul>
        <section className={blockScroll ? 'blockScrolled' : blockScroll2 ? 'blockScrolled2' : 'section'}>
          <h1 className='h2'>General<br></br> information</h1>
          <div className='box'>

            <Row name={"name"} type={"text"} campo={"Name:"}/>
            <Row name={"email"} type={"email"} campo={"Email:"}/>
            <Row name={"number"} type={"text"} campo={"Phone number:"}/>
          </div>
        </section>

        <section className='section'>

        <h1>Educational experience:</h1>

        <Row name={"school"} type={"text"} campo={"School name:"}/>
        <Row name={"title"} type={"email"} campo={"Title of study:"}/>
        <Row name={"date"} type={"date"} campo={"Date of study:"}/>

        </section>

        <section>

        <h1>Practical experience:</h1>

        <Row name={"company"} type={"text"} campo={"Company name:"}/>
        <Row name={"position"} type={"text"} campo={"Position title:"}/>
        <Row name={"responsabilities"} type={"text"} campo={"Main responsabilities:"}/>
        <Row name={"worked"} type={"text"} campo={"Date from and until when you worked for that company:"}/>
        </section>

        <Botones/>
      </ul>
    </form>
  )
}





export default App;
