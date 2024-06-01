import React from 'react'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from 'react-router-dom'
import FaixaTitulo from '../../components/FaixaTitulo/FaixaTitulo'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login, error: authError, loading } = userAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async (e) => {
        e.prenventDefault()
        setError('')
        const user = {
            email,
            password
        }
        const res = await login(user)

        console.table(res)
        navigate('/post/create')
    }
    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])
    return (
<>
      <FaixaTitulo colorClass="faixa-login" titulo="" subtitulo="Login" />

      <div class="row mt-5">
                <div class="col-4"></div>
                <div class="col-4">
                    <form>
                        <input type="text" placeholder=' Digite seu nome' required />
                        <input type="email" placeholder=' Digite seu email' required />
                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
            </>
    )
}
export default Login

