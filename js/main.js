let controlClick = document.querySelector('.control__form-click');
let controlTick = document.querySelector('.control__form-tick');

controlTick.addEventListener('click', ()=> {
    if(controlClick.classList.contains('control__form-click-add')) {
        controlClick.classList.add('control__form-click-del')
        controlClick.classList.remove('control__form-click-add')
    } else {
        controlClick.classList.add('control__form-click-add')
        controlClick.classList.remove('control__form-click-del')
    }
})

let typesClick = document.querySelector('.types__form-click');
let typesTick = document.querySelector('.types__form-tick');

typesTick.addEventListener('click', ()=> {
    if(typesClick.classList.contains('types__form-click-add')) {
        typesClick.classList.add('types__form-click-del')
        typesClick.classList.remove('types__form-click-add')
    } else {
        typesClick.classList.add('types__form-click-add')
        typesClick.classList.remove('types__form-click-del')
    }
})

let questionsClick = document.querySelector('.questions__form-click');
let questionsTick = document.querySelector('.questions__form-tick');

questionsTick.addEventListener('click', ()=> {
    if(questionsClick.classList.contains('questions__form-click-add')) {
        questionsClick.classList.add('questions__form-click-del')
        questionsClick.classList.remove('questions__form-click-add')
    } else {
        questionsClick.classList.add('questions__form-click-add')
        questionsClick.classList.remove('questions__form-click-del')
    }
})