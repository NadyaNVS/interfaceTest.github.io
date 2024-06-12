let tg = window.Telegram.WebApp;
tg.expand();

const userName = document.getElementById("user-info");
userName.innerHTML = `${tg.initDataUnsafe.user.username}`;

//only in attachment menu
// const avatarImg = document.getElementById("user-avatar");
// avatarImg.src = tg.initDataUnsafe.user.photo_url;
