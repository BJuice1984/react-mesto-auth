import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { api } from '../utils/Api';


function Main(props) {

  const userData = React.useContext(CurrentUserContext);
  // const [cards, setCards] = React.useState([]);

  

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

        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onImageClick={props.onImageClick}
              onCardClickLike={props.onCardClickLike}
            />
          )}        
        )}
        
      </section>
    </main>
  );
}

export default Main;