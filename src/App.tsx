import {useState} from 'react'
import './App.css'
import Sidebar from './layouts/Sidebar'
import Header from './layouts/Header'

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar)
  }

  return (
    <div className='grid-container'>
      <Header openSidebar={handleSidebarToggle}/>
      <Sidebar openSidebarToggle={handleSidebarToggle} openSidebar={openSidebar}/>
    </div>
  )
}

export default App
