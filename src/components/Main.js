import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';


function Main(props) {

  // console.log(props);

  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialUser(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      //установка данных пользователя
      // console.log(initialCards)
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setCards(initialCards)
    })
    .catch(err => {
      console.log(err)
    });
  }, []);

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
          // console.log(cards)
          console.log(card.name)
          console.log(card)
          // debugger;
          return (
            <Card
              card={card}
            />
          )}        
        )}
        
      </section>
    </main>
  );
}

export default Main;