/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './styles/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TabMatrix from './components/TabMatrix';
import { useState } from 'react';

export default function Home() {
  const [mode, setMode] = useState('night');
  const lightModeStyles = {display: mode === 'light' ? 'block' : 'none'}
  const nightModeStyles = {display: mode === 'night' ? 'block' : 'none'}

  return (
    <main className={styles.main} style={{ backgroundColor: mode === 'light' ? '#EDF4ED' : '#485665' }}>
      {/* <Navbar /> */}
      <div className={styles.modeContainer}>
        <img
          onClick={() => { setMode('night') }}
          style={lightModeStyles}
          className={styles.lightMode}
          src='../light-mode.png'
          alt='light mode symbol'
          width={100}
          height={100}
        />
        <img
          onClick={() => { setMode('light') }}
          style={nightModeStyles}
          className={styles.nightMode}
          src='../night-mode.png'
          alt='night mode symbol'
          width={50}
          height={50}
        />
      </div>
      <TabMatrix />
    </main>
  )
}
