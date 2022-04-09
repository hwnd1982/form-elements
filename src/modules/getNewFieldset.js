const getNewFieldset = (disabled = false) => {
  const fieldset = document.createElement('fieldset');

  fieldset.className = 'academic-titles-cart form__input-group';
  disabled && fieldset.setAttribute('disabled', disabled);
  fieldset.innerHTML = `
    <legend class="form__title academic-titles-cart__title">Ученые степени или звания</legend>

    <div class="academic-titles-cart__wrap">
      <fieldset class="inputs-group inputs-group_direction_row  academic-titles-cart__inputs-group">
        <label class="input academic-titles-cart__input" data-text-error="Поле обязательно для заполнения">
          <span class="input__name input__name_required">Ученая степень</span>
          <input name="degree" type="text" class="input__item" placeholder="Введите текст" required />
          <div class="button form-controls academic-titles-cart__state-switcher"></div>
        </label>

        <label class="input academic-titles-cart__input" data-text-error="Поле обязательно для заполнения">
          <span class="input__name input__name_required">Область</span>
          <input name="domain" type="text" class="input__item" placeholder="Введите текст" required />
        </label>
      </fieldset>

      <button type="button" class="button form-controls academic-titles-cart__button-add">
        <svg class="academic-titles-cart__button-add-icon">
          <use href="#add"></use>
        </svg>
        <span class="academic-titles-cart__button-add-text">Добавить</span>
      </button>
    </div>

    <button type="button" class="button form-controls academic-titles-cart__button-delete">
      <svg class="academic-titles-cart__button-delete-icon">
        <use href="#delete"></use>
      </svg>
    </button>`;

  return fieldset;
};

export default getNewFieldset;