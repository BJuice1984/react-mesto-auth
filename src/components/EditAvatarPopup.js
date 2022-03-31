import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  // console.log(props.onUpdateUser)

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      // name,
      // about: description,
    });
  }

  return(
    <PopupWithForm 
      name='avatar' 
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <label className="popup__input-form-label">
        <input
        type="url"
        name="avatar"
        id="element-avatar"
        className="popup__input-text popup__input-text_type_link"
        placeholder="Ссылка на новый аватар"
        defaultValue=""
        required />
        <span className="popup__input-form-error" id="element-avatar-error"></span>
      </label>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;