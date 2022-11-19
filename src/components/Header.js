import React from 'react'

const Header = (props) => {
    const { pathname } = window.location
    const TaHub = pathname === '/' ? true : false
    if (TaHub) {
    var cor = '#F30000' 
    var sizeH1 = '32px'
    var MB = '0'
    } else {
    var cor = '#FFF'
    var sizeH1 = '44px'
    var MB = '32px'
    }
  return (
    <header style={{width: '100%',backgroundColor: cor,height: '65px',display: 'grid',placeItems: 'center',borderBottom: '1px solid black',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',marginBottom: MB}}>
        
        <h1 style={{fontSize: sizeH1}}>{props.Nome}</h1>

    </header>
  )
}

export default Header