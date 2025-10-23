import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Modulo1 from './pages/Modulo1.jsx'
import Modulo2 from './pages/Modulo2.jsx'
import Modulo3 from './pages/Modulo3.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
      <main className="app__main">
        <Routes>
          <Route path="/modulo1" element={<Modulo1 />} />
          <Route path="/modulo2" element={<Modulo2 />} />
          <Route path="/modulo3" element={<Modulo3 />} />
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
