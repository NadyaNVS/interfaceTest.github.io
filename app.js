let tg = window.Telegram.WebApp;
tg.expand();

const userName = document.getElementById("user-info");
const avatarImg = document.getElementById("user-avatar");

userName.innerHTML = `${tg.initDataUnsafe.user.username}`;
avatarImg.src = tg.initDataUnsafe.user.photo_url;
