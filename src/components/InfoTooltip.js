import React from 'react';
import ok_pic from '../images/OK_pic.svg';
import err_pic from '../images/ERR_pic.svg';

function InfoTooltip(props) {

  React.useEffect(() => {
    if (!props.isOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") {
        props.onClose()
      }
    }

    document.addEventListener("keydown", handleEsc);    
    return () => {document.removeEventListener("keydown", handleEsc)
    }
  }, [props.isOpen]);

  React.useEffect(() => {
    if (!props.isOpen) return;

    function handleClickClose(e) {
      if (e.target.className.includes("popup_opened")) {
        props.onClose()
      }
    }

    document.addEventListener("mousedown", handleClickClose);    
    return () => {document.removeEventListener("mousedown", handleClickClose)
    }
  }, [props.isOpen]);

  return(
    <div className={`popup popup_type_tooltip ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__window">
          <button 
            className="popup__close-button" 
            type="button" 
            aria-label="Закрыть"
            onClick={props.onClose}>
          </button>
          <div className="popup__content">
            <img className="popup__image" src={err_pic} alt="Изображение" />
            <h2 className="popup__text">Что-то пошло не так! Попробуйте ещё раз.</h2>
          </div>
        </div>
      </div>
  )
}

export default InfoTooltip;