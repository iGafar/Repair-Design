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