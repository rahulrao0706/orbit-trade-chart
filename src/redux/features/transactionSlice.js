import { createSlice } from '@reduxjs/toolkit'

const tx = (overrides) => ({
  name: 'Bitcoin',
  amount: '0.8548 BTC',
  inrValue: '3,553.48 INR',
  date: 'Jun 20, 2026',
  time: '8:42 PM',
  remark: null,
  txId: '#1234567890',
  hasDisputeIcon: false,
  ...overrides,
})

const initialState = {
  activeTab: 'recent',
  hideSmallAmounts: false,
  recentTransactions: [
    tx({ id: 'tx-1', code: 'BTC', iconColor: '#f7931a', direction: 'in', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'success' }),
    tx({ id: 'tx-2', code: 'BCH', iconColor: '#2e8b57', direction: 'out', counterparty: { label: 'PTC (Surf ADs)', isLink: false }, status: 'pending', remark: '5 Pending Confirmatio...' }),
    tx({ id: 'tx-3', code: 'CRE', iconColor: '#2fb6a5', direction: 'in', counterparty: { label: 'Shortlinks', isLink: false }, status: 'rejected', remark: 'Request has been reje...' }),
    tx({ id: 'tx-4', code: 'CTX', iconColor: '#c9752f', direction: 'out', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'success' }),
    tx({ id: 'tx-5', code: 'AST', iconColor: '#2a6df4', direction: 'out', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'hold', remark: 'Transaction hold due...' }),
    tx({ id: 'tx-6', code: 'ARK', iconColor: '#e0463e', direction: 'in', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'success' }),
    tx({ id: 'tx-7', code: 'FTT', iconColor: '#0d9488', direction: 'in', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'rejected', remark: 'Request has been reje...', hasDisputeIcon: true }),
    tx({ id: 'tx-8', code: 'HOGE', iconColor: '#8a8a8a', direction: 'out', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'success' }),
    tx({ id: 'tx-9', code: 'CMT', iconColor: '#d4a017', direction: 'out', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'success' }),
    tx({ id: 'tx-10', code: 'DRG', iconColor: '#5b6b8c', direction: 'out', counterparty: { label: 'bellapher.xyz', isLink: true }, status: 'success' }),
  ],
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload
    },
    setHideSmallAmounts(state, action) {
      state.hideSmallAmounts = action.payload
    },
  },
})

export const { setActiveTab, setHideSmallAmounts } = transactionSlice.actions
export default transactionSlice.reducer
