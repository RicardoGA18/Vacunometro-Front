import React,{useState,useEffect} from 'react'
// ApexChart
import Chart from "react-apexcharts"
// Assets
import bgGradient from '../../assets/bgGradient.png'

const Alert = () => {
  const [options,setOptions] = useState({})
  const [series,setSeries] = useState([])

  useEffect(()=>{
    setSeries([
      {
        name: 'Series 1',
        data: [272.42,280.85,306.97,287.81,285.55]
      }
    ])
    setOptions({
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis:{
        type: 'datetime',
        categories: ['11/2020','12/2020','01/2021','02/2021','03/2021']
      },
      tooltip:{
        x:{
          format: 'MM/yyyy'
        }
      }
    })
  },[])

  return (
    <div className="Alert l-container">
      <img className="Alert__Background" src={bgGradient} />
      <div className="l-contain">
        <div className="Alert__Chart">
          <Chart 
            options={options}
            series={series}
            type="area"
            width="100%"
            height="auto"
          />
        </div>
        <p className="Alert__Title">Sepa que medidas tomar en tiempo real con nuestras notificaciones de recomendaciones</p>
        <p className="Alert__Description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
      </div>
    </div>
  )
}

export default Alert