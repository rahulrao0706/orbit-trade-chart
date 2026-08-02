import './FlagIcon.css'
import australiaFlag from '../../../assets/australia-flag-icon.png'
import indonesiaFlag from '../../../assets/indonesia-flag-icon.png'
import japanFlag from '../../../assets/japan-flag-icon.png'
import bTCIcon from '../../../assets/BTC-Coin-Logo.png'

const FLAG_ICONS = {
  AU: australiaFlag,
  ID: indonesiaFlag,
  JP: japanFlag,
  BTC: bTCIcon
}

const FlagIcon = ({ code, size = 'md' }) => {
  const src = FLAG_ICONS[code]

  return (
    <span className={`flag-icon flag-icon--${size}`}>
      {src && <img className="flag-icon__img" src={src} alt={`${code} flag`} />}
    </span>
  )
}

export default FlagIcon
