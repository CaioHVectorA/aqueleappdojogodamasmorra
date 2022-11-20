import React, { useContext } from 'react'
import Detail from './Detail'
import Header from './Header'
import data from './Back.json' 
import MyContext from './contexts/myContext'
import { Navigate, useNavigate } from "react-router-dom";
const Form = (props) => {
    const inputStyle = {
        border: 'none',
        backgroundColor: 'inherit',
        borderBottom: '1px solid #202020',
        position: 'absolute',
        left: '84px',
        maxWidth: '180px',
        fontSize: '16px',
    }
     const {nome,setNome} = useContext(MyContext)
    return (
        <div style={{position: 'relative',bottom: props.marginTop}}>

        <form style={{height: '56px'}}>
        <label form='' style={{fontWeight: 'bold',marginRight: '1vw',position: 'absolute',left: '-60px'}}>
            Nome:
        <input style={inputStyle} id={props.tipo} value={nome} onChange={(e) => {setNome(e.target.value)}}></input>
        </label>
        </form>
        </div>
    )
}

const FormJog = (props) => {
    const inputStyle = {
        border: 'none',
        backgroundColor: 'inherit',
        borderBottom: '1px solid #202020',
        position: 'absolute',
        left: '84px',
        maxWidth: '180px',
        fontSize: '16px',
    }
    const {jogador,setJogador} = useContext(MyContext)
    return (
        <div style={{position: 'relative',bottom: props.marginTop}}>
        <form style={{height: '56px'}}>
        <label form='' style={{fontWeight: 'bold',marginRight: '1vw',position: 'absolute',left: '-60px'}}>
            Jogador:
        <input style={inputStyle} id={jogador} value={jogador} onChange={(e) => {setJogador(e.target.value)}}></input>
        </label>
        </form>
        </div>
    )
}

const FormNum = (props) => {
    const inputStyleNum = {
        border: '1px solid rgba(0,0,0,0.52)',
        backgroundColor: 'inherit',
        width: '56px',
        height: '32px',
        position: 'absolute',
        left: '104px',
        bottom: '-8px',
        padding: '0px',
        textAlign: 'center',
        fontFamily: 'Arial,sans-serif',
        borderRadius: '6px'
    }
    const {dinheiro,setDinheiro,acertos,setAcertos} = useContext(MyContext)
    function Formulario(e) {
    if (props.tipo === 'Dinheiro:') {
    setDinheiro(Number(e.target.value))
    } else if (props.tipo === 'Acertos:') {
        setAcertos(Number(e.target.value))
    }
    console.log(dinheiro,acertos)
}
    // colocar pra mudar cada propriedade dependendo de qual formNum tá selecionado...Ver no Origamid
    return (
        <div style={{position: 'relative',bottom: props.marginTop,marginBottom: '-64px'}}>
        <form style={{height: '56px'}}>
        <label form='' style={{fontWeight: 'normal',fontSize:'20px',marginRight: '1vw',position: 'absolute',left: '-60px'}}>
            {props.tipo}
        <input style={inputStyleNum} id='Nome' type='number' value={props.tipo === 'Dinheiro:' ? dinheiro : acertos} onChange={Formulario}></input>
        </label>

        </form>
        </div>
    )
}

const Bola = (props) => {
    
    // var Style = {
    //     borderRadius: '50%',
    //     border: '1px solid rgba(0,0,0,0.2)',
    //     background: bg,
    //     width: '36px',
    //     height: '36px'
    // }
    console.log(props.pintar == true)
    const {nivel,setNivel} = useContext(MyContext)
    const [bg,SetBg] = React.useState(!props.pintar)
    function handleClick() {
        if (bg) {
            setNivel(nivel => nivel += 1)
        } else {setNivel(nivel => nivel -= 1)}
        SetBg(bg => !bg)
    } 
    // if (props.pintar) {
    //     if (bg) {
    //         setNivel(nivel => nivel += 1)
    //     } else {setNivel(nivel => nivel -= 1)}
    //     SetBg(bg => !bg)
    // } 
    // }
    const Style = {
        borderRadius: '50%',
         border: '1px solid rgba(0,0,0,0.2)',
         background: bg ? '#D9D9D9' : '#E31717',
         width: '36px',
         height: '36px'
    }

    return (
        <div style={Style} className='lvlBall' onClick={handleClick}></div>
    )
}

