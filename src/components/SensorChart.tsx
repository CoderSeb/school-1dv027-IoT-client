import React from 'react'
import Chart from 'react-apexcharts'
import styles from './styles/SensorChart.module.css'

function SensorChart({
  timeline,
  sensor
}: {
  timeline: ThingData.TimeData[]
  sensor: string
}) {
  const [series, setSeries] = React.useState<any>([])
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const options: ApexCharts.ApexOptions = {
    chart: {
      id: sensor
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      x: {
        show: true,
        format: 'dd MMM yyyy HH:mm'
      }
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return Number(value.toFixed(2)) + '°C'
        }
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'dd/M HH:mm'
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#074800',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    }
  }

  React.useEffect(() => {
    setLoaded(false)
    let values: object[] = []
    timeline.forEach((item: ThingData.TimeData) => {
      const modifyDate = new Date(item.time)
      const newObj = {
        x: modifyDate.setHours(modifyDate.getHours() + 2),
        y: item.value
      }
      values.push(newObj)
    })
    setSeries([
      {
        name: sensor,
        data: values
      }
    ])
  }, [timeline, sensor])

  React.useEffect(() => {
    if (!loaded && series.length > 0) {
      setLoaded(true)
    }
  }, [series])

  return (
    <div className={styles.container}>
      {loaded && (
        <Chart options={options} series={series} type='area' height={800} />
      )}
    </div>
  )
}

export default SensorChart
