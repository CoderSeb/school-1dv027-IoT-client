import './App.css'
import ChartContainer from './components/ChartContainer'
import Header from './components/Header'
function App() {
  return (
    <div className='App'>
      <Header />
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
