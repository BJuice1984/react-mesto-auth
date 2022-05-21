import React from 'react';

function PopupWithForm(props) {

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
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__window">
          <button 
            className="popup__close-button" 
            type="button" 
            aria-label="Закрыть"
            onClick={props.onClose}>
          </button>
          <div className="popup__content">
            <h2 className="popup__header">{props.title}</h2>
            <form onSubmit={props.onSubmit} name={props.name} className={`popup__input-form popup__input-form_type_${props.name}`} >
              {props.children}
              <button className={`popup__save-button ${(!props.isFormValid) ? 'popup__save-button_disabled' : ''}`} type="submit" aria-label="Сохранить">{props.buttonText}</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default PopupWithForm;