import { useDispatch, useSelector } from 'react-redux'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { dismissPromoBanner } from '../../redux/features/dashboardSlice'
import './PromoBanner.css'

const PromoBanner = () => {
  const dispatch = useDispatch()
  const { visible, message, ctaLabel } = useSelector((state) => state.dashboard.promoBanner)

  if (!visible) return null

  return (
    <div className="promo-banner">
      <span className="promo-banner__bar" aria-hidden="true" />
      <p className="promo-banner__text">
        {message} <a href="#start-earning" className="promo-banner__link">{ctaLabel}</a>
      </p>
      <button
        type="button"
        className="promo-banner__close"
        onClick={() => dispatch(dismissPromoBanner())}
        aria-label="Dismiss banner"
      >
        <CloseRoundedIcon fontSize="small" />
      </button>
    </div>
  )
}

export default PromoBanner
