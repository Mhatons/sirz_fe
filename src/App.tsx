import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/layout/footer'
import NavBar from './components/layout/nav'
import FAQ from './pages/FAQ'
import Home from './pages/home'

function App() {

  return (
    <div className="">
      <Router>
        <NavBar /> {/* Optional: will appear on all pages */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
