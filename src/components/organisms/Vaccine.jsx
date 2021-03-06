import React,{useState,useEffect} from 'react'
// ApexChart
import Chart from 'react-apexcharts'

const Vaccine = () => {
  const [options,setOptions] = useState({})
  const [series,setSeries] = useState([])

  useEffect(()=>{
    setSeries([318334,(446433 - 318334)])
    setOptions({
      labels: ['Vacunados', 'No Vacunados'],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(2) + "%"
        }
      },
      fill:{
        colors: ['#25E6A4','#FA1B1B']
      },
      legend:{
        show: false,
      },
      plotOptions: {
        pie: {
          startAngle: -140,
          endAngle: 140,
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700',
                color: '#000000',
              },
              value: {
                show: true,
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '300',
                color: '#000000',
              },
              total: {
                show: true,
                fontWeight: '700',
                label: 'Meta Vacunados',
              }
            }
          }
        }
      }
    })
  },[])

  return (
    <div className="Vaccine l-container">
      <div className="l-contain">
        <div className="Vaccine__Chart">
          <Chart 
            options={options}
            series={series}
            type="donut"
            width="100%"
          />
        </div>
        <p className="Vaccine__Title">Sepa como va la vacunación en su distrito y en que momento sera su turno y que hacer por mientras</p>
        <p className="Vaccine__Description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
      </div>
    </div>
  )
}

export default Vaccine