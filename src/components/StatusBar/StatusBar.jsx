import { useSelector } from 'react-redux'
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded'
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined'
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import './StatusBar.css'

const StatusBar = () => {
  const stats = useSelector((state) => state.user.stats)

  return (
    <footer className="status-bar">
      <div className="status-bar__group">
        <span className="status-bar__item">
          <ShowChartRoundedIcon fontSize="inherit" />
          {stats.winRate}
        </span>
        <span className="status-bar__item">
          <MailOutlineRoundedIcon fontSize="inherit" />
          {stats.messages}
        </span>
        <span className="status-bar__item">
          <WaterDropOutlinedIcon fontSize="inherit" />
          {stats.energy}
        </span>
        <span className="status-bar__item">
          <ShieldOutlinedIcon fontSize="inherit" />
          {stats.shield}
        </span>
        <span className="status-bar__item status-bar__item--win">
          <CelebrationRoundedIcon fontSize="inherit" />
          You Won! - {stats.lastWin}
        </span>
      </div>

      <div className="status-bar__group">
        <button type="button" className="status-bar__icon-btn" aria-label="Settings">
          <SettingsOutlinedIcon fontSize="inherit" />
        </button>
        <span className="status-bar__item">
          <SignalCellularAltRoundedIcon fontSize="inherit" />
        </span>
        <button type="button" className="status-bar__icon-btn" aria-label="Support">
          <HeadsetMicOutlinedIcon fontSize="inherit" />
        </button>
        <button type="button" className="status-bar__icon-btn" aria-label="Layout">
          <ViewAgendaOutlinedIcon fontSize="inherit" />
        </button>
        <button type="button" className="status-bar__icon-btn" aria-label="More">
          <MoreVertRoundedIcon fontSize="inherit" />
        </button>
      </div>
    </footer>
  )
}

export default StatusBar
