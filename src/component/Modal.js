import React, { useEffect, useState } from 'react'
import '../styles/Modal.css'

const Modal = ({ backdrop, onClose, className, children }) => {
  const [showFade, setShowFade] = useState("");
  const [display, setDisplay] = useState("modal-fade-block")
  const fadeIn = () => {
    setShowFade("show")
    document.body.style.overflow = "hidden"
  }
  const [effect, setEffect] = useState({ callback: fadeIn});

  const fadeOut = () => {
    setShowFade("");
    setEffect({ callback: displayNone });
  }
  useEffect(() => {
    effect.callback();
    return () => document.body.style.overflow = "visible"
  }, [effect])


  const displayNone = () => {
    setTimeout(() => {
      setDisplay("modal-fade-none")
      setEffect({ callback: onClose ? onClose : () => {} });
      document.body.style.overflow = "visible"
    }, 150);
  }

  const close = (e) => {
    if(e.target.classList.contains(`hide-modal`)){
      e.stopPropagation()
      setEffect({ callback: fadeOut })
    }
  }

  return(
    <>
      <div onClick={ close } className={`modal fade modal-fade ${display} ${showFade}`} aria-modal="true" role="dialog">
        <div className={`${className ? className : ""} modal-dialog modal-fullscreen-md-down modal-dialog-modal-fade`}>
          <div className="modal-content">
            { children }
          </div>
        </div>
      </div>
      {backdrop && <div className={`modal-backdrop fade ${display} ${showFade}`}></div>}
    </>
  );
}

export default Modal