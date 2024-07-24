import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import { ProtectedRoutes } from './components/ProtectedRoutes'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: "404 Not Founde"
  },
  {
    path: "/profile",
    element:<ProtectedRoutes/>,
    children:[
      {
        path:"/profile",
        element:<ProfilePage/>
      }
    ]
  }
])
function App() {

  return (
    <>
      {/* <div style={{ width: "100%", height: "10vh", background: "red" }}>
        <h1>NavBar</h1>
      </div> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
