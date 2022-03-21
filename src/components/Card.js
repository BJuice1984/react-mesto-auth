import React from "react";

function Card({card}) {
  console.log(card)
  console.log(card.name)
  // debugger;
  return(
    <article className="element">
      <img className="element__photo" src={`${card.link}`} alt="Изображение загружается" />
      <h2 className="element__name">{`${card.name}`}</h2>
      <button className="button button_type_heart-like" type="button" aria-label="Лайкнуть"></button>
      <p className="element__counter">{`${card.likes.length}`}</p>
      <button className="button button_type_delete button_type_delete-disactive" type="button" aria-label="Удалить"></button>
    </article>
  )
}

export default Card