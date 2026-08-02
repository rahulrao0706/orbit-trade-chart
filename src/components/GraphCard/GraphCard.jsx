import { AreaChart, Area, XAxis, ReferenceDot, ResponsiveContainer } from 'recharts'
import './GraphCard.css'

const CHART_LINE_COLOR = '#ff2d78'
const CHART_FILL_START = 'rgba(255, 45, 120, 0.35)'
const CHART_FILL_END = 'rgba(255, 45, 120, 0)'
const CHART_MUTED_TEXT = '#6f6e7a'
const CHART_MARGIN = { top: 60, right: 12, bottom: 4, left: 12 }
const CHART_HEIGHT = 220
const PLOT_BOTTOM = CHART_HEIGHT - CHART_MARGIN.bottom - 30

const TooltipLabel = ({ viewBox, label, value }) => {
  const { x, y } = viewBox
  const boxWidth = 118
  const boxHeight = 48
  const boxX = x - boxWidth / 2
  const boxY = y - boxHeight - 22

  return (
    <g>
      <line
        x1={x}
        y1={boxY + boxHeight + 6}
        x2={x}
        y2={PLOT_BOTTOM}
        stroke={CHART_LINE_COLOR}
        strokeDasharray="3 3"
        strokeWidth={1}
      />
      <rect x={boxX} y={boxY} width={boxWidth} height={boxHeight} rx={8} fill="#FFFFFF" />
      <text x={x} y={boxY + 20} textAnchor="middle" fontSize="11" fontWeight="700" fill="#9a99a6">
        {label}
      </text>
      <text x={x} y={boxY + 37} textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">
        {value}
      </text>
    </g>
  )
}

const GraphCard = ({ data, activePoint }) => (
  <div className="graph-card">
    <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
      <AreaChart data={data} margin={CHART_MARGIN}>
        <defs>
          <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART_FILL_START} />
            <stop offset="100%" stopColor={CHART_FILL_END} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          tickFormatter={(_, i) => data[i]?.shortDay}
          axisLine={false}
          tickLine={false}
          tick={{ fill: CHART_MUTED_TEXT, fontSize: 12, fontWeight: 600 }}
          dy={10}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={CHART_LINE_COLOR}
          strokeWidth={2.5}
          fill="url(#balanceGradient)"
        />
        {activePoint && (
          <ReferenceDot
            x={data[activePoint.index]?.day}
            y={data[activePoint.index]?.value}
            r={5}
            fill="#ffffff"
            stroke={CHART_LINE_COLOR}
            strokeWidth={3}
            label={(props) => (
              <TooltipLabel viewBox={props.viewBox} label={activePoint.label} value={activePoint.value} />
            )}
            isFront
          />
        )}
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

export default GraphCard
