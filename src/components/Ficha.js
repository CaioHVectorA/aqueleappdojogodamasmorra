import React from 'react'
import Detail from './Detail'
import Header from './Header'
import data from './Back.json' 
import BtnMais from './BtnMais'
const Form = (props) => {
    const inputStyle = {
        border: 'none',
        backgroundColor: 'inherit',
        borderBottom: '1px solid #202020',
        width: '140px + 5vw',
        position: 'absolute',
        left: '84px'
    }
     var [nome, setNome] = React.useState('')
    return (
        <div style={{position: 'relative',bottom: props.marginTop}}>
        <form style={{height: '56px'}}>
        <label form='' style={{fontWeight: 'bold',marginRight: '1vw',position: 'absolute',left: '-60px'}}>
            Nome
        <input style={inputStyle} id={props.tipo} value={nome} onChange={(e) => {setNome(e.target.value);console.log(nome)}}></input>
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
        width: '140px + 5vw',
        position: 'absolute',
        left: '84px'
    }
        var [jogador,setJogador] = React.useState('')
    return (
        <div style={{position: 'relative',bottom: props.marginTop}}>
        <form style={{height: '56px'}}>
        <label form='' style={{fontWeight: 'bold',marginRight: '1vw',position: 'absolute',left: '-60px'}}>
            Jogador
        <input style={inputStyle} id={jogador} value={jogador} onChange={(e) => {setJogador(e.target.value);console.log(jogador)}}></input>
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
        left: '84px',
        padding: '0px',
        textAlign: 'center',
        fontFamily: 'Arial,sans-serif',
        borderRadius: '6px'
    }
    const [formNum,setFormNum] = React.useState({
        dinheiro: '',
        acertos: ''
    })
    // colocar pra mudar cada propriedade dependendo de qual formNum tá selecionado...Ver no Origamid
    return (
        <div style={{position: 'relative',bottom: props.marginTop,marginBottom: '-64px'}}>
        <form style={{height: '56px'}}>
        <label form='' style={{fontWeight: 'bold',marginRight: '1vw',position: 'absolute',left: '-60px'}}>
            {props.tipo}
        <input style={inputStyleNum} id='Nome' type='number'></input>
        </label>

        </form>
        </div>
    )
}

const Bola = () => {
    
    // var Style = {
    //     borderRadius: '50%',
    //     border: '1px solid rgba(0,0,0,0.2)',
    //     background: bg,
    //     width: '36px',
    //     height: '36px'
    // }
    const [bg,SetBg] = React.useState(true)
    const Style = {
        borderRadius: '50%',
         border: '1px solid rgba(0,0,0,0.2)',
         background: bg ? '#D9D9D9' : '#E31717',
         width: '36px',
         height: '36px'
    }

    return (
        <div style={Style} className='lvlBall' onClick={() => {SetBg(bg => !bg);console.log('a')}}></div>
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
    return (
        <div style={{borderRadius: '25px 15px',padding: '10px',backgroundColor:'rgba(251, 4, 4, 0.61)',margin: '0 auto',display: 'flex',justifyContent: 'center',paddingRight: '40px',width: '300px',alignItems: 'center',gap: '24px',border: '1px solid rgba(0, 0, 0, 0.23)',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
            <h1 style={{fontFamily: 'Volkhov',fontSize: '32px',position: 'relative',right: '0px'}}>{props.tipo}</h1>
            <h1 style={{fontFamily: 'Volkhov',fontSize: '32px',position: 'relative',right: '40px'}}>16</h1>
            <Mais />
            <div style={{width: '40px',height: '7px',background: '#000',borderRadius: '25px'}}></div>
        </div>
    )
}

const TextoArea = (props) => {
    return (
        <div className='blocotexto' style={{background: '#d9d9d9',padding: '10px',minHeight: '200px',width: '300px',borderRadius:'25px 5px 25px 15px'}}>
        <h1>{props.nome}</h1>
        <div style={{width: 'inherit',display:'grid',placeItems: 'center',height: 'inherit'}}>
        <textarea className={`textoArea ${props.nome}`} placeholder={props.info} style={{border: 'none',padding: '10px 15px',fontSize:'14px',fontFamily: 'Arial,sans-serif',width: '80%',height: '115px',marginTop: '16px'}}></textarea>

        </div>
        </div>
    )
}

const Equips = () =>{
    const Equips = []
    return (
        <div className='blocotexto' style={{background: '#d9d9d9',padding: '10px',minHeight: '105px',width: '300px',borderRadius:'25px 5px 25px 15px'}}>
        <h1>Equipamentos</h1>
        <div style={{width: 'inherit',display:'grid',placeItems: 'center',height: 'inherit'}}>
        <div style={{width: '48px',height: '48px',backgroundColor: '#E31717',borderRadius: '50%',position: 'relative'}}>
        <div style={{position: 'absolute',left:'21.4px',top:'8px',width: '4.4px',height: '30px',backgroundColor: '#FAFAFA'}}></div>
        <div style={{position: 'absolute',left:'21.4px',top:'8px',width: '4.4px',height: '30px',backgroundColor: '#FAFAFA',transform: 'rotate(-90deg)'}}></div>
          </div>
        </div>
          </div>
    )
}

const Ficha = () => {
    let stringado = JSON.stringify(data)
    localStorage.setItem('app_teste',stringado)
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
                        <Bola />
                        <Bola />
                        <Bola />
                        </div>
                        <div style={{display: 'flex',gap:'24px',position: 'relative',left: '27px'}}>
                        <Bola />
                        <Bola />
                    </div>
                </div>
                <br />
                <section style={{width: '100%',background: '#F6F6F6',borderTop: '1px solid rgba(0, 0, 0, 0.18)'}}>
                    <br />
                    <h1 style={{fontFamily: 'CAT',fontSize:'40px'}}>Distribua seus Pontos!</h1>
                    <h2 style={{fontFamily: 'Volkhov',marginBottom: '-6px'}}>Você possui 40 pontos</h2>
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
                <button style={{backgroundColor: '#66cc23',padding: '5px 15px',borderRadius:'25px',border: 'none',fontSize: '32px'}}>Salvar</button>
    </div>
    // Propriedades  necessárias:ID desenho,Nome,jogador,dinheiro,acertos,nível,pts{atk,def,cor,out} stringslongas{classe,raça,hab sobrenatural,equip e itens}
    //Tudo vai ser basicamente transformado em objeto que vai ser armazenado no localStorage a partir do stringify,
    //E depois retransformado em objeto pra ser interpretado em outras horas
  )
}

export default Ficha