import React,{useEffect} from 'react'
// Assets
import logo from '../../assets/logo.png'

const Nav = () => {
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const nav = document.querySelector('[data-dom="nav"]')
      if(nav){
        if(window.scrollY > 50){
          nav.style.backgroundColor = "#E60000"
        }else{
          nav.style.backgroundColor = ""
        }
      }
    })
  },[])

  return (
    <div className="Nav l-container" data-dom="nav">
      <div className="l-contain">
        <div className="Nav__Logo">
          <img src={logo} alt="Logo Vacunómetro Perú"/>
          <p>Vacunómetro<br />Perú</p>
        </div>
        <div className="Nav__Menu">
          <i className="fas fa-bars fa-2x"></i>
        </div>
      </div>
    </div>
  )
}

export default Nav