import React from 'react'

const BtnMais = () => {
  return (
    <div style={{width: '48px',height: '48px',backgroundColor: '#E31717',borderRadius: '50%',position: 'relative'}}>
        <div style={{position: 'absolute',left:'21.4px',top:'8px',width: '4.4px',height: '30px',backgroundColor: '#FAFAFA'}}></div>
        <div style={{position: 'absolute',left:'21.4px',top:'8px',width: '4.4px',height: '30px',backgroundColor: '#FAFAFA',transform: 'rotate(-90deg)'}}></div>
    </div>
  )
}

export default BtnMais