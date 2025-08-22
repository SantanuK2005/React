import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [count, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swapCurrencies = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =() => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1 className='text-2xl font-bold bg-red-500'>Currency Converter App</h1>
    </>
  )
}

export default App
