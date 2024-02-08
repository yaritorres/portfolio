/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './styles/page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabMatrix from './components/TabMatrix';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mode, setMode] = useState('night');
  const [title, setTitle] = useState(`Yari's Portfolio!`);
  const lightModeStyles = {display: mode === 'light' ? 'block' : 'none'}
  const nightModeStyles = {display: mode === 'night' ? 'block' : 'none'}

  useEffect(() => {
    if (title) document.title = title
  }, [title])

  return (
    <main className={styles.main} style={{ backgroundColor: mode === 'light' ? '#EDF4ED' : '#485665' }}>
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
          width={45}
          height={45}
        />
      </div>
      <TabMatrix />
    </main>
  )
}
