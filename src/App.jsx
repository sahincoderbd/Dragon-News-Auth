
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div className='container mx-auto px-2 lg:px-0'>
    <Outlet></Outlet>
    </div>
  )
}

export default App
