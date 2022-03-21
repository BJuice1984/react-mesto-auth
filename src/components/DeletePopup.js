import React from "react";

function DeletePopup() {
  return(
    <div className="popup popup_type_delete">
      <div className="popup__window">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <div className="popup__content">
          <h2 className="popup__header">Вы уверены?</h2>
          <form name="formDelete" className="popup__input-form popup__input-form_type_delete" novalidate>
            <button className="popup__save-button" type="submit" aria-label="Да">Да</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DeletePopup;