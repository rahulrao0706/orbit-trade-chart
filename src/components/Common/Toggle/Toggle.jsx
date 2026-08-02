import './Toggle.css'

const Toggle = ({ checked, onChange, label }) => (
  <label className="toggle">
    {label && <span className="toggle__label">{label}</span>}
    <span className={`toggle__track${checked ? ' toggle__track--checked' : ''}`}>
      <input
        type="checkbox"
        className="toggle__input"
        checked={checked}
        onChange={(event) => onChange?.(event.target.checked)}
      />
      <span className="toggle__thumb" />
    </span>
  </label>
)

export default Toggle
