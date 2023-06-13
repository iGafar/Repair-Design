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
const projectsCircle = document.querySelectorAll(".projects__arrows-circle");
const projectsCity = document.querySelectorAll(".projects__list-item");

let currentIndex = 0;
let maxIndex = entities.length;

for (let i = 0; i <= maxIndex; i++){
  projectsCity[i].addEventListener("click", () => {
    console.log('hi');
  })
}

const setEntity = (index) => {
  cityText.innerText = entities[index].cityText;
  areaText.innerText = entities[index].areaText;
  timeText.innerText = entities[index].timeText;
  costText.innerText = entities[index].costText;
  projectsImg.style.content = `url(${entities[index].img})`;
  projectsCircle[index].classList.add("projects__arrows-active");
  projectsCity[index].classList.add("projects__list-active");
};

const prev = document.querySelector(".projects__arrows-left");
const next = document.querySelector(".projects__arrows-right");

prev.addEventListener("click", () => {
  if (currentIndex === 0) {
    projectsCircle[0].classList.remove("projects__arrows-active");
    projectsCity[0].classList.remove("projects__list-active");
    currentIndex = maxIndex;
  }
  setEntity(currentIndex - 1);
  currentIndex -= 1;
  if (projectsCircle[currentIndex + 1]) {
    projectsCircle[currentIndex + 1].classList.remove(
      "projects__arrows-active"
    );
    projectsCity[currentIndex + 1].classList.remove("projects__list-active");
  }
});

next.addEventListener("click", () => {
  if (currentIndex === maxIndex - 1) {
    projectsCircle[currentIndex].classList.remove("projects__arrows-active");
    projectsCity[currentIndex].classList.remove("projects__list-active");
    currentIndex = -1;
    
  }
  setEntity(currentIndex + 1);
  currentIndex += 1;
  if (projectsCircle[currentIndex - 1]) {
    projectsCircle[currentIndex - 1].classList.remove(
      "projects__arrows-active"
    );
    projectsCity[currentIndex - 1].classList.remove("projects__list-active");
  }
});


