import './CryptoIcon.css'
import btcIcon from '../../../assets/BTC-Coin-Logo.png'

const CRYPTO_ICONS = {
  BTC: btcIcon,
}

const CryptoIcon = ({ code, color = '#3a3a46' }) => {
  const src = CRYPTO_ICONS[code]

  if (src) {
    return (
      <span className="crypto-icon crypto-icon--image">
        <img className="crypto-icon__img" src={src} alt={`${code} icon`} />
      </span>
    )
  }

  return (
    <span className="crypto-icon" style={{ '--crypto-icon-color': color }}>
      {code.slice(0, 1)}
    </span>
  )
}

export default CryptoIcon
