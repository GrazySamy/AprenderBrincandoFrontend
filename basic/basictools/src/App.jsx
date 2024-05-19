import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import Portugues from './pages/EnsinoFundamental/Portugues/Portugues'
import Matematica from './pages/EnsinoFundamental/Matematica/Matematica'
import Ciencias from './pages/EnsinoFundamental/Ciencias/Ciencias'
import Coordenacao from './pages/EnsinoInfantil/Coordenacao/Coordenacao'
import Alfabetizacao from './pages/EnsinoInfantil/Alfabetizacao/Alfabetizacao'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'
import Login from './pages/Login/Login'
import Mural from './pages/Mural/Mural'

function App() {

  return (
<>
  <BrowserRouter>
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portugues' element={<Portugues />}></Route>
        <Route path='/matematica' element={<Matematica />}></Route>
        <Route path='/ciencias' element={<Ciencias />}></Route>
        <Route path='/coordenacao' element={<Coordenacao />}></Route>
        <Route path='/alfabetizacao' element={<Alfabetizacao />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/mural' element={<Mural />}></Route>
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
</>
  )
}

export default App

