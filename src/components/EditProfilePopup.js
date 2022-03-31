import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditProfilePopup(props) {

  console.log(props.onUpdateUser)

  const userData = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setUserName(userData.name);
    setUserDescription(userData.about);
  }, [userData])

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  function handleChangeUserName(e) {
    setUserName(e.target.value)
  }

  function handleChangeUserDescription(e) {
    setUserDescription(e.target.value)
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: userName,
      about: userDescription});
  }

  return(
    <PopupWithForm 
      name='profile' 
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      
      <label className="popup__input-form-label">
        <input
          value={userName ? userName : ''}
          onChange={handleChangeUserName}
          type="text"
          name="info"
          id="profile-info"
          className="popup__input-text popup__input-text_type_name"
          required
          minLength="2"
          maxLength="40"/>
        <span className="popup__input-form-error" id="profile-info-error"></span>
      </label>
      <label className="popup__input-form-label">
        <input
          value={userDescription ? userDescription : ''}
          onChange={handleChangeUserDescription}
          type="text"
          name="description"
          id="profile-description"
          className="popup__input-text popup__input-text_type_description"
          required
          minLength="2"
          maxLength="200"/>
        <span className="popup__input-form-error" id="profile-description-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;