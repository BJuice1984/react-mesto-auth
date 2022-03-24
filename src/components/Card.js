import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
    props.onImageClick()
  }
  return(
    <article className="element">
      <img
        onClick={handleClick}
        className="element__photo" 
        src={`${props.card.link}`} alt="Изображение загружается" />
      <h2 className="element__name">{`${props.card.name}`}</h2>
      <button className="button button_type_heart-like" type="button" aria-label="Лайкнуть"></button>
      <p className="element__counter">{`${props.card.likes.length}`}</p>
      <button className="button button_type_delete button_type_delete-disactive" type="button" aria-label="Удалить"></button>
    </article>
  )
}

export default Card