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
  const time = `,${hour}:${min}:${sec.length === 1 ? '0' + sec : sec}`;
  const dates = `${year}年${mouth}月${day}日${week}${time}`;
  return dates;
}

export { getTime };
