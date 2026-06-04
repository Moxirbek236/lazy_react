import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (login(username, password)) {
      navigate('/dashboard', { replace: true })
    } else {
      setError('Invalid credentials. Use admin / 12345')
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 24 }}>
      <h1>Login</h1>
      <p style={{ marginBottom: 16, color: '#666' }}>
        Default: <strong>admin</strong> / <strong>12345</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Username</label><br />
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="admin"
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="12345"
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '8px 24px' }}>
          Sign In
        </button>
      </form>
    </div>
  )
}