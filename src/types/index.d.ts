declare namespace ThingData {
  interface Thing {
    _id: string
    name: string
    description: string
    microcontroller: boolean
    sensors: Sensor[]
  }

  interface Sensor {
    name: string
    description: string
    influxField: string
    timeline?: TimeData[]
  }

  interface TimeData {
    time: Date
    value: number
    field: string
  }

  interface Query {
    since: string
    interval: string
    sensor: number
  }
}

export as namespace ThingData