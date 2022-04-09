import './index.html'
import './css/style.css';
import './scss/style.sass';

import switchTheme from './modules/switchTheme';
import multiRangeHandler from './modules/multiRangeHandler';
import formElementsHandler from './modules/formElementsHandler';
import getNewFieldset from './modules/getNewFieldset';

const initFieldset = document.getElementById('init-fieldset');

switchTheme();
multiRangeHandler();
formElementsHandler();
initFieldset.after(getNewFieldset(), getNewFieldset(true));