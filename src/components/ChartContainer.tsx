import React from 'react'
import { buildQuery, fetchData } from '../helpers/fetchData'
import SensorChart from './SensorChart'
import styles from './styles/ChartContainer.module.css'
function ChartContainer({ sensorNumber }: { sensorNumber: number }) {
  const [sensor, setSensor] = React.useState(sensorNumber)
  const [interval, setInterval] = React.useState('1h')
  const [since, setSince] = React.useState('1d')
  const [loaded, setLoaded] = React.useState(false)

  const [data, setData] = React.useState<null | ThingData.Sensor>(null)

  React.useEffect(() => {
    const query = buildQuery(since, interval, sensor)
    const getData = async () => {
      const data: ThingData.Sensor = await fetchData(query)
      return data
    }
    getData().then(setData)
  }, [sensor, interval, since])

  React.useEffect(() => {
    if (data) {
      setLoaded(true)
    }
  }, [data])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3 className={styles.title}>Sensor: #{sensor}</h3>
        <div className={styles.selection}>
          <label htmlFor='sensor'>Sensor: </label>
          <select
            name='sensor'
            value={sensor}
            onChange={(e) => setSensor(Number(e.target.value))}>
            <option value='1'>Cold side</option>
            <option value='2'>Warm side</option>
          </select>
        </div>
        <div className={styles.selection}>
          <label htmlFor='intervals'>Interval: </label>
          <select
            name='intervals'
            value={interval}
            onChange={(e) => setInterval(e.target.value)}>
            <option value='10m'>10 min</option>
            <option value='15m'>15 min</option>
            <option value='30m'>30 min</option>
            <option value='1h'>1 hour</option>
            <option value='2h'>2 hours</option>
            <option value='12h'>12 hours</option>
            <option value='1d'>1 day</option>
          </select>
        </div>
        <div className={styles.selection}>
          <label htmlFor='since'>Data since: </label>
          <select
            name='since'
            value={since}
            onChange={(e) => setSince(e.target.value)}>
            <option value='1h'>1 hour</option>
            <option value='12h'>12 hours</option>
            <option value='1d'>1 day</option>
            <option value='3d'>3 days</option>
            <option value='1w'>1 week</option>
            <option value='2w'>2 weeks</option>
          </select>
        </div>
      </header>
      <div className={styles.chartArea}>
        {loaded && data !== null && (
          <SensorChart timeline={data.timeline!} sensor={data.name!} />
        )}
      </div>
    </div>
  )
}

export default ChartContainer
