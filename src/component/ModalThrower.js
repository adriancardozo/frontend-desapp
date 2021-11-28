import React, { useState } from 'react'
import '../styles/ModalThrower.css'

const ModalThrower = ({ modal, modalProps, children }) => {
  const [throwModal, setThrowModal] = useState(false);
  
  return(
      <>
        <div className="modal-thrower" onClick={() => setThrowModal(true)}>
          { children }
        </div>
        {throwModal && React.createElement(modal, {onClose:() => setThrowModal(false) ,...modalProps}, [])}
      </>
  );
}

export default ModalThrower