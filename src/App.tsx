import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import FAQ from './pages/FAQ'
import Home from './pages/home'
import Admin from './pages/admin';
import Layout from './components/layout';
import Login from './pages/login';
import Register from './pages/register';
import ProtectedRoute from './components/protectedRoutes';
import Redirect from './components/redirect';

function App() {

  return (
    <div className="">
      <Router>
        <Layout>
          <Redirect />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
