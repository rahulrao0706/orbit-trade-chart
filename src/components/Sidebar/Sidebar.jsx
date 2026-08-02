import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import Grid3x3RoundedIcon from '@mui/icons-material/Grid3x3Rounded'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded'
import Badge from '../Badge/Badge'
import { toggleSidebar } from '../../redux/features/themeSlice'
import './Sidebar.css'

const earningsLinks = [
  { to: '/shortlinks', label: 'Shortlinks', icon: LinkRoundedIcon, badge: 5 },
  { to: '/faucet', label: 'Faucet', icon: WaterDropOutlinedIcon },
  { to: '/ptc-ads', label: 'PTC ADs', icon: DesktopWindowsOutlinedIcon, expandable: true },
]

const orbitSpaceLinks = [
  { to: '/discover', label: 'Discover', icon: ExploreOutlinedIcon },
  { to: '/crates', label: 'Crates', icon: Grid3x3RoundedIcon },
  { to: '/shop', label: 'Shop', icon: StorefrontOutlinedIcon, expandable: true },
]

const NavItem = ({ to, label, icon: Icon, badge, expandable }) => (
  <li className="sidebar__item">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `sidebar__link${expandable ? ' sidebar__link--expandable' : ''}${isActive ? ' sidebar__link--active' : ''}`
      }
    >
      <Icon className="sidebar__link-icon" fontSize="small" />
      <span className="sidebar__link-label">{label}</span>
      {badge != null && <Badge variant="default">{badge}</Badge>}
      {expandable && <KeyboardArrowDownRoundedIcon className="sidebar__chevron" fontSize="small" />}
    </NavLink>
  </li>
)

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
