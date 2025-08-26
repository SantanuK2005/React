
import './App.css'
import Login from './components/Login'
import UserContext from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
