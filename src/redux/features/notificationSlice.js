import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unreadCount: 99,
  items: [],
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setUnreadCount(state, action) {
      state.unreadCount = action.payload
    },
  },
})

export const { setUnreadCount } = notificationSlice.actions
export default notificationSlice.reducer
