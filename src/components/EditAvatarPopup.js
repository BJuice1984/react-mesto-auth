import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  return(
    <PopupWithForm 
      name='avatar' 
      title='Обновить аватар'
      text='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}>

      <label class="popup__input-form-label">
        <input
        type="url"
        name="avatar"
        id="element-avatar"
        className="popup__input-text popup__input-text_type_link"
        placeholder="Ссылка на новый аватар"
        value=""
        required />
        <span className="popup__input-form-error" id="element-avatar-error"></span>
      </label>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;