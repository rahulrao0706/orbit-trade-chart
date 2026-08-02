import './Button.css'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) => {
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {startIcon && <span className="btn__icon btn__icon--start">{startIcon}</span>}
      {children && <span className="btn__label">{children}</span>}
      {endIcon && <span className="btn__icon btn__icon--end">{endIcon}</span>}
    </button>
  )
}

export default Button
