import './style.css';

const appDiv = document.getElementById('app');
const weekEmun = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
];

function getTime() {
  const date = new Date();
  const year = date.getFullYear();
  const mouth = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds().toString();
  const week = weekEmun[date.getDay()];
  const times = `${year}年${mouth}月${day}日${week}, ${hour}:${min}:${
    sec.length === 1 ? '0' + sec : sec
  }`;
  return times;
}

function updateTime() {
  const currentTime = getTime();
  appDiv.innerHTML = `<h1>${currentTime}</h1>`;
}
const aaa = setInterval(updateTime, 1000);
console.log(aaa);
updateTime();
clearInterval(17);
// clearInterval(aaa)
