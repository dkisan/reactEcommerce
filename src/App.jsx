import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/layout/About"
import Home from "./components/layout/Home"
import EcomctxProvider from "./store/EcomctxProvider"
import Store from "./components/layout/Store"

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/store', element: <Store /> },
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
