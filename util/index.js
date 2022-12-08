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
  const hour = date.getHours().toString();
  const min = date.getMinutes().toString();
  const sec = date.getSeconds().toString();
  const week = weekEmun[date.getDay()];
  const time = `,${hour.length === 1 ? '0' + hour : hour}:${
    min.length === 1 ? '0' + min : min
  }:${sec.length === 1 ? '0' + sec : sec}`;
  const dates = `${year}年${mouth}月${day}日${week}  ${time}`;
  return dates;
}

export { getTime };
