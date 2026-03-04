const GITHUB_API_BASE_URL = "https://api.github.com";
const getProfilePicture = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE_URL}/users/aayushjoshi2709`,
    );
    const userData = await response.json();

    const img = document.getElementById("profile-picture");
    if (img) {
      img.src = userData.avatar_url;
    }
  } catch (error) {
    console.error("Failed to fetch profile picture:", error);
  }
};

const getPublicProjectDetails = async () => {
    
};

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
  getProfilePicture();

  const profilePic = document.getElementById("profile-picture");
  profilePic.onload = () => {
    setTimeout(() => {
      setTypingEffect();
    }, 500);
  };
};

document.addEventListener("DOMContentLoaded", init);
