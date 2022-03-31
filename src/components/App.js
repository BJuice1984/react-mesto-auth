import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    Promise.all([api.getInitialUser(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      //установка данных пользователя
      setCurrentUser(userData);
      setCards(initialCards)
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

  function handleCardLike(card) {
                                    
    const isLiked = card.likes.some(i => i._id === currentUser._id); // Снова проверяем, есть ли уже лайк на этой карточке
                                    
    if (!isLiked) {
      api.getAddLike(card._id) // Отправляем запрос в API и получаем обновлённые данные карточки
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c); // Формируем новый массив на основе имеющегося, подставляя в него новую карточку                                    
        setCards(newCards); // Обновляем стейт
      })
      .catch(err => {
        console.log(err)
      });
    } else {
      api.getRemoveLike(card._id)
      .then((newCard) => {                                    
        const newCards = cards.map((c) => c._id === card._id ? newCard : c); // Формируем новый массив на основе имеющегося, подставляя в него новую карточку                                    
        setCards(newCards); // Обновляем стейт
      })
      .catch(err => {
        console.log(err)
      });
    }
  }

  function handleUpdateUser(data) {
    console.log(data)
    api.getChangeUserInfo(data)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err)
    });
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main 
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onImageClick={handleImageClick}
            cards={cards}
            onCardClickLike={handleCardLike}/>
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}/>
        <EditProfilePopup />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          />
        <EditAvatarPopup />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}/>
        <AddPlacePopup />
        <ImagePopup
          card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}
        /> 
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;



