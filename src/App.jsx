import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedAuth from './components/auth/ProtectedAuth'
import PokemonId from './pages/PokemonId'


function App() {

  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route element={<ProtectedAuth/>}>

      <Route path='/pokedex' element={<Pokedex/>} />

      <Route path='/pokedex/:id' element={<PokemonId/>} />
      
      </Route>
    </Routes>
     
    </>
  )
}

export default App
