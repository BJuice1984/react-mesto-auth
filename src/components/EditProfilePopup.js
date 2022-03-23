import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

  return(
    <PopupWithForm 
      name='profile' 
      title='Редактировать профиль'
      text='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}>
      
      <label className="popup__input-form-label">
        <input
          type="text"
          name="info"
          id="profile-info"
          className="popup__input-text popup__input-text_type_name"
          defaultValue=""
          required
          minLength="2"
          maxLength="40"/>
        <span className="popup__input-form-error" id="profile-info-error"></span>
      </label>
      <label className="popup__input-form-label">
        <input
          type="text"
          name="description"
          id="profile-description"
          className="popup__input-text popup__input-text_type_description"
          defaultValue=""
          required
          minLength="2"
          maxLength="200"/>
        <span className="popup__input-form-error" id="profile-description-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;