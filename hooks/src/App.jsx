import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseMemoHook from './pages/UseMemoHook'
import UseRefHook from './pages/UseRefHook'
import UseReducerHook from './pages/UseReducerHook'

function App() {

  return (
    <>
      {/* <UseMemoHook/> */}
      {/* <UseRefHook/> */}
      <UseReducerHook/>
    </>
  )
}

export default App
