import '../styles/global.css'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import React from 'react'

function MyApp({ Component, pageProps }) {


  return (
    
      
        <Component {...pageProps} />
      
    
  )
}

export default MyApp
