import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from './components/Dashboard';
import AddCarForm from './components/AddCarForm';
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()
 
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="login" 
              element={!user ? <Login /> : <Navigate to="/" />} />
            
         <Route path="signup" 
              element={!user ? <Signup /> : <Navigate to="/" />}  />
           
        <Route path ="dash"
              element={user?.role==="admin" && <Dashboard />}>
          <Route path="add" element={<AddCarForm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
