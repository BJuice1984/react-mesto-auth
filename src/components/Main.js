import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';


function Main(props) {

  const userData = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  console.log(CurrentUserContext)

  // React.useEffect(() => {
  //   Promise.all([api.getInitialUser(), api.getInitialCards()])
  //   .then(([userData, initialCards]) => {
  //     //установка данных пользователя
  //     setUserName(userData.name);
  //     setUserDescription(userData.about);
  //     setUserAvatar(userData.avatar);
  //     setCards(initialCards)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   });
  // }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          {userData.avatar && (<img 
          onClick={props.onEditAvatar}
          className="profile__avatar" src={userData.avatar} alt="Фотография профиля" />)}
        </div>
        {userData.name && <h1 className="profile__info">{userData.name}</h1>}
        <button
        onClick={props.onEditProfile}
        className="button button_type_edit" type="button" aria-label="Редактировать">
        </button>
        {userData.about && <p className="profile__description">{userData.about}</p>}
        <button
        onClick={props.onAddPlace}
        className="button button_type_add" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">

        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onImageClick={props.onImageClick}
            />
          )}        
        )}
        
      </section>
    </main>
  );
}

export default Main;