import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';


function Main(props) {

  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialUser(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      //установка данных пользователя
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(initialCards)
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

  // console.log(props)
  // debugger;

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <img 
          onClick={props.onEditAvatar}
          className="profile__avatar" src={`${userAvatar}`} alt="Фотография профиля" />
        </div>
        <h1 className="profile__info">{`${userName}`}</h1>
        <button
        onClick={props.onEditProfile}
        className="button button_type_edit" type="button" aria-label="Редактировать">
        </button>
        <p className="profile__description">{`${userDescription}`}</p>
        <button
        onClick={props.onAddPlace}
        className="button button_type_add" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">

        {cards.map((card) => {
          return (
            <Card
              card={card}
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