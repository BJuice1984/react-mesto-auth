import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup(props) {

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    props.onConfirmDelete(props.card);
  }

  return(
    <PopupWithForm 
      name='delete' 
      title='Вы уверены?'
      buttonText={props.isConfirm ? 'Удаление...' : 'Да'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>      

    </PopupWithForm>
  )
}

export default ConfirmationPopup;