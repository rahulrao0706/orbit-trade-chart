import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import BalanceCard from '../../components/BalanceCard/BalanceCard'
import FiatWalletsSection from '../../components/FiatWalletsSection/FiatWalletsSection'
import CryptoWalletsSection from '../../components/CryptoWalletsSection/CryptoWalletsSection'
import TransactionsSection from '../../components/TransactionsSection/TransactionsSection'
import './Dashboard.css'

const Dashboard = () => (
  <div className="dashboard">
    <Breadcrumb items={['User Panel', 'Dashboard']} actionLabel="Advertise Here" />
    <BalanceCard />
    <FiatWalletsSection />
    <CryptoWalletsSection />
    <TransactionsSection />
  </div>
)

export default Dashboard
