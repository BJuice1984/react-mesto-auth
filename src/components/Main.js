import React from 'react';
import { api } from '../utils/Api';


function Main(props) {

  // console.log(props);

  const [userName, setUserName] = React.useState({});
  const [userDescription, setUserDescription] = React.useState({});
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getInitialUser()
    .then((userData) => {
      //установка данных пользователя
      console.log(userData)
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
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
        <section className="elements"></section>
      </main>
  );
}

export default Main;