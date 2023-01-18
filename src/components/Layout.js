import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <h1 className="annonce"><span className="signature"><Link to="/">loc</Link></span> pour louer des voitures</h1>
        <Link to="/signup">Créer un compte</Link>
        <Link to="/login">Se Connecter</Link>
      </header>
      <Outlet/>
    </>
  )
}

export default Layout