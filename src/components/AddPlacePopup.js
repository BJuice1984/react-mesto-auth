import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  return(
    <PopupWithForm 
      name='add' 
      title='Новое место'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}>

      <label className="popup__input-form-label">
        <input
          type="text"
          name="name"
          id="element-name"
          className="popup__input-text popup__input-text_type_name"
          placeholder="Название"
          defaultValue=""
          required
          minLength="2"
          maxLength="30"/>
        <span className="popup__input-form-error" id="element-name-error"></span>
      </label>
      <label className="popup__input-form-label">
        <input
        type="url"
        name="link"
        id="element-photo"
        className="popup__input-text popup__input-text_type_link"
        placeholder="Ссылка на картнку"
        defaultValue=""
        required />
        <span className="popup__input-form-error" id="element-photo-error"></span>
      </label>
      </PopupWithForm>
  )
}

export default AddPlacePopup;