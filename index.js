const setTypingEffect = () => {
  const h1elements = document.querySelectorAll(".typewriter h2");
  let ms_delay = 1000;
  h1elements.forEach((el) => {
    const length = el.textContent.length;
    const timePeriod = length * 180;
    el.style.animation = `typing ${timePeriod}ms steps(${length * 90}, end) forwards`;
    el.style.animationDelay = `${ms_delay}ms`;
    ms_delay += timePeriod;
  });

  const elements = document.querySelectorAll(".typewriter p");
  elements.forEach((el) => {
    const length = el.textContent.length;
    const steps = length * 30;
    const timePeriod = length * 60;
    el.style.animation = `typing ${timePeriod}ms steps(${steps}, end) forwards`;
    el.style.animationDelay = `${ms_delay}ms`;
    ms_delay += timePeriod;
  });

  setTimeout(() => {
    const projectNavigationButton = document.querySelector(
      "#project-navigation",
    );
    projectNavigationButton.classList.remove("text-[#1a202c]");
    projectNavigationButton.classList.remove("disabled");
  }, ms_delay);
};

const init = () => {
  const profilePic = document.getElementById("profile-picture");

  const start = () => {
    setTimeout(() => {
      setTypingEffect();
    }, 500);
  };

  if (profilePic.complete) {
    start();
  } else {
    profilePic.onload = start;
  }
};

document.addEventListener("DOMContentLoaded", init);
