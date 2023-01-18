import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import DashLayout from './components/DashLayout';
import AddCarForm from './components/AddCarForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>

        <Route path ="dash" element={<DashLayout />}>
          <Route path="add" element={<AddCarForm />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
