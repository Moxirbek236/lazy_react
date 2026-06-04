import { useAuth } from '../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Dashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>
        <button onClick={handleLogout} style={{ padding: '8px 24px' }}>
          Logout
        </button>
      </div>
      <p>Welcome! You are authenticated.</p>
      <p>
        <Link to="/gallery">Go to Gallery (100 lazy images)</Link>
      </p>
    </div>
  )
}