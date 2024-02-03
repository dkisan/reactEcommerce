// import './App.css'

import Home from "./components/layout/Home"
import EcomctxProvider from "./store/EcomctxProvider"

function App() {

  return (
    <EcomctxProvider>
      <Home />
    </EcomctxProvider>
  )
}

export default App
