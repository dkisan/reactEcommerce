import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import About from "./components/layout/About"
import Home from "./components/layout/Home"
import EcomctxProvider from "./store/EcomctxProvider"
import Store from "./components/layout/Store"
import Contactus from "./components/layout/Contactus"

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/store', element: <Store /> },
//   { path: '/about', element: <About /> },
//   { path: '/contactus', element: <Contactus /> }
// ])

function App() {

  return (
    <EcomctxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      {/* <Home />
      <About /> */}
    </EcomctxProvider>
  )
}

export default App
