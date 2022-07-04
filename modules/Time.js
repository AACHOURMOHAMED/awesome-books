import { DateTime } from './luxon.js';

const date = document.querySelector('.date');

const dateTime = () => {
  const dt = DateTime.local();
  const t = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  date.textContent = t;
};

export default dateTime();