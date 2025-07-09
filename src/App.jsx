import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import TodoApp from './components/TodoApp'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><NavBar/>
      Hi<TodoApp/><Footer/>
      </div>
)
}

export default App
