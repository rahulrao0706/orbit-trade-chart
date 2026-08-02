import { useDispatch, useSelector } from 'react-redux'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import Card from '../Card/Card'
import Button from '../Button/Button'
import GraphCard from '../GraphCard/GraphCard'
import { setActiveRange } from '../../redux/features/dashboardSlice'
import { setActiveTab } from '../../redux/features/transactionSlice'
import './BalanceCard.css'
import GraphCardIcon from '../../assets/graph-card.png'

const BalanceCard = () => {
  const dispatch = useDispatch()
  const { totalBalance, ranges, activeRange, chartData, activeTooltipPoint } = useSelector(
    (state) => state.dashboard,
  )

  const handleViewStatement = () => {
    dispatch(setActiveTab('recent'))
    document.getElementById('recent-transactions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Card className="balance-card">
      <div className="balance-card__top">
        <div className="balance-card__title-row">
          <span className="balance-card__title">Total Balance</span>
          <VisibilityOutlinedIcon className="balance-card__eye" fontSize="small" />
        </div>
        <div className="balance-card__ranges">
          {ranges.map((range) => (
            <button
              key={range}
              type="button"
              className={`balance-card__range-btn${range === activeRange ? ' balance-card__range-btn--active' : ''}`}
              onClick={() => dispatch(setActiveRange(range))}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="balance-card__body">
        <div className="balance-card__info">
          <div className="balance-card__amount-row">
            <span className="balance-card__amount">
              {totalBalance.amount.toFixed(2)} {totalBalance.currency}
            </span>
            <span className="balance-card__change">
              <TrendingUpRoundedIcon fontSize="inherit" />
              {totalBalance.changePercent}%
            </span>
          </div>
          <span className="balance-card__approx">
            &asymp; {totalBalance.approxValue.toLocaleString()} {totalBalance.approxCurrency}
          </span>

          <div className="balance-card__actions">
            <Button variant="primary">
              Deposit
            </Button>
            <Button variant="secondary">
              Buy Crypto
            </Button>
            <Button variant="secondary">
              Withdraw
            </Button>
            <Button variant="icon" aria-label="View statement" onClick={handleViewStatement}>
              <DescriptionOutlinedIcon fontSize="small" />
            </Button>
          </div>
        </div>

        {/* <GraphCard data={chartData} activePoint={activeTooltipPoint} /> */}
        <div>
          <img src={GraphCardIcon} alt="graphCard" style={{marginLeft:'114px'}} />
        </div>
      </div>
    </Card>
  )
}

export default BalanceCard
