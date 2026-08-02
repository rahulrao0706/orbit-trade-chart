import useCountdown from '../../hooks/useCountdown'
import './StatusRibbon.css'

const pad = (value) => String(value).padStart(2, '0')

const CountdownText = ({ target, mode, prefix }) => {
  const { days, hours, minutes, seconds } = useCountdown(target, { tickSeconds: mode === 'seconds' })

  const compact =
    mode === 'seconds' ? (
      <>
        {days}D : {pad(hours)}H : {pad(minutes)}M : {pad(seconds)}S
      </>
    ) : (
      <>
        {days}D {pad(hours)}H {pad(minutes)}M
      </>
    )

  return (
    <>
      {prefix}
      {compact}
    </>
  )
}

const StatusRibbon = ({ variant, icon: Icon, label, message, countdown }) => (
  <div className={`status-ribbon status-ribbon--${variant}`}>
    <span className="status-ribbon__label">
      {Icon && <Icon fontSize="small" />}
      {label}
    </span>
    <span className="status-ribbon__message">
      {countdown ? (
        <CountdownText target={countdown.target} mode={countdown.mode} prefix={countdown.prefix} />
      ) : (
        message
      )}
    </span>
  </div>
)

export default StatusRibbon
