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