import React, {useContext} from 'react'
import App from '../App'
import MyContext from './contexts/myContext'
import Header from './Header'
import { Navigate, useNavigate } from "react-router-dom";
import lixeira from '../delete.svg'
import D20 from '../d20.png'
const List = () => {
  var [tempIndex,setIndex] = React.useState(0)

  var AllData = []
    let app_data = localStorage.app_data
    let app_data2 = localStorage.app_data2
    let app_data3 = localStorage.app_data3
    let app_data4 = localStorage.app_data4
    let app_data5 = localStorage.app_data5
    let app_data6 = localStorage.app_data6
    let app_data7 = localStorage.app_data7
    let app_data8 = localStorage.app_data8
    let app_data9 = localStorage.app_data9
    let app_data10 = localStorage.app_data10
  AllData.push(app_data,app_data2,app_data3,app_data4,app_data5,app_data6,app_data7,app_data8,app_data9,app_data10)
  var AllDataClean = []
  AllData.forEach(data => {
    if (data != undefined) {
      const dataclean = JSON.parse(data)
      AllDataClean.push(dataclean)
      console.log(AllDataClean)  
      // console.log(tempIndex,tempIndex)  
      // setTempIndex(tempIndex => tempIndex += 1)
    }
  });

  const {nome,setNome,jogador,pontos,setPontos,setJogador,dinheiro,setDinheiro,acertos,setAcertos,nivel,setNivel,
    stat,setStat,classe,setClasse,raça,setRaça,hab,setHab,equip,setEquip} = useContext(MyContext) 
    // na ordem: nome,jogador,dinheiro,pontos,acertos,nivel,stat,classe,raça,hab,equip  
    const nav = useNavigate()
 function TransportData(dados,index) {
    setNome(dados[0])
    setJogador(dados[1])
    setDinheiro(dados[2])
    setPontos(dados[3])
    setAcertos(dados[4])
    setNivel(dados[5])
    setStat(dados[6])
    setClasse(dados[7])
    setRaça(dados[8])
    setHab(dados[9])
    setEquip(dados[10])
    localStorage.setItem('App_Mode','edit')
    localStorage.setItem('App_Index',index)
    nav('/Ficha')
  }

  function Delete() {
      if (tempIndex != 0) {
        const localkey = tempIndex
        console.log(localkey)
        localStorage.removeItem(localkey)
      } else {
        localStorage.removeItem('app_data') 
      }
      window.location.reload(false)
      // setTempIndex(null)
  }
  function Jogardado20() {
    return Math.round(Math.random() * 20)
  }


  const [aviso,setAviso] = React.useState(false)
  const [dado,setDado] = React.useState(0)
  const [displaydado,setdisplayDado] = React.useState(false)
  function funcdado() {
    setDado(Jogardado20)
    setdisplayDado(true)
  }
  return (
    <div style={{paddingBottom: '140px'}}>
      {displaydado &&
      <div style={{position: 'fixed',left: '0px',top: '0px',width: '100vw',height: '100vh',backgroundColor: 'rgba(0,0,0,0.46)'}}>
      <div style={{position: 'fixed',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: '80%',display:'grid',placeItems: 'center',backgroundColor: 'rgb(240,240,240)',padding: '16px 20px',borderRadius: '25px',border: '3.3px solid #d9d9d9'}}>
       {dado >= 10 && <h2 style={{fontFamily: 'Volkhov'}}>Que sorte!</h2>}
       {dado < 10 && <h2 style={{fontFamily: 'Volkhov'}}>Que pena!</h2>}
       <h2 style={{fontFamily: 'Volkhov'}}>Seu dado caiu em <span style={{color:'#EE2222'}}>{dado}</span>!</h2>
        <button onClick={funcdado} style={{backgroundColor: '#66cc23',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '23px',marginTop: '16px'}}>Rolar novamente</button>
        <button onClick={() => {setdisplayDado(false)}} style={{backgroundColor: '#FF4444',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '23px',marginTop: '16px'}}>Fechar</button>
        </div>
      </div>
      }
      {aviso &&
      <div style={{position: 'fixed',left: '0px',top: '0px',width: '100vw',height: '100vh',backgroundColor: 'rgba(0,0,0,0.46)'}}>
      <div style={{position: 'fixed',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: '80%',display:'grid',placeItems: 'center',backgroundColor: 'rgb(240,240,240)',padding: '16px 20px',borderRadius: '25px',border: '3.3px solid #d9d9d9'}}>
      <h4 style={{fontSize: '20px',textAlign: 'center',fontWeight: 'normal'}}>Você deseja deletar seu personagem?</h4><span style={{fontWeight: 'bold',color: '#510000'}}>Essa ação será irreversível!</span> 
      <div style={{display:'flex',gap: '18px',marginTop: '12px'}}>
      <button onClick={() => {Delete(tempIndex)}} style={{backgroundColor: '#FF4444',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '23px'}}>Deletar</button>
      <button onClick={() => {setAviso(false); document.body.style.overflow = 'auto'}} style={{backgroundColor: '#66cc23',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '23px'}}>Cancelar</button>
      </div>
      </div>
      </div>}
    <Header Nome='Seus Personagens'/>
    <div style={{display: 'grid',placeItems: 'center',gap: '72px'}}>
      {AllDataClean.map((data,index) => <div key={data[0]}>
        <div style={{background: '#e7e7e7',display: 'grid',gap: '16px',placeItems: 'center',padding: '20px 25px 40px 25px',width: '265px',height: '200px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25)',borderRadius: '25px'}}>
          <h2 style={{fontSize: '44px'}}>{data[0]}</h2>
          <h2 style={{fontFamily: 'Volkhov'}}>{data[1]}</h2>
          <button onClick={() => {TransportData(data,index)}} style={{backgroundColor: '#66cc23',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '32px'}}>Editar</button>
          <div onClick={() => {setAviso(true) ; document.body.style.overflow = 'hidden' ; setIndex(data[11])}} style={{background: '#fff',borderRadius: '50%',padding: '9px'}}><img src={lixeira} /></div>
        </div>
      </div>)}
        <div onClick={funcdado} style={{background: '#e7e7e7',border: '3.3px solid #d9d9d9',borderRadius: '25px',padding: '8px 18px',display: 'flex',gap: '24px'}}><h1 style={{fontSize: '42px'}}>Rolar dado</h1><img src={D20} style={{width: '64px',height: '64px'}}/></div>
    </div>
    </div>
  )
}

export default List