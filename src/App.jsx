import './App.css'
import Header from './models/Header.jsx'
import Home from './models/Home.jsx'
import Footer from './models/Footer.jsx'
import Lessons from './models/Lessons'

function App() {

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Home />
        <Lessons />
      </main>
      <Footer />
    </div>
  )
}

export default App
