import React, { useContext } from 'react';
import { LightningIcon } from '../assets/icons';
import type { NextPage } from 'next';
import styles from '../styles/Login.module.css';
import { AuthContext } from '../context/AuthContext';
import QR from '../components/QR';

const Login: NextPage = () => {
  const { handleLoginWithLN, lnData } = useContext(AuthContext);
  return (
    <section className={styles.container}>
      {lnData.encoded ? (
        <QR />
      ) : (
        <aside className={styles.content}>
          <h3 className={styles.copy}>Login to view your dashboard 👍🏾</h3>
          <button
            onClick={handleLoginWithLN}
            className={`${styles.btn} ${styles.btn_primary}`}
          >
            <LightningIcon fill="#fff" className={styles.ln_icon} /> Login via
            Lightning
          </button>
          <p>or</p>
          <form>
            <label className={styles.input_label} htmlFor="emailInput">
              Email
            </label>
            <input
              id="emailInput"
              className={styles.input}
              type="email"
              placeholder="email@example.com"
            />
            <label className={styles.input_label} htmlFor="pwdInput">
              Password
            </label>
            <input
              id="pwdInput"
              aria-label="pwd"
              className={styles.input}
              type="password"
            />
            <button
              disabled={true}
              id="submit"
              className={`${styles.btn} ${styles.btn_primary}`}
            >
              Login via Email
            </button>
          </form>
        </aside>
      )}
    </section>
  );
};

export default Login;
