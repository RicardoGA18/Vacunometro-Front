import React from 'react'
// Components
import HospitalCard from '../molecules/HospitalCard'

const UCI = () => {
  return (
    <div className="UCI l-container">
      <div className="l-contain">
        <p className="UCI__Title">Números de camas UCI y cronogramas de vacunación por hospital</p>
        <div className="UCI__Select">
          <div style={{ position: 'relative' }}>
            <select>
              <option value="">Provincia</option>
            </select>
            <i className="fas fa-angle-down"></i>
          </div>
          <div style={{ position: 'relative' }}>
            <select disabled>
              <option value="">Distrito</option>
            </select>
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
        <div className="UCI__CardBox">
          <HospitalCard />
          <HospitalCard />
        </div>
        <div className="UCI__SeeAll">
          <button>Ver todos</button>
        </div>
      </div>
    </div>
  )
}

export default UCI