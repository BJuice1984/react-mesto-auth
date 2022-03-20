import React from 'react';


function Main(props) {

  console.log(props);

  // function handleEditAvatarClick() {
  //   document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  // }

  // function handleEditProfileClick() {
  //   document.querySelector('.popup_type_edit').classList.add('popup_opened')
  // }

  // function handleAddPlaceClick() {
  //   document.querySelector('.popup_type_add').classList.add('popup_opened')
  // }


  return (
    <main className="content">
      <section className="profile">
        <img
        onClick={props.onEditAvatar}
        className="profile__avatar" src="#" alt="Фотография профиля" />
        <h1 className="profile__info">Жак-Ив Кусто</h1>
        <button
        onClick={props.onEditProfile}
        className="button button_type_edit" 
        type="button" 
        aria-label="Редактировать">
        </button>
        <p className="profile__description">Исследователь океана</p>
        <button
        onClick={props.onAddPlace}
        className="button button_type_add" 
        type="button" 
        aria-label="Добавить"></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;