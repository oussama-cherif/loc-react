import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [numPermis, setNumPermis] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(username, password,numPermis)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Créer un Compte</h3>
      
      <label>Identifiant:</label>
      <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)} 
        value={username} 
      />
      <label>Numéro de Permis:</label>
      <input 
        type="text" 
        onChange={(e) => setNumPermis(e.target.value)} 
        value={numPermis} 
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

export default Signup