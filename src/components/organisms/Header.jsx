import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
// Assets
import map from '../../assets/map.png'
// Axios
import axios from 'axios'

const Header = () => {
  const [places,setPlaces] = useState([])
  const [recomend,setRecomend] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const {data} = await axios.get('http://167.99.21.238:8082/api/ubigeo/')
      setPlaces(data.data)
    }
    fetchData()
  },[])

  const setRecomendation = () => {
    const searchValue = document.getElementById('inputSearch').value
    
    const newRecomends = places.filter(place => {
      if(place.name.includes(searchValue.toUpperCase())){
        return true
      }else{
        return false
      }
    })
    setRecomend(newRecomends)
  }

  const formatName = (name) => {
    let lowerName = name.toLowerCase()
    let newName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1)
    return newName
  }

  const formatPlace = (place) => {
    switch (place){
      case 'PROVINCE':
        return 'Provincia'
      case 'DEPARTMENT':
        return 'Departamento'
      case 'DISTRICT':
        return 'Distrito'
      default:
        return 'No definido'
    }
  }

  const history = useHistory()

  const setItemRecomends = () => {
    if(recomend.length){
      return recomend.map(place => {
        return (
          <div className="AutoComplete__Item" id={place.id} key={place.id} onClick={e=>{
            switch (place.type){
              case 'PROVINCE':
                history.push(`/provincia/${place.id}`)
                break
              case 'DEPARTMENT':
                history.push(`/departamento/${place.id}`)
                break
              case 'DISTRICT':
                history.push(`/distrito/${place.id}`)
                break
              default:
                console.log("Indeterminated Link")
            }
          }}>
            <p>{formatName(place.name)}</p>
            <p>{formatPlace(place.type)}</p>
          </div>
        )
      })
    }else{
      return (
        <div className="AutoComplete__Item">
          <p>No se encontraron resultados.</p>
        </div>
      )
    }
  }

  return (
    <div className="Header l-container">
      <img className="Header__Background" src={map} alt="mapa" />
      <div className="l-contain">
        <p className="Header__Title">Recomendaciones e información sobre el avance de la vacunación en tu lacalidad</p>
        <p className="Header__Description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        <form className="Header__Form">
          <div className="Header__Form-Search">
            <input type="search" placeholder="Nombre de tu distrito" onInput={setRecomendation} id="inputSearch" autoComplete="off" />
            <button type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
            <div className="AutoComplete" id="searchBox">
              {setItemRecomends()}
            </div>
          </div>
          <div className="Header__Form-Check">
            <input type="checkbox" required/>
            <p>He leído y acepto las Condiciones del Servicio y la Política de Privacidad de Vacunómetro Perú.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header