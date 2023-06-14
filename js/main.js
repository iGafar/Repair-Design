const entities = [
  {
    cityText: "Rostov-on-Don LCD admiral",
    areaText: "81 m2",
    timeText: "3.5 months",
    costText: "Upon request",
    img: "./img/projects1.jpg",
  },
  {
    cityText: "Sochi \nThieves",
    areaText: "105 m2",
    timeText: "4 months",
    costText: "Upon request",
    img: "./img/projects2.jpg",
  },
  {
    cityText: "Rostov-on-Don Patriotic",
    areaText: "93 m2",
    timeText: "3 months",
    costText: "Upon request",
    img: "./img/projects3.jpg",
  },
];

const cityText = document.querySelector(".projects__info-city");
const areaText = document.querySelector(".projects__info-area");
const timeText = document.querySelector(".projects__info-time");
const costText = document.querySelector(".projects__info-cost");
const projectsImg = document.querySelector(".projects__img");
const projectsMobileImg = document.querySelector(".projects__mobile-img");
const projectsCircle = document.querySelectorAll(".projects__arrows-circle");
const projectsCity = document.querySelectorAll(".projects__list-item");

const setEntity = (index) => {
  cityText.innerText = entities[index].cityText;
  areaText.innerText = entities[index].areaText;
  timeText.innerText = entities[index].timeText;
  costText.innerText = entities[index].costText;
  projectsImg.style.content = `url(${entities[index].img})`;
  projectsMobileImg.style.content = `url(${entities[index].img})`;
  for (let i = 0; i < maxIndex; i++) {
    projectsCircle[i].classList.remove("projects__arrows-active");
    projectsCity[i].classList.remove("projects__list-active");
  }
  projectsCircle[index].classList.add("projects__arrows-active");
  projectsCity[index].classList.add("projects__list-active");
};

let currentIndex = 0;
let maxIndex = entities.length;

function changeImg(e) {
  for (let i = 0; i < maxIndex; i++) {
    e[i].addEventListener("click", () => {
      currentIndex = i;
      setEntity(i);
    });
  }
}

changeImg(projectsCity);
changeImg(projectsCircle);

const prev = document.querySelector(".projects__arrows-left");
const next = document.querySelector(".projects__arrows-right");
const prevMobile = document.querySelector(".projects__mobile-left");
const nextMobile = document.querySelector(".projects__mobile-right");

function prevImg(button) {
  button.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = maxIndex;
    }
    currentIndex -= 1;
    setEntity(currentIndex);
  });
}

prevImg(prev);
prevImg(prevMobile);

function nextImg(button) {
  button.addEventListener("click", () => {
    if (currentIndex === maxIndex - 1) {
      currentIndex = -1;
    }
    currentIndex += 1;
    setEntity(currentIndex);
  });
}

nextImg(next);
nextImg(nextMobile);
