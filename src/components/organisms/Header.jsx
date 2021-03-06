import React from 'react'
// Assets
import map from '../../assets/map.png'

const Header = () => {
  return (
    <div className="Header l-container">
      <img className="Header__Background" src={map} />
      <div className="l-contain">
        <p className="Header__Title">Recomendaciones e información sobre el avance de la vacunación en tu lacalidad</p>
        <p className="Header__Description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        <form className="Header__Form">
          <div className="Header__Form-Search">
            <input type="search" placeholder="Nombre de tu distrito"/>
            <button type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="Header__Form-Check">
            <input type="checkbox"/>
            <p>He leído y acepto las Condiciones del Servicio y la Política de Privacidad de Vacunómetro Perú.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header