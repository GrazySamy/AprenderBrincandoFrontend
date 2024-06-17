import './scss/style.scss'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthentication } from './hooks/userAuthentication'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Portugues from './pages/EnsinoFundamental/Portugues/Portugues'
import Matematica from './pages/EnsinoFundamental/Matematica/Matematica'
import Ciencias from './pages/EnsinoFundamental/Ciencias/Ciencias'
import Coordenacao from './pages/EnsinoInfantil/Coordenacao/Coordenacao'
import Alfabetizacao from './pages/EnsinoInfantil/Alfabetizacao/Alfabetizacao'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'
import Login from './pages/Login/Login'
import Mural from './pages/Mural/Mural'
import Dashboard from './pages/Dashboard/Dashboard'
import loading from './assets/img/Loading.gif'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [auth])
  if (loadingUser) {
    return <div className="container load"><img src={loading} alt="GIf com simbolo de carregando" widht="120px" height="120px" /></div>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
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
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

