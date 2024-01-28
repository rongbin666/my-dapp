import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LCDClient, Coins, Numeric } from '@glitterprotocol/glitter-sdk';

function App() {
  const [count, setCount] = useState(0)
  const XIAN_HOST = "https://api.xian.glitter.link"
  //const LOCAL_HOST = "http://127.0.0.1:41317"
  const CHAIN_ID = "glitter_12000-2"

  const client = new LCDClient({
    URL: XIAN_HOST,
    chainID: CHAIN_ID,
    gasPrices: Coins.fromString('0.15agli'),
    gasAdjustment: Numeric.parse(1.5),
  })
  console.log("🚀 ~ file: App.jsx:19 ~ App ~ client:", client)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
