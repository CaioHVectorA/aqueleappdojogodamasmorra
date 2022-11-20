import React, {useContext} from 'react'
import App from '../App'
import MyContext from './contexts/myContext'
import Header from './Header'
import { Navigate, useNavigate } from "react-router-dom";
const List = () => {

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
      AllDataClean.push(JSON.parse(data))
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
  return (
    <div style={{paddingBottom: '140px'}}>
    <Header Nome='Seus Personagens'/>
    <div style={{display: 'grid',placeItems: 'center',gap: '72px'}}>
      {AllDataClean.map((data,index) => <div key={data[0]}>
        <div style={{background: '#e7e7e7',display: 'grid',gap: '16px',placeItems: 'center',padding: '15px 25px',width: '265px',height: '200px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25)',borderRadius: '25px'}}>
          <h2 style={{fontSize: '44px'}}>{data[0]}</h2>
          <h2 style={{fontFamily: 'Volkhov'}}>{data[1]}</h2>
          <button onClick={() => {TransportData(data,index)}} style={{backgroundColor: '#66cc23',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '32px'}}>Editar</button>
        </div>
      </div>)}
    </div>
    </div>
  )
}

export default List