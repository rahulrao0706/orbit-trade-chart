import { createSlice } from '@reduxjs/toolkit'

const DAY = 24 * 60 * 60 * 1000
const HOUR = 60 * 60 * 1000
const MINUTE = 60 * 1000

const now = Date.now()
const delistingTarget = now + 2 * DAY + 13 * HOUR + 22 * MINUTE
const limitedTimeTarget = now + 2 * DAY + 13 * HOUR + 22 * MINUTE
const businessAccessTarget = now + 2 * DAY + 13 * HOUR + 22 * MINUTE + 40 * 1000

const wallet = (overrides) => ({
  amount: '0.8548 BTC',
  inrValue: '3,553.48 INR',
  holdMasked: true,
  stakedMasked: true,
  locked: false,
  ...overrides,
})

const ribbon = (overrides) => ({
  entryType: 'ribbon',
  ...overrides,
})

const initialState = {
  fiatWallets: [
    {
      id: 'aud',
      code: 'AUD',
      name: 'Australian Dollar',
      amount: '5400 AUD',
      inrValue: '3,51,953.48 INR',
      flag: 'AU',
    },
    {
      id: 'idr',
      code: 'IDR',
      name: 'Indonesian Rupiah',
      amount: '5400 IDR',
      inrValue: '3,51,953.48 INR',
      flag: 'ID',
    },
    {
      id: 'jpy',
      code: 'JPY',
      name: 'Japanese Yen',
      amount: '5400 JPY',
      inrValue: '3,51,953.48 INR',
      flag: 'JP',
    },
  ],

  cryptoEntries: [
    { entryType: 'wallet', ...wallet({ id: 'btc', code: 'BTC', name: 'Bitcoin', amount: '0.84864327 BTC', iconColor: '#f7931a' }) },
    { entryType: 'wallet', ...wallet({ id: 'eth', code: 'ETH', name: 'Ethereum', iconColor: '#627eea' }) },

    ribbon({
      id: 'ribbon-upcoming-1',
      variant: 'upcoming',
      icon: 'clock',
      label: 'Upcoming',
      message: 'Launches in 4 days',
    }),
    { entryType: 'wallet', ...wallet({ id: 'aave', code: 'AAVE', name: 'Aave', locked: true, iconColor: '#b6509e' }) },

    { entryType: 'wallet', ...wallet({ id: 'nrg', code: 'NRG', name: 'Energi', iconColor: '#0b8457' }) },
    { entryType: 'wallet', ...wallet({ id: 'eng', code: 'ENG', name: 'Enigma', iconColor: '#1b1a55' }) },
    { entryType: 'wallet', ...wallet({ id: 'dlt', code: 'DLT', name: 'Agrello delta', iconColor: '#cf6679' }) },

    ribbon({
      id: 'ribbon-premium-1',
      variant: 'premium',
      icon: 'premium',
      label: 'Premium Access',
      message: 'Release in 5 days',
    }),
    { entryType: 'wallet', ...wallet({ id: 'act-locked', code: 'ACT', name: 'Achain', locked: true, iconColor: '#6a3de8' }) },

    { entryType: 'wallet', ...wallet({ id: 'mln', code: 'MLN', name: 'Enzyme', iconColor: '#4a4a4a' }) },
    { entryType: 'wallet', ...wallet({ id: 'esd', code: 'ESD', name: 'Empty set dollar', iconColor: '#141414' }) },
    { entryType: 'wallet', ...wallet({ id: 'icp', code: 'ICP', name: 'Internet computer', iconColor: '#29abe2' }) },
    { entryType: 'wallet', ...wallet({ id: 'glm', code: 'GLM', name: 'Golem', iconColor: '#181ea9' }) },

    ribbon({
      id: 'ribbon-delisting',
      variant: 'delisting',
      icon: 'clock',
      label: 'Delisting',
      countdown: { target: delistingTarget, mode: 'compact', prefix: 'in ' },
    }),
    { entryType: 'wallet', ...wallet({ id: 'adx', code: 'ADX', name: 'AdEx Network', iconColor: '#2a52be' }) },
    { entryType: 'wallet', ...wallet({ id: 'exp', code: 'EXP', name: 'Expanse', iconColor: '#eb7a34' }) },
    { entryType: 'wallet', ...wallet({ id: 'iq', code: 'IQ', name: 'Everipedia', iconColor: '#24bfbf' }) },

    ribbon({
      id: 'ribbon-limited-time',
      variant: 'limitedTime',
      icon: 'refresh',
      label: 'Limited Time',
      countdown: { target: limitedTimeTarget, mode: 'compact', prefix: 'Upcoming in: ' },
    }),
    { entryType: 'wallet', ...wallet({ id: 'cel', code: 'CEL', name: 'Celsius', iconColor: '#f7941e' }) },
    { entryType: 'wallet', ...wallet({ id: 'ern', code: 'ERN', name: 'Ethernity', iconColor: '#0d7377' }) },
    { entryType: 'wallet', ...wallet({ id: 'flm', code: 'FLM', name: 'Flamingo', iconColor: '#ff6fa5' }) },

    ribbon({
      id: 'ribbon-premium-2',
      variant: 'premium',
      icon: 'premium',
      label: 'Premium Access',
      message: 'Early Access',
    }),
    { entryType: 'wallet', ...wallet({ id: 'act-early', code: 'ACT', name: 'Bitcoin', iconColor: '#6a3de8' }) },

    { entryType: 'wallet', ...wallet({ id: 'fct', code: 'FCT', name: 'Factom', iconColor: '#4c65a5' }) },
    { entryType: 'wallet', ...wallet({ id: 'grs', code: 'GRS', name: 'Groestcoin', iconColor: '#2b6a6c' }) },
    { entryType: 'wallet', ...wallet({ id: 'eth-2', code: 'ETH', name: 'Etherum', iconColor: '#627eea' }) },

    ribbon({
      id: 'ribbon-converted',
      variant: 'converted',
      icon: 'swap',
      label: 'Converted to USDT',
      message: '0.8,548 BTC → 255 USDT',
    }),
    { entryType: 'wallet', ...wallet({ id: 'pot', code: 'POT', name: 'Potcoin', locked: true, iconColor: '#2e8b57' }) },
    { entryType: 'wallet', ...wallet({ id: 'fun', code: 'FUN', name: 'Fun Token', iconColor: '#f2296d' }) },
    { entryType: 'wallet', ...wallet({ id: 'dbc', code: 'DBC', name: 'Deepbrain Chain', iconColor: '#2fb6a5' }) },

    ribbon({
      id: 'ribbon-premium-3',
      variant: 'premium',
      icon: 'premium',
      label: 'Premium Access',
      message: 'General release in 5 days',
    }),
    { entryType: 'wallet', ...wallet({ id: 'act-general', code: 'ACT', name: 'Bitcoin', locked: true, ctaLabel: 'Get Premium', iconColor: '#6a3de8' }) },

    ribbon({
      id: 'ribbon-delisted',
      variant: 'delisted',
      icon: 'warning',
      label: 'Delisted',
      message: 'Amount Lost: 0.8,548 BTC',
    }),
    { entryType: 'wallet', ...wallet({ id: 'nkn', code: 'NKN', name: 'Bitcoin', locked: true, iconColor: '#1b1b3a' }) },
    { entryType: 'wallet', ...wallet({ id: 'dusk', code: 'DUSK', name: 'Bitcoin', iconColor: '#8fa3ad' }) },

    ribbon({
      id: 'ribbon-upcoming-business',
      variant: 'upcoming',
      icon: 'clock',
      label: 'Upcoming (Business Access)',
      countdown: { target: businessAccessTarget, mode: 'seconds' },
    }),
    { entryType: 'wallet', ...wallet({ id: 'xcp', code: 'XCP', name: 'Bitcoin', actions: ['Convert', 'Deposit'], iconColor: '#d63384' }) },
    { entryType: 'wallet', ...wallet({ id: 'fun-2', code: 'FUN', name: 'Bitcoin', iconColor: '#f2296d' }) },
    { entryType: 'wallet', ...wallet({ id: 'fil', code: 'FIL', name: 'Bitcoin', iconColor: '#0090ff' }) },
  ],
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    toggleHoldVisibility(state, action) {
      const entry = state.cryptoEntries.find((item) => item.id === action.payload)
      if (entry) entry.holdMasked = !entry.holdMasked
    },
    toggleStakedVisibility(state, action) {
      const entry = state.cryptoEntries.find((item) => item.id === action.payload)
      if (entry) entry.stakedMasked = !entry.stakedMasked
    },
  },
})

export const { toggleHoldVisibility, toggleStakedVisibility } = walletSlice.actions
export default walletSlice.reducer
