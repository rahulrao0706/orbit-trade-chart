import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import PromoBanner from '../components/PromoBanner/PromoBanner'
import StatusBar from '../components/StatusBar/StatusBar'
import './MainLayout.css'

const MainLayout = () => (
  <div className="main-layout">
    <Header />
    <div className="main-layout__body">
      <Sidebar />
      <div className="main-layout__content">
        <PromoBanner />
        <main className="main-layout__page">
          <Outlet />
        </main>
        <StatusBar />
      </div>
    </div>
  </div>
)

export default MainLayout
