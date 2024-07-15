import styled from 'styled-components'
import StartGame from './componeents/StartGame'
import { useState } from 'react'
import GamePlay from './componeents/GamePlay';

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev)=>!prev);
  }
  return <>
      {
        
      isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay} />
      }
  </>
  
}

export default App
