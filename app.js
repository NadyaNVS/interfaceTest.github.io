document.addEventListener("DOMContentLoaded", function () {
  let tg = window.Telegram.WebApp;
  tg.expand();

  // Simulate fetching
  setTimeout(() => {
    if (tg.initDataUnsafe.user) {
      const user = tg.initDataUnsafe.user;
      const userName = document.getElementById("user-info");
      userName.innerHTML = `${user.username}`;

//only in attachment menu
// const avatarImg = document.getElementById("user-avatar");
// avatarImg.src = tg.initDataUnsafe.user.photo_url;
    } else {
      const userName = document.getElementById("user-info");
      userName.innerHTML = `Hi, there!`;
      console.error("User data is not available");
    }

    document.getElementById("content").classList.remove("hidden");
    document.getElementById("loader").style.display = "none";
  }, 3000);
});

