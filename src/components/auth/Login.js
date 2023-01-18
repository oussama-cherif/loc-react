import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Se Connecter</h3>
      
      <label>Identifiant:</label>
      <input 
        type="username" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      <label>Mot de passe:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Valider</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login