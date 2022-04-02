import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card(props) {

  const userData = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === userData._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `button button_type_delete ${isOwn ? '' : 'button_type_delete-disactive'}`
  );
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === userData._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `button button_type_heart-like ${isLiked ? 'button_type_heart-like-active' : ''}`;

  function handleClick() {
    props.onCardClick(props.card);
    props.onImageClick()
  }

  function handleCardClickLike() {
    props.onCardClickLike(props.card)
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return(
    <article className="element">
      {props.card && (<img
        onClick={handleClick}
        className="element__photo" 
        src={props.card.link} alt="Изображение загружается" />)}
      {props.card && (<h2 className="element__name">{props.card.name}</h2>)}
      <button 
        onClick={handleCardClickLike}
        className={cardLikeButtonClassName} type="button" aria-label="Лайкнуть"></button>
      {props.card && (<p className="element__counter">{props.card.likes.length}</p>)}
      <button
        onClick={handleDeleteClick}
        className={cardDeleteButtonClassName} type="button" aria-label="Удалить"></button>
    </article>
  )
}

export default Card