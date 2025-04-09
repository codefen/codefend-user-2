
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Profile from './pages/userProfile';
import Orders from './pages/orders';
import Team from './pages/teamMembers';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
