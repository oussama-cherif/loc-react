import {Outlet, useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Layout = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
  }

  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Loc</h1>
          </Link>
          <nav>
            {user && (
              <div>
                <span>{user.username}</span>
                <button onClick={handleClick}>Se Déconnecter</button>
              </div>
            )}
            {user?.role==="admin" && (
              <div>
                <button className="admin-button" onClick={()=>navigate('/dash')}>Dashboard</button>
              </div>
            )}
            {!user && (
              <div>
                <Link to="/login">Se Connecter</Link>
                <Link to="/signup">Créer un Compte</Link>
              </div>
            )}
          </nav>
        </div>
      </header>
      <Outlet/>

    </>
  )
}

export default Layout