import './App.css'
import ChartContainer from './components/ChartContainer'

function App() {
  return (
    <div className='App'>
      <div>
        <ChartContainer sensorNumber={1} />
      </div>
      <div>
        <ChartContainer sensorNumber={2} />
      </div>
    </div>
  )
}

export default App
