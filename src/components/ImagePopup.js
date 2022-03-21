import React from 'react';

function ImagePopup() {
  return(
    <div className="popup popup_type_image">
        <div className="popup__window popup__window_type_image-opened">
          <button className="popup__close-button popup__close-button_type_image" type="button" aria-label="Закрыть"></button>
          <figure className="popup__content">
            <img className="popup__content popup__content_type_image" src="#" alt="Изображение загружается" />
            <figcaption className="popup__content popup__content_type_name"></figcaption>
          </figure>
        </div>
      </div>
  )
}

export default ImagePopup;