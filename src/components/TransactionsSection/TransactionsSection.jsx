import { useDispatch, useSelector } from 'react-redux'
import SortRoundedIcon from '@mui/icons-material/SortRounded'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'
import SouthWestRoundedIcon from '@mui/icons-material/SouthWestRounded'
import GavelRoundedIcon from '@mui/icons-material/GavelRounded'
import CryptoIcon from '../Common/CryptoIcon/CryptoIcon'
import Toggle from '../Common/Toggle/Toggle'
import Button from '../Button/Button'
import Badge from '../Badge/Badge'
import DataTable from '../DataTable/DataTable'
import { setActiveTab, setHideSmallAmounts } from '../../redux/features/transactionSlice'
import './TransactionsSection.css'

const STATUS_VARIANT = {
  success: 'success',
  pending: 'warning',
  rejected: 'danger',
  hold: 'neutral',
}

const TABS = [
  { key: 'recent', label: 'Recent Transactions' },
  { key: 'referral', label: 'Referral Transactions' },
]

const columns = [
  {
    key: 'coin',
    label: 'Coin',
    render: (row) => (
      <div className="tx-cell-coin">
        {row.direction === 'in' ? (
          <NorthEastRoundedIcon className="tx-cell-coin__arrow tx-cell-coin__arrow--in" fontSize="small" />
        ) : (
          <SouthWestRoundedIcon className="tx-cell-coin__arrow tx-cell-coin__arrow--out" fontSize="small" />
        )}
        <CryptoIcon code={row.code} color={row.iconColor} />
        <div className="tx-cell-coin__identity">
          <span className="tx-cell-coin__code">{row.code}</span>
          <span className="tx-cell-coin__name">{row.name}</span>
        </div>
      </div>
    ),
  },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    sortValue: (row) => Number.parseFloat(row.amount),
    render: (row) => (
      <div className="tx-cell-stacked">
        <span className="tx-cell-stacked__main">{row.amount}</span>
        <span className="tx-cell-stacked__sub">{row.inrValue}</span>
      </div>
    ),
  },
  {
    key: 'counterparty',
    label: 'From/To',
    sortable: true,
    sortValue: (row) => row.counterparty.label,
    render: (row) =>
      row.counterparty.isLink ? (
        <a href="#transaction" className="tx-cell-link">
          {row.counterparty.label}
        </a>
      ) : (
        <span className="tx-cell-muted">{row.counterparty.label}</span>
      ),
  },
  {
    key: 'date',
    label: 'Date/Time',
    sortable: true,
    render: (row) => (
      <div className="tx-cell-stacked">
        <span className="tx-cell-stacked__main">{row.date}</span>
        <span className="tx-cell-stacked__sub">{row.time}</span>
      </div>
    ),
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (row) => (
      <span className="tx-cell-status">
        <Badge variant={STATUS_VARIANT[row.status]} className="badge--pill">
          {row.status}
        </Badge>
        {row.hasDisputeIcon && <GavelRoundedIcon fontSize="small" className="tx-cell-status__icon" />}
      </span>
    ),
  },
  {
    key: 'remark',
    label: 'Remark',
    render: (row) => <span className="tx-cell-muted">{row.remark ?? '–'}</span>,
  },
  {
    key: 'txId',
    label: 'Transaction ID',
    render: (row) => <span className="tx-cell-muted">{row.txId}</span>,
  },
]

const TransactionsSection = () => {
  const dispatch = useDispatch()
  const { activeTab, hideSmallAmounts, recentTransactions } = useSelector((state) => state.transaction)

  return (
    <section id="recent-transactions" className="tx-section">
      <div className="tx-section__header">
        <div className="tx-section__tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`tx-section__tab${activeTab === tab.key ? ' tx-section__tab--active' : ''}`}
              onClick={() => dispatch(setActiveTab(tab.key))}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tx-section__controls">
          <Toggle
            label="Hide Less"
            checked={hideSmallAmounts}
            onChange={(value) => dispatch(setHideSmallAmounts(value))}
          />
          <button type="button" className="tx-section__action">
            <SortRoundedIcon fontSize="small" />
            Sort
          </button>
        </div>
      </div>

      {activeTab === 'recent' ? (
        <>
          <DataTable columns={columns} rows={recentTransactions} />
          <div className="tx-section__footer">
            <span className="tx-section__count">Showing {recentTransactions.length} results</span>
            <Button variant="outlined" size="sm">
              View All Transactions
            </Button>
          </div>
        </>
      ) : (
        <p className="tx-section__empty">No referral transactions yet.</p>
      )}
    </section>
  )
}

export default TransactionsSection
