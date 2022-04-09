import getNewFieldset from "./getNewFieldset";

const formElementsHandler = () => {
  const form = document.getElementById('form');

  form.addEventListener('click', ({ target }) => {
    if (!target.closest('.form-controls'))
      return;
    
    const fieldset = target.closest('.academic-titles-cart');
    target = target.closest('.form-controls');

    if (target.classList.contains('academic-titles-cart__state-switcher'))
      if (!fieldset.getAttribute('disabled')) {
        fieldset.setAttribute('disabled', 'true');
        fieldset.querySelectorAll('.input').forEach(input => input.classList.remove('error'));
      } else
        fieldset.removeAttribute('disabled', '');
    if (target.classList.contains('academic-titles-cart__button-delete'))
      fieldset.remove();
    if (target.classList.contains('academic-titles-cart__button-add')) {
      !fieldset.getAttribute('disabled') && fieldset.after(getNewFieldset());
    }
  });

  form.addEventListener('invalid', event => {
    event.preventDefault();
    event.target.closest('.input').classList.add('error');
  }, true);

  form.addEventListener('input', ({ target }) => {
    const input = target.closest('.input');

    input.classList.contains('error') && input.classList.remove('error');
  }, true);
};

export default formElementsHandler;