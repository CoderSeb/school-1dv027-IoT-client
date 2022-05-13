export const fetchData = async (query: ThingData.Query) => {
  try {
    const url: string = process.env.REACT_APP_API_URL!
    const params: URLSearchParams = new URLSearchParams({
      since: query.since,
      interval: query.interval
    })
    const response = await fetch(`${url}/sensors/sensor-${query.sensor}?` + params, {
      method: 'GET'
    })
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const buildQuery = (since: string, interval: string, sensor: number) => {
  return {
    since,
    interval,
    sensor
  } as ThingData.Query
}
