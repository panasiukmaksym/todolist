const inputBlock = document.querySelector('.block__input');
const buttonBlock = document.querySelector('.block__button');
const listBlock = document.querySelector('.block__list');
const infoBlock = document.querySelector('.block__info');

let numberLine = 0;
let arrItems = [];

buttonBlock.addEventListener('click', (e) => {
    if ( inputBlock.value != '' ) {

        arrItems[numberLine] = inputBlock.value;
        const newItem = document.createElement('div');
        newItem.classList.add('block__item');
        listBlock.appendChild(newItem);
        const newText = document.createElement('div');
        newText.textContent = `${numberLine + 1}. ${arrItems[numberLine]}`;
        newText.classList.add('block__text');
        const newTrash = document.createElement('div');
        newTrash.classList.add('block__trash');
        const newImg = document.createElement('img');
        newImg.src = 'trash3.svg';
        newItem.appendChild(newText);
        newItem.appendChild(newTrash);
        newTrash.appendChild(newImg);

        inputBlock.value = '';
        numberLine++;

        clearning.style.opacity = '1';

    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        if ( inputBlock.value != '' ) {

            arrItems[numberLine] = inputBlock.value;
            const newItem = document.createElement('div');
            newItem.classList.add('block__item');
            listBlock.appendChild(newItem);
            const newText = document.createElement('div');
            newText.textContent = `${numberLine + 1}. ${arrItems[numberLine]}`;
            newText.classList.add('block__text');
            const newTrash = document.createElement('div');
            newTrash.classList.add('block__trash');
            const newImg = document.createElement('img');
            newImg.src = 'trash3.svg';
            newItem.appendChild(newText);
            newItem.appendChild(newTrash);
            newTrash.appendChild(newImg);
    
            inputBlock.value = '';
            numberLine++;
    
            clearning.style.opacity = '1';
    
        }
    }
});

document.querySelector('.block').addEventListener('click', (event) => {
    if (event.path[0].classList[0] == 'block__item' || event.path[0].classList[0] == 'block__text') {
        if ( event.target.style.textDecoration == 'line-through' ) {
            event.target.style.textDecoration = 'none'; 
        } else if ( event.target.style.textDecoration == '' || event.target.style.textDecoration == 'none' ) {
            event.target.style.textDecoration = 'line-through';
        }
    } else if ( event.path[1].classList[0] == 'block__trash' || event.path[0].classList[0] == 'block__trash' ) {
        let textItems = event.path[2].firstChild.textContent;
        arrItems[Number(textItems[0]) - 1] = '';
        arrItems = arrItems.filter(Boolean);
        numberLine--;
        event.path[2].remove();
        listBlock.innerHTML = '';

        arrItems.forEach( ( item, i ) => {
            const newItem = document.createElement('div');
            newItem.classList.add('block__item');
            listBlock.appendChild(newItem);
            const newText = document.createElement('div');
            newText.classList.add('block__text');
            newText.textContent = `${i + 1}. ${arrItems[i]}`;
            const newTrash = document.createElement('div');
            newTrash.classList.add('block__trash');
            const newImg = document.createElement('img');
            newImg.src = 'trash3.svg';
            newItem.appendChild(newText);
            newItem.appendChild(newTrash);
            newTrash.appendChild(newImg);
        });

        if ( arrItems == '' ) {
            clearning.style.opacity = '0';
        }

    }
});

const clearning = document.querySelector('.block__clear');
clearning.addEventListener('click', (event) => {
    arrItems = [];
    numberLine = 0;
    inputBlock.value = '';
    listBlock.innerHTML = '';
    clearning.style.opacity = '0';
});