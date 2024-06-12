let tg = window.Telegram.WebApp;
tg.expand();

const userName = document.getElementById("user-info");
userName.innerHTML = `${tg.initDataUnsafe.user.username}`;
