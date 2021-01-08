import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { useRoutes } from './routes'

function App() {
  const checkAuth = useSelector((state) => state.auth.success)
  const routes = useRoutes(checkAuth)
  console.log(checkAuth)
  return (
    <div className="app">
      <Navbar />
      {routes}
    </div>
  )
}

export default App
