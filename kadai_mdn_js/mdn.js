const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const formattedDate = `${year}年${month}月${day}日`;


document.body.innerHTML = `<p>今日の日付: ${formattedDate}</p>`;