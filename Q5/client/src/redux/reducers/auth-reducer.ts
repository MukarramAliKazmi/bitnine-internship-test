import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuthenticated: boolean
  user: {
    id: string
    firstname: string
    lastname: string
    email: string
  } | null
  accessToken: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        user: { id: string; firstname: string; lastname: string; email: string }
        accessToken: string
      }>,
    ) {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
      state.accessToken = null
    },
    refreshToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    },
  },
})

export const { login, logout, refreshToken } = authSlice.actions
export default authSlice.reducer
