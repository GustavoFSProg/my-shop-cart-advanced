// import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCartProvider >
    <Navbar />
     <Container className="mb-4">

      <Routes >
        <Route path="/"  element={<Home />}/>
        <Route path="/store"  element={<Store />}/>
        <Route path="/about"  element={<About />}/>
      </Routes> 
     </Container>
      </ShoppingCartProvider>
    </>
  )
}

export default App
