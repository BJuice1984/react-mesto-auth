import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import DeletePopup from './DeletePopup';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleImageClick() {
    setIsImagePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onImageClick={handleImageClick}/>
        <Footer />
      </div>
      <PopupWithForm 
      name='profile' 
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}>
      
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
    <PopupWithForm 
      name='avatar' 
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}>

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
      <PopupWithForm 
      name='add' 
      title='Новое место'
      buttonText='Сохранить'
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}>

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
      <ImagePopup
        card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}
      /> 
    </div>
  );
}

export default App;



