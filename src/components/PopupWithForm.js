import React from 'react';

function PopupWithForm(props) {

  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__window">
          <button 
            className="popup__close-button" 
            type="button" 
            aria-label="Закрыть"
            onClick={props.onClose}>
          </button>
          <div className="popup__content">
            <h2 className="popup__header">{props.title}</h2>
            <form name={props.name} className={`popup__input-form popup__input-form_type_${props.name}`} noValidate>
              {props.children}
              <button className="popup__save-button" type="submit" aria-label="Сохранить">{props.buttonText}</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default PopupWithForm;