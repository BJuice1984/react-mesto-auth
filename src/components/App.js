import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
    <body className="page">
      <div className="page__container">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}/>
        <Footer />
      </div>
      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
      />





      {/* <div className="popup popup_type_add">
        <div className="popup__window">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <div className="popup__content">
            <h2 className="popup__header">Новое место</h2>
            <form name='formAdd' className="popup__input-form popup__input-form_type_add" novalidate>
              <label className="popup__input-form-label">
                <input
                  type="text"
                  name="name"
                  id="element-name"
                  className="popup__input-text popup__input-text_type_name"
                  placeholder="Название"
                  value=""
                  required
                  minlength="2"
                  maxlength="30"/>
                <span className="popup__input-form-error" id="element-name-error"></span>
              </label>
              <label className="popup__input-form-label">
                <input
                type="url"
                name="link"
                id="element-photo"
                className="popup__input-text popup__input-text_type_link"
                placeholder="Ссылка на картнку"
                value=""
                required />
                <span className="popup__input-form-error" id="element-photo-error"></span>
              </label>
              <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
            </form>
          </div>
        </div>
      </div> */}
      {/* <div className="popup popup_type_avatar">
      <div className="popup__window">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <div className="popup__content">
          <h2 className="popup__header">Обновить аватар</h2>
          <form name='formAvatar' className="popup__input-form popup__input-form_type_avatar" novalidate>
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
            <button className="popup__save-button" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
      </div>
    </div> */}
      <div className="popup popup_type_image">
        <div className="popup__window popup__window_type_image-opened">
          <button className="popup__close-button popup__close-button_type_image" type="button" aria-label="Закрыть"></button>
          <figure className="popup__content">
            <img className="popup__content popup__content_type_image" src="#" alt="Изображение загружается" />
            <figcaption className="popup__content popup__content_type_name"></figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_type_delete">
      <div className="popup__window">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <div className="popup__content">
          <h2 className="popup__header">Вы уверены?</h2>
          <form name="formDelete" className="popup__input-form popup__input-form_type_delete" novalidate>
            <button className="popup__save-button" type="submit" aria-label="Да">Да</button>
          </form>
        </div>
      </div>
    </div>
      <template className="template">
        <article className="element">
          <img className="element__photo" src="#" alt="Изображение загружается" />
          <h2 className="element__name"></h2>
          <button className="button button_type_heart-like" type="button" aria-label="Лайкнуть"></button>
          <button className="button button_type_delete" type="button" aria-label="Удалить"></button>
        </article>
      </template>
    </body>
  </>
  );
}

export default App;



