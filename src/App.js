import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ficha from './components/Ficha';
import React from 'react';
import MyContext from './components/contexts/myContext';
import List from './components/List';
function App() {
  var [nome, setNome] = React.useState('')
  var [jogador, setJogador] = React.useState('')
  var [dinheiro, setDinheiro] = React.useState(0)
  var [acertos, setAcertos] = React.useState(0)
  var [nivel, setNivel] = React.useState(0)
  var [pontos,setPontos] = React.useState(42)
  var [stat, setStat] = React.useState({
    atk: 1,
    def: 1,
    cor: 1,
    out: 1
  })
  var [classe, setClasse] = React.useState('')
  var [raça, setRaça] = React.useState('')
  var [hab, setHab] = React.useState('')
  var [equip, setEquip] = React.useState('')
  return (
    <BrowserRouter>
    <MyContext.Provider value={{nome, setNome,jogador,setJogador,dinheiro,setDinheiro,acertos,nivel,setNivel,setAcertos,pontos,setPontos,stat,setStat,classe,setClasse,raça,setRaça,hab,setHab,equip,setEquip}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ficha" element={<Ficha />} />
        <Route path="/List" element={<List />} />
        <Route path='*' element={<>Error 404</>}></Route>
      </Routes>
  </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App;
