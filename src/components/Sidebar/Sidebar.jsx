import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded'
import Badge from '../Badge/Badge'
import { toggleSidebar } from '../../redux/features/themeSlice'
import './Sidebar.css'
import ShortlinksIcon from '../../assets/shortlink-icon.png'
import FaucetIcon from '../../assets/faucet-coins-hand-icon.png'
import PTCIcon from '../../assets/ptc-tv-icon.png'
import DiscoverIcon from '../../assets/discover-icon.png'
import CratesIcon from '../../assets/crates-icon.png'
import ShopIcon from '../../assets/shop-icon.png'

const earningsLinks = [
  { to: '/shortlinks', label: 'Shortlinks', icon: ShortlinksIcon, badge: 5 },
  { to: '/faucet', label: 'Faucet', icon: FaucetIcon },
  { to: '/ptc-ads', label: 'PTC ADs', icon: PTCIcon, expandable: true },
]

const orbitSpaceLinks = [
  { to: '/discover', label: 'Discover', icon: DiscoverIcon },
  { to: '/crates', label: 'Crates', icon: CratesIcon },
  { to: '/shop', label: 'Shop', icon: ShopIcon, expandable: true },
]

const NavItem = ({ to, label, icon, badge, expandable }) => {
  const isImageIcon = typeof icon === 'string'
  const Icon = icon

  return (
    <li className="sidebar__item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `sidebar__link${expandable ? ' sidebar__link--expandable' : ''}${isActive ? ' sidebar__link--active' : ''}`
        }
      >
        {isImageIcon ? (
          <img src={icon} alt="" className="sidebar__link-icon sidebar__link-icon--img" />
        ) : (
          <Icon className="sidebar__link-icon" fontSize="small" />
        )}
        <span className="sidebar__link-label">{label}</span>
        {badge != null && <Badge variant="default">{badge}</Badge>}
        {expandable && <KeyboardArrowDownRoundedIcon className="sidebar__chevron" fontSize="small" />}
      </NavLink>
    </li>
  )
}

const Sidebar = () => {
  const dispatch = useDispatch()
  const collapsed = useSelector((state) => state.theme.sidebarCollapsed)
  const version = 'v0.1.23'

  return (
    <aside className={`sidebar${collapsed ? ' sidebar--collapsed' : ''}`}>
      <nav className="sidebar__nav">
        <ul className="sidebar__group">
          <li className="sidebar__item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `sidebar__link sidebar__link--dashboard${isActive ? ' sidebar__link--active' : ''}`}
            >
              <GridViewRoundedIcon className="sidebar__link-icon" fontSize="small" />
              <span className="sidebar__link-label">Dashboard</span>
            </NavLink>
          </li>
        </ul>

        <div className="sidebar__section">
          <span className="sidebar__section-title">Earnings</span>
          <ul className="sidebar__group">
            {earningsLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </ul>
        </div>

        <div className="sidebar__section">
          <span className="sidebar__section-title">Orbit Space</span>
          <ul className="sidebar__group">
            {orbitSpaceLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </ul>
        </div>
      </nav>

      <div className="sidebar__footer">
        <button
          type="button"
          className="sidebar__collapse-btn"
          onClick={() => dispatch(toggleSidebar())}
          aria-label="Toggle sidebar"
        >
          {collapsed ? (
            <ChevronRightRoundedIcon fontSize="small" />
          ) : (
            <ChevronLeftRoundedIcon fontSize="small" />
          )}
        </button>
        <button type="button" className="sidebar__magic-btn" aria-label="Quick actions">
          <AutoFixHighRoundedIcon fontSize="small" />
        </button>
        <span className="sidebar__version">{version}</span>
      </div>
    </aside>
  )
}

export default Sidebar
