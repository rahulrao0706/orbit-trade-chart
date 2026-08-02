import AddRoundedIcon from '@mui/icons-material/AddRounded'
import Button from '../Button/Button'
import './Breadcrumb.css'

const Breadcrumb = ({ items = [], actionLabel, onAction }) => (
  <div className="breadcrumb">
    <nav className="breadcrumb__trail" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item} className="breadcrumb__item-wrap">
          <span className={`breadcrumb__item${index === items.length - 1 ? ' breadcrumb__item--current' : ''}`}>
            {item}
          </span>
          {index < items.length - 1 && <span className="breadcrumb__separator">&gt;</span>}
        </span>
      ))}
    </nav>
    {actionLabel && (
      <Button variant="outlined" size="sm" startIcon={<AddRoundedIcon fontSize="small" />} onClick={onAction}>
        {actionLabel}
      </Button>
    )}
  </div>
)

export default Breadcrumb
