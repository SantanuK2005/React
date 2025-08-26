
import './App.css'
import UserContext from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      
    </UserContextProvider>
  )
}

export default App
