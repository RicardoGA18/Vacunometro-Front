import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
// Axios
import axios from 'axios'

const DistrictView = () => {
  const [district, setDistrict] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const fetchData = async () => {
      const {data} = await axios.get(`http://167.99.21.238:8082/api/vaccination/districts/${id}`)
      setDistrict(data.data)
    }
    fetchData()
  },[])

  return (
    <div>
      <h1>{district.name}</h1>
      <p>Id: {district.id}</p>
      <p>Total de vacunados: {district.vaccinated_total}</p>
      <p>Meta de vacunados: {district.vaccinated_goal}</p>
    </div>
  )
}

export default DistrictView