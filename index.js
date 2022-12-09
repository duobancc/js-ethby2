import './style.css';

import { getTime } from './util';

const appDiv = document.getElementById('app');

function updateTime() {
  const currentTime = getTime();
  appDiv.innerHTML = `<h1 class="title">${currentTime}</h1>`;
}
// updateTime();
// setInterval(updateTime, 1000);
