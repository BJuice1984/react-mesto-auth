import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  function handleChangeCardName(e) {
    setCardName(e.target.value)
  }

  function handleChangeCardLink(e) {
    setCardLink(e.target.value)
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({ 
      name: cardName,
      link: cardLink });
  }

  React.useEffect(() => {
    setCardName('');
    setCardLink('')
  },[props.isOpen])

  return(
    <PopupWithForm 
      name='add' 
      title='Новое место'
      buttonText={props.isConfirm ? 'Секундочку...' : 'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <label className="popup__input-form-label">
        <input
          value={cardName || ''}
          onChange={handleChangeCardName}
          type="text"
          name="name"
          id="element-name"
          className="popup__input-text popup__input-text_type_name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"/>
        <span className="popup__input-form-error" id="element-name-error"></span>
      </label>
      <label className="popup__input-form-label">
        <input
        value={cardLink ? cardLink : ''}
        onChange={handleChangeCardLink}
        type="url"
        name="link"
        id="element-photo"
        className="popup__input-text popup__input-text_type_link"
        placeholder="Ссылка на картнку"
        required />
        <span className="popup__input-form-error" id="element-photo-error"></span>
      </label>
      </PopupWithForm>
  )
}

export default AddPlacePopup;