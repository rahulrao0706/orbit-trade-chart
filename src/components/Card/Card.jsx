import './Card.css'

const Card = ({ children, className = '', padded = true, dashed = false, as: Component = 'div', ...rest }) => {
  const classes = ['card', padded && 'card--padded', dashed && 'card--dashed', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}

export default Card
