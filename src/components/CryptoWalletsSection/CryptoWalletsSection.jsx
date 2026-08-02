import { useSelector } from 'react-redux'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import CryptoWalletRow from '../CryptoWalletRow/CryptoWalletRow'
import StatusRibbon from '../StatusRibbon/StatusRibbon'
import './CryptoWalletsSection.css'

const RIBBON_ICONS = {
  clock: AccessTimeRoundedIcon,
  premium: WorkspacePremiumRoundedIcon,
  refresh: AutorenewRoundedIcon,
  warning: WarningAmberRoundedIcon,
  swap: SwapHorizRoundedIcon,
}

const CryptoWalletsSection = () => {
  const entries = useSelector((state) => state.wallet.cryptoEntries)

  return (
    <section className="crypto-section">
      <div className="crypto-section__header">
        <h2 className="crypto-section__title">Crypto Wallets</h2>
        <div className="crypto-section__actions">
          <button type="button" className="crypto-section__action">
            <SwapHorizRoundedIcon fontSize="small" />
            Manage Assets
          </button>
          <button type="button" className="crypto-section__action">
            <SortRoundedIcon fontSize="small" />
            Sort
          </button>
        </div>
      </div>

      <div className="crypto-section__list">
        {entries.map((entry) =>
          entry.entryType === 'ribbon' ? (
            <StatusRibbon
              key={entry.id}
              variant={entry.variant}
              icon={RIBBON_ICONS[entry.icon]}
              label={entry.label}
              message={entry.message}
              countdown={entry.countdown}
            />
          ) : (
            <CryptoWalletRow key={entry.id} wallet={entry} />
          ),
        )}
      </div>
    </section>
  )
}

export default CryptoWalletsSection
