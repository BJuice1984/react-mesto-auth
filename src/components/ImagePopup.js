import React from 'react';

function ImagePopup(props) {

  return(
    <div className={`popup popup_type_image ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__window popup__window_type_image-opened">
          <button
            onClick={props.onClose}
            className="popup__close-button popup__close-button_type_image" 
            type="button" aria-label="Закрыть">
          </button>
          <figure className="popup__content">
            {props.card && (<img className="popup__content popup__content_type_image" src={`${props.card.link}`} alt="Изображение загружается" />)}
            {props.card && (<figcaption className="popup__content popup__content_type_name">{`${props.card.name}`}</figcaption>)}
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;