const Mais = () => {
    return (
        <div style={{position:'relative',bottom: '20px'}}>
            <div style={{right: '16px',width: '7px',height: '40px',background: '#000',borderRadius: '25px',position: 'absolute'}}></div>
            <div style={{right: '16px',width: '7px',height: '40px',background: '#000',borderRadius: '25px',position: 'absolute',transform: 'rotate(90deg)'}}></div>
        </div>
    )
}

const Distribuidor = (props) => {
    const {stat,setStat,pontos,setPontos} = useContext(MyContext)
    let tipo;
    let statUsado;
    if (props.tipo === 'ATA') {statUsado = stat.atk} else if (props.tipo === 'DEF') {statUsado = stat.def} else if (props.tipo === 'COR') {statUsado = stat.cor} else if (props.tipo === 'OUT') {statUsado = stat.out}
    function distribuir(value) {
        if (props.tipo === 'ATA') {
            if (value == 1 && stat.atk < 16 && pontos > 0 || value == -1 && stat.atk > 1) {
            setStat({
                atk: stat.atk += value,
                def: stat.def,
                cor: stat.cor,
                out: stat.out
            })
        setPontos(pontos => pontos -= value)
        }
        } else if (props.tipo === 'DEF') {
            if (value == 1 && stat.def < 16 && pontos > 0 || value == -1 && stat.def > 1) {
            setStat({
                atk: stat.atk,
                def: stat.def += value,
                cor: stat.cor,
                out: stat.out
            })
        setPontos(pontos => pontos -= value)
        }
        } else if (props.tipo === 'COR') {
            if (value == 1 && stat.cor < 16 && pontos > 0 || value == -1 && stat.cor > 1) {
            setStat({
                atk: stat.atk,
                def: stat.def,
                cor: stat.cor += value,
                out: stat.out
            })
        setPontos(pontos => pontos -= value)
        }

        } else if (props.tipo === 'OUT') {
            if (value == 1 && stat.out < 16 && pontos > 0 || value == -1 && stat.out > 1) { 
            setStat({
                atk: stat.atk,
                def: stat.def,
                cor: stat.cor,
                out: stat.out += value 
            })
        setPontos(pontos => pontos -= value)
        }
        }
    if (props.tipo === 'ATA') {statUsado = stat.atk} else if (props.tipo === 'DEF') {statUsado = stat.def} else if (props.tipo === 'COR') {statUsado = stat.cor} else if (props.tipo === 'OUT') {statUsado = stat.out}
    }
    return (
        <div className='distribuidor' style={{borderRadius: '25px 15px',padding: '10px',backgroundColor:'rgba(251, 4, 4, 0.61)',margin: '0 auto',display: 'flex',justifyContent: 'center',paddingRight: '40px',width: '300px',alignItems: 'center',gap: '24px',border: '1px solid rgba(0, 0, 0, 0.23)',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <h1 style={{fontFamily: 'Volkhov',fontSize: '32px',position: 'relative',right: '0px'}}>{props.tipo}</h1>
            <h1 style={{fontFamily: 'Volkhov',fontSize: '32px',position: 'relative',right: '40px'}}>{statUsado}</h1>
            <div style={{padding: '10px 10px'}} onClick={() => {distribuir(1)}}><Mais /></div>
            <div onClick={() => {distribuir(-1)}} style={{width: '40px',height: '7px',background: '#000',borderRadius: '25px'}}></div>
        </div>
    )
}

const TextoArea = (props) => {
    const {raça,setRaça,classe,setClasse,equip,setEquip,hab,setHab} = useContext(MyContext)
    function HandleChange({ target }) {
      if (props.nome === 'Classe') {
        setClasse(target.value)
      }  else if (props.nome === 'Raça') {
        setRaça(target.value)
      } else if (props.nome === 'Habilidades Sobrenaturais') {
        setHab(target.value)
      } else if (props.nome === 'Equipamentos & Itens Mágicos') {
        setEquip(target.value)
      }
    }
    return (
        <div className='blocotexto' style={{background: '#d9d9d9',padding: '10px',minHeight: '200px',width: '300px',borderRadius:'25px 5px 25px 15px'}}>
        <h1>{props.nome}</h1>
        <div style={{width: 'inherit',display:'grid',placeItems: 'center',height: 'inherit'}}>
        <textarea onChange={HandleChange} value={props.nome === 'Classe' ? classe : props.nome === 'Raça' ? raça : props.nome === 'Habilidades Sobrenaturais' ? hab : props.nome === 'Equipamentos & Itens Mágicos' ? equip : 'Erro'} className={`textoArea ${props.nome}`} placeholder={props.info} style={{border: 'none',padding: '10px 15px',fontSize:'18px',fontFamily: 'Arial,sans-serif',width: '80%',height: '115px',marginTop: '16px'}}></textarea>

        </div>
        </div>
    )
}

const Ficha = () => {  
    var nav = useNavigate()
    function getLocalStorage() {
        if (!localStorage.app_data) {
            return 'app_data'
        } else if (!localStorage.app_data2) {
            return 'app_data2'
        } else if (!localStorage.app_data3) {
            return 'app_data3'
        } else if (!localStorage.app_data4) {
            return 'app_data4'
        } if (!localStorage.app_data5) {
            return 'app_data5'
        } else if (!localStorage.app_data6) {
            return 'app_data6'
        } else if (!localStorage.app_data7) {
            return 'app_data7'
        } else if (!localStorage.app_data8) {
            return 'app_data8'
        } else if (!localStorage.app_data9) {
            return 'app_data9'
        } else if (!localStorage.app_data10) {
            return 'app_data10'
        } 
        
    }
    const {nome,setNome,jogador,pontos,setPontos,setJogador,dinheiro,setDinheiro,acertos,SetAcertos,nivel,setNivel,
        stat,setStat,classe,setClasse,raça,setRaça,hab,setHab,equip,setEquip} = useContext(MyContext) 
    function handleClick() {
      var dataFull = [];  
        dataFull.push(nome,jogador,dinheiro,pontos,acertos,nivel,stat,classe,raça,hab,equip)
       let dataStringada = JSON.stringify(dataFull)
       if (localStorage.App_Mode != 'edit') {
       localStorage.setItem(getLocalStorage(),dataStringada)
       } else {
        if (localStorage.App_Index == 0) {
            console.log(dataStringada,nivel)
            localStorage.setItem('app_data',dataStringada)
        }
        if (localStorage.App_Index == 1) {
            localStorage.setItem('app_data2',dataStringada)
        }
        if (localStorage.App_Index == 2) {
            localStorage.setItem('app_data3',dataStringada)
        }
        if (localStorage.App_Index == 3) {
            localStorage.setItem('app_data4',dataStringada)
        }
        if (localStorage.App_Index == 4) {
            localStorage.setItem('app_data5',dataStringada)
        }
        if (localStorage.App_Index == 5) {
            localStorage.setItem('app_data6',dataStringada)
        }
        if (localStorage.App_Index == 6) {
            localStorage.setItem('app_data7',dataStringada)
        }
        if (localStorage.App_Index == 7) {
            localStorage.setItem('app_data8',dataStringada)
        }
        if (localStorage.App_Index == 8) {
            localStorage.setItem('app_data9',dataStringada)
        }
        if (localStorage.App_Index == 9) {
            localStorage.setItem('app_data10',dataStringada)
        }
       }
       nav(-1)
    }
    console.log(nivel)
    let bolinha1 = false
    let bolinha2 = false
    let bolinha3 = false
    let bolinha4 = false
    let bolinha5 = false
    if (nivel == 1) {
        bolinha1 = true
    } else if (nivel == 2) {
        bolinha1 = true
        bolinha2 = true
        console.log('a')
    } else if (nivel == 3) {
        bolinha1 = true
        bolinha2 = true
        bolinha3 = true
    }  else if (nivel == 4) {
        bolinha1 = true
        bolinha2 = true
        bolinha3 = true
        bolinha4 = true
    }
    else if (nivel == 5) {
        bolinha1 = true
        bolinha2 = true
        bolinha3 = true
        bolinha4 = true
        bolinha5 = true
    }
  return (
    <div style={{display:'grid',placeItems: 'center',paddingBottom: '160px'}}>
        <Header Nome='Ficha' />
                {/* Quadro aqui */}
                <div className='Quadro' style={{width: '300px',height: '300px',backgroundColor: '#d9d9d9',borderRadius: '15px',border: '1px solid rgba(0, 0, 0, 0.3)'}}></div>
                {/* Não sei ao certo se caso eu adicionar um p dentro do da div como uma instrução mudaria o script,qualquer coisa eu adiciona em próximas build */}
                
                <div style={{width: 'calc(80% - 40px)',height: '320px',background: '#EEE',marginTop: '32px',borderRadius: '25px',boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)',display: 'grid',justifyContent: 'center',padding: '10px 20px'}}>
                    <Form tipo='Nome:' marginTop='0px'/>
                    <FormJog marginTop='36px'/>
                    <div style={{display: 'flex',gap: '56px',flexDirection:'column'}}>
                    <FormNum tipo='Dinheiro:' marginTop='60px'/>
                    <FormNum tipo='Acertos:' marginTop='60px'/>
                    </div>
                    <h2 style={{fontFamily: 'Volkhov'}}>Nível</h2>
                    <div style={{display: 'flex',gap:'24px'}}>
                        <Bola pintar={bolinha1} />
                        <Bola pintar={bolinha2} />
                        <Bola pintar={bolinha3} />
                        </div>
                        <div style={{display: 'flex',gap:'24px',position: 'relative',left: '27px'}}>
                        <Bola pintar={bolinha4} />
                        <Bola pintar={bolinha5} />
                    </div>
                </div>
                <br />
                <section style={{width: '100%',background: '#F6F6F6',borderTop: '1px solid rgba(0, 0, 0, 0.18)'}}>
                    <br />
                    <h1 style={{fontFamily: 'CAT',fontSize:'40px'}}>Distribua seus Pontos!</h1>
                    <h2 style={{fontFamily: 'Volkhov',marginBottom: '-6px'}}>Você possui {pontos} pontos</h2>
                    <Detail /> 
                    <div style={{display: 'grid',gap: '17px'}}>    
                    <Distribuidor tipo='ATA' />
                    <Distribuidor tipo='DEF' />
                    <Distribuidor tipo='COR' />
                    <Distribuidor tipo='OUT' />
                    </div>
                    <Detail />
                </section>
                <h1 style={{fontSize: '48px',marginBottom: '20px'}}>Características</h1>
                <div style={{display: 'grid',gap: '30px'}}>
                <TextoArea nome='Classe' info='Mago de fogo,Guerreiro Implacável,Assasino de dragões...'/>
                <TextoArea nome='Raça' info='Elfo anão,Reptiliano voador...'/>
                <TextoArea nome='Habilidades Sobrenaturais' info='Controlar metais,Derreter coisas...'/>
                <TextoArea nome='Equipamentos & Itens Mágicos' info='Espada de aço,Livro da alquimia...'/>
                </div>
                <br />
                <button onClick={handleClick} style={{backgroundColor: '#66cc23',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '32px'}}>Salvar</button>
    </div>
    // Propriedades  necessárias:ID desenho,Nome,jogador,dinheiro,acertos,nível,pts{atk,def,cor,out} stringslongas{classe,raça,hab sobrenatural,equip e itens}
    //Tudo vai ser basicamente transformado em objeto que vai ser armazenado no localStorage a partir do stringify,
    //E depois retransformado em objeto pra ser interpretado em outras horas
  )
}

export default Ficha