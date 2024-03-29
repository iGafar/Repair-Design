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

const entitiesRealize = [
  "./img/realize_background.jpg",
  "./img/realize3.jpg",
  "./img/realize2.jpg"
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
  projectsImg.src = `${entities[index].img}`;
  projectsMobileImg.src = `${entities[index].img}`;
  for (let i = 0; i < maxProjectsIndex; i++) {
    projectsCircle[i].classList.remove("projects__arrows-active");
    projectsCity[i].classList.remove("projects__list-active");
  }
  projectsCircle[index].classList.add("projects__arrows-active");
  projectsCity[index].classList.add("projects__list-active");
};

const setEntityRealize = (index) => {
  realizeMobileImg.src = `${entitiesRealize[index]}`;
};

let currentIndex = 0;
let maxProjectsIndex = entities.length;
let maxRealizeIndex = entitiesRealize.length;

function changeImg(e) {
  for (let i = 0; i < maxProjectsIndex; i++) {
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

const realizeMobileImg = document.querySelector(".realize__mobile-img");
const prevRealizeMobile = document.querySelector(".realize__mobile-left");
const nextRealizeMobile = document.querySelector(".realize__mobile-right");

realizeMobileImg.style.height = `${realizeMobileImg.width * 0.71}px`

function prevImg(button, fn, maxIndex) {
  button.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = maxIndex;
    }
    currentIndex -= 1;
    fn(currentIndex);
  });
}

prevImg(prev, setEntity, maxProjectsIndex);
prevImg(prevMobile, setEntity, maxProjectsIndex);
prevImg(prevRealizeMobile, setEntityRealize, maxRealizeIndex)

function nextImg(button, fn, maxIndex) {
  button.addEventListener("click", () => {
    if (currentIndex === maxIndex - 1) {
      currentIndex = -1;
    }
    currentIndex += 1;
    fn(currentIndex);
  });
}

nextImg(next, setEntity, maxProjectsIndex);
nextImg(nextMobile, setEntity, maxProjectsIndex);
nextImg(nextRealizeMobile, setEntityRealize, maxRealizeIndex)

const burger = document.querySelector(".header__lines");
const firstLine = document.querySelectorAll(".header__lines-item")[0];
const secondLine = document.querySelectorAll(".header__lines-item")[1];
const thirdLine = document.querySelectorAll(".header__lines-item")[2];
const menu = document.querySelector(".menu");
const contacts = document.querySelector(".contacts");

burger.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    firstLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    secondLine.style.opacity = "1";
    thirdLine.style.transform = "rotate(0deg) translate(0px, 0px)";
    menu.style.top = "-100vh";
    contacts.style.left = "-100%";
  } else {
    firstLine.style.transform = "rotate(45deg) translate(5px, 7px)";
    secondLine.style.transform = "translate(100px)";
    secondLine.style.opacity = "0";
    thirdLine.style.transform = "rotate(-45deg) translate(5px, -7px)";
    menu.style.top = "0";
    contacts.style.left = "10px";
  }
});