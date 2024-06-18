import React, { useState } from 'react';
import styles from './register.module.css';  // Import as module for CSS modules
import { userAuthentication } from '../../hooks/userAuthentication';

const Register = () => {
  const { createUser, error: authError, loading } = userAuthentication();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmedPassword) {
      setError('As senhas precisam ser iguais');
      return;
    }

    const user = {
      displayName,
      email,
      password,
    };

    try {
      await createUser(user);
      console.log('User registered successfully');
    } catch (err) {
      setError(authError || 'Ocorreu um erro, tente novamente mais tarde');
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.registerTitle}>Compartilhe seus aprendizados</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label className={styles.registerLabel}>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Entre com o seu nome"
            className={styles.registerInput}
          />
        </label>
        <label className={styles.registerLabel}>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entre com o seu email"
            className={styles.registerInput}
          />
        </label>
        <label className={styles.registerLabel}>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entre com a sua senha"
            className={styles.registerInput}
          />
        </label>
        <label className={styles.registerLabel}>
          <span>Confirmação:</span>
          <input
            type="password"
            name="ConfirmedPassword"
            required
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            placeholder="Entre com a sua senha"
            className={styles.registerInput}
          />
        </label>
        <button className={styles.btn} type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Register'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
