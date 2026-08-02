import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './features/dashboardSlice'
import walletReducer from './features/walletSlice'
import userReducer from './features/userSlice'
import notificationReducer from './features/notificationSlice'
import themeReducer from './features/themeSlice'
import transactionReducer from './features/transactionSlice'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    wallet: walletReducer,
    user: userReducer,
    notification: notificationReducer,
    theme: themeReducer,
    transaction: transactionReducer,
  },
})
