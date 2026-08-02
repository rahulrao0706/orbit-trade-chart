import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'User',
  btcQuickBalance: '0.0021780',
  language: 'EN',
  stats: {
    winRate: '1.7%',
    messages: 156,
    energy: '6:17',
    shield: 98,
    lastWin: '1200 DOGE',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
