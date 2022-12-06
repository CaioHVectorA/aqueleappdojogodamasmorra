import React, { useContext } from 'react'
import Header from './Header'
import Pessoas from '../pessoas.svg'
import Add from '../criar.svg'
import { Link } from 'react-router-dom'
import MyContext from './contexts/myContext'

const Home = () => {
  const { setNome,setJogador,setDinheiro,setAcertos,setNivel,
    setPontos,setStat,setClasse,setRaça,setHab,setEquip } = useContext(MyContext)
    function ResetData() {
    localStorage.setItem('App_Mode','nonedit')
      setNome('')
      setJogador('')
      setClasse('')
      setRaça('')
      setHab('')
      setEquip('')
      setDinheiro(0)
      setAcertos(0)
      setNivel(0)
      setPontos(42)
      setStat({
        atk: 1,
        def: 1,
        cor: 1,
        out: 1
      })
    }
    const botao = {
        width: '120px',
        height: '120px',
        // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        border: '1px solid black',
        backgroundColor: '#d9d9d9',
        borderRadius: '25px',
        display: 'grid',
        placeItems: 'center'
    }
    let mt;
    if (window.innerHeight > 780) {
    let calc = (window.innerHeight / 100) * 2 + 76
    mt = calc.toString() + 'px'
    console.log(mt,calc)
    } else {mt = '0px'}
    console.log(mt)
  return (
    <div style={{backgroundColor: '#F30000',width: '100vw',height: '100vh'}}>
        <Header Nome='Aquele Jogo da Masmorra & Tal'/>
        <br />
        <div style={{width: '85vw',height: '88vw',backgroundColor: '#d9d9d9',margin: '0 auto',borderRadius: '25px',marginTop: mt}}></div>
        <div style={{width: '100%',display: 'flex',position: 'absolute',bottom: '4vh'}}>
        <Link to={'Ficha'} onClick={ResetData} className='backgroundzin' style={{borderRadius: '25px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)',textDecoration: 'none'}}>
            <div style={botao}><img src={Add} style={{width: '84px'}} /></div>
        <h1 style={{color:'white',fontFamily: 'Volkhov  '}}>Criar</h1>
        </Link>
        <Link to={'List'} className='backgroundzin' style={{borderRadius: '25px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)',textDecoration: 'none'}}>
        <div style={botao}><img src={Pessoas} style={{width: '84px'}} /></div>
        <h1 style={{color:'white',fontFamily: 'Volkhov '}}>Gerir</h1>
        </Link>
        </div>
    </div>
  )
}

export default Home