import React from 'react'
// assets
import hospital from '../../assets/hospital.png'

const HospitalCard = () => {
  return (
    <div className="HospitalCard">
      <div className="HospitalCard__Img">
        <img src={hospital} />
      </div>
      <div className="HospitalCard__Content">
        <p className="HospitalCard__Title">HOSPITAL REGIONAL HERMILIO VALDIZÁN</p>
        <p className="HospitalCard__Location">
          <i className="fas fa-map-marker-alt"></i>
          Av. Javer Prado Este 1345
        </p>
        <p className="HospitalCard__Update">
          <i className="far fa-clock"></i>
          Actualizado hace 4 horas
        </p>
        <p className="HospitalCard__Link">Ir a data en tiempo real</p>
      </div>
    </div>
  )
}

export default HospitalCard