import { useDispatch } from 'react-redux'
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import CryptoIcon from '../Common/CryptoIcon/CryptoIcon'
import Button from '../Button/Button'
import {
  toggleHoldVisibility,
  toggleStakedVisibility,
} from '../../redux/features/walletSlice'
import './CryptoWalletRow.css'

const CryptoWalletRow = ({ wallet }) => {
  const dispatch = useDispatch()
  const actions = wallet.actions ?? ['Convert', 'Earn']

  return (
    <div className={`crypto-row${wallet.locked ? ' crypto-row--locked' : ''}`}>
      <span className="crypto-row__drag" aria-hidden="true">
        <DragIndicatorRoundedIcon fontSize="small" />
      </span>

      <CryptoIcon code={wallet.code} color={wallet.iconColor} />

      <div className="crypto-row__identity">
        <span className="crypto-row__code">{wallet.code}</span>
        <span className="crypto-row__name">{wallet.name}</span>
      </div>

      {wallet.locked ? (
        <>
          <div className="crypto-row__balance">
            <span className="crypto-row__dash">&ndash;</span>
          </div>
          <div className="crypto-row__masked-field">
            <span className="crypto-row__dash">&ndash;</span>
          </div>
          <div className="crypto-row__masked-field">
            <span className="crypto-row__dash">&ndash;</span>
          </div>
        </>
      ) : (
        <>
          <div className="crypto-row__balance">
            <span className="crypto-row__amount">{wallet.amount}</span>
            <span className="crypto-row__inr">{wallet.inrValue}</span>
          </div>

          <button
            type="button"
            className="crypto-row__masked-field"
            onClick={() => dispatch(toggleHoldVisibility(wallet.id))}
          >
            <span className="crypto-row__masked-label-row">
              <span className="crypto-row__masked-label">Hold</span>
              <VisibilityOffOutlinedIcon fontSize="small" />
            </span>
            <span className="crypto-row__masked-value">{wallet.holdMasked ? '******' : wallet.amount}</span>
          </button>

          <button
            type="button"
            className="crypto-row__masked-field"
            onClick={() => dispatch(toggleStakedVisibility(wallet.id))}
          >
            <span className="crypto-row__masked-label-row">
              <span className="crypto-row__masked-label">Staked</span>
              <VisibilityOffOutlinedIcon fontSize="small" />
            </span>
            <span className="crypto-row__masked-value">{wallet.stakedMasked ? '******' : '0.00000000'}</span>
          </button>
        </>
      )}

      <div className="crypto-row__links">
        {wallet.ctaLabel ? (
          <Button variant="primary" size="sm">
            {wallet.ctaLabel}
          </Button>
        ) : (
          !wallet.locked &&
          actions.map((action) => (
            <button key={action} type="button" className="crypto-row__link">
              {action}
            </button>
          ))
        )}
      </div>
    </div>
  )
}

export default CryptoWalletRow
