import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
// Axios
import axios from 'axios'

const ProvinceView = () => {
  const [province, setProvince] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const fetchData = async () => {
      const {data} = await axios.get(`http://167.99.21.238:8082/api/vaccination/provinces/${id}`)
      setProvince(data.data)
    }
    fetchData()
  },[])

  return (
    <div>
      <h1>{province.name}</h1>
      <p>Id: {province.id}</p>
      <p>Total de vacunados: {province.vaccinated_total}</p>
      <p>Meta de vacunados: {province.vaccinated_goal}</p>
    </div>
  )
}

export default ProvinceView