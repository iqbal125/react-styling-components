import React, { useEffect, useState } from 'react'
import './App.css'



const Modal = props => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('click', handleClick )
  }, [visible])

  const handleClick = (event) => {
      if( visible ) {
        if(event.target.className.substring(0, 5) !== 'modal') {
          setVisible(false)
          window.removeEventListener('click', handleClick)
      }
     }
    }


  return (
      <div>
      <button onClick={() => console.log(visible) }>
        Get State
      </button>
        <button onClick={() => {setVisible(true)} }>
          Click here to trigger the modal!
        </button>
      <div className="modal-con">
       <div className={!visible ? "modal-hidden" : 'modal-visible'}>
            <button onClick={() => setVisible(false) }
                    className="modal-close-button">
              ×
            </button>
            <h1 className="modal-header">Hello, I am a modal!</h1>
            <p className="modal-text"> modal text, modal text , modal text, modal text,
                modal text, modal text , modal text, modal text</p>
      </div>
       <div className={visible
                        ? "backdrop"
                        :  null}>
       </div>

      </div>
    </div>
    );
}

export default Modal;
