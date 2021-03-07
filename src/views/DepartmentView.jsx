import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
// Axios
import axios from 'axios'

const DepartmentView = () => {
  const [department, setDepartment] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const fetchData = async () => {
      const {data} = await axios.get(`http://167.99.21.238:8082/api/vaccination/departments/${id}`)
      setDepartment(data.data)
    }
    fetchData()
  },[])

  return (
    <div>
      <h1>{department.name}</h1>
      <p>Id: {department.id}</p>
      <p>Total de vacunados: {department.vaccinated_total}</p>
      <p>Meta de vacunados: {department.vaccinated_goal}</p>
    </div>
  )
}

export default DepartmentView