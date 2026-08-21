import { createContext, useContext, useState } from 'react'
import api from '../api/axios'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('cadence_user')
    return stored ? JSON.parse(stored) : null
  })
  const [authError, setAuthError] = useState('')

  function persist(u) {
    setUser(u)
    localStorage.setItem('cadence_user', JSON.stringify(u))
  }

  async function register({ username, email, password, role }) {
    setAuthError('')
    try {
      const { data } = await api.post('/auth/register', { username, email, password, role })
      persist(data.user)
      return true
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Registration failed')
      return false
    }
  }

  async function login({ identifier, password }) {
    setAuthError('')
    try {
      const isEmail = identifier.includes('@')
      const payload = isEmail ? { email: identifier, password } : { username: identifier, password }
      const { data } = await api.post('/auth/login', payload)
      persist(data.user)
      return true
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Invalid credentials')
      return false
    }
  }

  async function logout() {
    try {
      await api.post('/auth/logout')
    } catch {
      // ignore
    }
    setUser(null)
    localStorage.removeItem('cadence_user')
  }

  return (
    <AuthContext.Provider value={{ user, authError, login, register, logout, isArtist: user?.role === 'artist' }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}