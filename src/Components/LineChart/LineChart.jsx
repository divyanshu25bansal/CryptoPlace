import React from 'react'
import './LineChart.css'
import { useState , useEffect} from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historyData}) => {
    const [chartData,setChartData] = useState([['Data','Price']])

    useEffect(() => {
        let chartDataCopy = [['Data','Price']];
        if(historyData.prices){
            historyData.prices.map((item)=>{
                chartDataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
        }
        setChartData(chartDataCopy)
    },[historyData])

  return (
    <Chart className='chart'
    chartType="LineChart"
    data={chartData}
    height="300px"
    legendToggle
    legend_toggle
   />
  )
}

export default LineChart