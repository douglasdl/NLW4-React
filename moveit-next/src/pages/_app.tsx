import { AppProps } from 'next/app'

import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import React, { useContext, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}