import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/About"
import Home from "./components/layout/Home"
import EcomctxProvider from "./store/EcomctxProvider"

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> }
])

function App() {

  return (
    <EcomctxProvider>
      <RouterProvider router={router} />
      {/* <Home />
      <About /> */}
    </EcomctxProvider>
  )
}

export default App
