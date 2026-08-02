import { useSelector } from 'react-redux'
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
import Badge from '../Badge/Badge'
import './Header.css'
import OrbitLogo from '../../assets/Orbit-Logo.png'
import Event from '../../assets/event-logo.png'
import LoginUserIcon from '../../assets/login-user-icon.png'
import swapIcon from '../../assets/swap-icon.png'

const Header = () => {
  const btcBalance = useSelector((state) => state.user.btcQuickBalance)
  const language = useSelector((state) => state.user.language)
  const unreadCount = useSelector((state) => state.notification.unreadCount)

  return (
    <header className="header">
      <div className="header__brand">
        {/* <span className="header__logo-mark" aria-hidden="true">
          <SwapHorizRoundedIcon fontSize="small" />
        </span> */}
        <div className="header__logo-text">
          {/* <span className="header__logo-title">CREBiT</span>
          <span className="header__logo-subtitle">~Wallet</span> */}
          <img src={OrbitLogo} alt="Orbit Logo" />
        </div>
      </div>

      <span className="header__swap-icon" aria-hidden="true">
        {/* <SwapHorizRoundedIcon fontSize="small" /> */}
        <img src={swapIcon} alt="swap-icon" />
      </span>

      <SearchBar placeholder="Search" />

      <div className="header__actions">
        <button type="button" className="header__pill">
          <CurrencyBitcoinRoundedIcon className="header__pill-icon" fontSize="small" />
          <span>{btcBalance}</span>
          <KeyboardArrowDownRoundedIcon fontSize="small" />
        </button>

        <Button variant="primary" size="md" startIcon={<AddRoundedIcon fontSize="small" />}>
          Deposit
        </Button>

        <button type="button" className="header__events-btn">
          <img src={Event} alt="Event Logo" />
        </button>

        <button type="button" className="header__icon-btn" aria-label="Bag">
          <ShoppingBagOutlinedIcon fontSize="small" />
        </button>

        <button type="button" className="header__icon-btn" aria-label="Rewards">
          <AcUnitRoundedIcon fontSize="small" />
        </button>

        <button type="button" className="header__icon-btn header__icon-btn--notif" aria-label="Notifications">
          <NotificationsNoneRoundedIcon fontSize="small" />
          {unreadCount > 0 && (
            <Badge variant="notification">{unreadCount >= 99 ? '99+' : unreadCount}</Badge>
          )}
        </button>

        <button type="button" className="header__lang-btn">
          <LanguageRoundedIcon fontSize="small" />
          <span>{language}</span>
          <KeyboardArrowDownRoundedIcon fontSize="small" />
        </button>

        <button type="button" className="header__avatar-btn">
          <img className="header__avatar" src={LoginUserIcon} alt="Account" />
          <KeyboardArrowDownRoundedIcon fontSize="small" />
        </button>
      </div>
    </header>
  )
}

export default Header
