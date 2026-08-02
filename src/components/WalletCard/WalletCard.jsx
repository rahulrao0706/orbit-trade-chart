import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import Card from '../Card/Card'
import FlagIcon from '../Common/FlagIcon/FlagIcon'
import './WalletCard.css'

export const WalletCard = ({ wallet }) => (
  <Card className="wallet-card">
    <FlagIcon code={wallet.flag} size="md" />
    <div className="wallet-card__info">
      <span className="wallet-card__code">{wallet.code}</span>
      <span className="wallet-card__name">{wallet.name}</span>
    </div>
    <div className="wallet-card__values">
      <span className="wallet-card__amount">{wallet.amount}</span>
      <span className="wallet-card__inr">{wallet.inrValue}</span>
    </div>
    <button type="button" className="wallet-card__menu" aria-label="More options">
      <MoreVertRoundedIcon fontSize="small" />
    </button>
  </Card>
)

export const AddFiatCard = ({ onClick }) => (
  <Card dashed className="wallet-card wallet-card--add" as="button" onClick={onClick}>
    <AddRoundedIcon fontSize="small" />
    <span>Add More Fiats</span>
  </Card>
)
