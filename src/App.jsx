import './App.css'

import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <div className="empty-content"></div>
      <Outlet />
      <div className="prueba">
        <p>Santtino</p>
      </div>
    </>
  )
}

export default App
