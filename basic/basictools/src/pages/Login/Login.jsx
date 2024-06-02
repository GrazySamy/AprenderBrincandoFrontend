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
        setError('')
        const user = {
            email,
            password
        }

        const res = await login(user)

        console.table(res)
        navigate('/')
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
                    <form onSubmit={handlerSubmit}>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=' Digite seu email' required />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=' Digite sua senha' required />
                        

                        {!loading && <input type="submit" value="Enviar" />}
                        {loading && <input type="submit" value="Enviar" disabled />}
                        {error && <p className='error'>{error}</p>}

                    </form>
                </div>
            </div>
        </>
    )
}
export default Login

