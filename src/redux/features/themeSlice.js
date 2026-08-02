import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
  sidebarCollapsed: false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    setSidebarCollapsed(state, action) {
      state.sidebarCollapsed = action.payload
    },
  },
})

export const { toggleSidebar, setSidebarCollapsed } = themeSlice.actions
export default themeSlice.reducer
