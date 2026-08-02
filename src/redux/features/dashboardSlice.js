import { createSlice } from '@reduxjs/toolkit'

const chartData = [
  { day: 'Monday', shortDay: 'M', value: 2480 },
  { day: 'Tuesday', shortDay: 'T', value: 2400 },
  { day: 'Wednesday', shortDay: 'W', value: 2560 },
  { day: 'Thursday', shortDay: 'T', value: 2586 },
  { day: 'Friday', shortDay: 'F', value: 2660 },
  { day: 'Saturday', shortDay: 'S', value: 2780 },
  { day: 'Sunday', shortDay: 'S', value: 2900 },
]

const initialState = {
  totalBalance: {
    amount: 258346.0,
    currency: 'BTC',
    approxValue: 25000,
    approxCurrency: 'INR',
    changePercent: 15,
    changeDirection: 'up',
  },
  ranges: ['7D', '30D', '90D', '180D'],
  activeRange: '7D',
  chartData,
  activeTooltipPoint: {
    label: 'Thursday',
    value: '2586.00BTC',
    index: 3,
  },
  promoBanner: {
    visible: true,
    message: 'New Yield Opportunities Available, Explore top DeFi strategies and start earning today.',
    ctaLabel: 'Start Earning',
  },
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActiveRange(state, action) {
      state.activeRange = action.payload
    },
    dismissPromoBanner(state) {
      state.promoBanner.visible = false
    },
  },
})

export const { setActiveRange, dismissPromoBanner } = dashboardSlice.actions
export default dashboardSlice.reducer
