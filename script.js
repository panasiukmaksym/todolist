// const inputBlock = document.querySelector('.block__input');
// const buttonBlock = document.querySelector('.block__button');
// const listBlock = document.querySelector('.block__list');
// const infoBlock = document.querySelector('.block__info');

// let numberLine = 0;
// let arrItems = [];

// buttonBlock.addEventListener('click', (e) => {
//     if ( inputBlock.value != '' ) {

//         arrItems[numberLine] = inputBlock.value;
//         const newItem = document.createElement('div');
//         newItem.classList.add('block__item');
//         newItem.style.height = '46px';
//         listBlock.appendChild(newItem);
//         const newText = document.createElement('div');
//         newText.textContent = `${numberLine + 1}. ${arrItems[numberLine]}`;
//         newText.classList.add('block__text');
//         const newTrash = document.createElement('div');
//         newTrash.classList.add('block__trash');
//         const newImg = document.createElement('img');
//         newImg.src = 'trash3.svg';
//         newItem.appendChild(newText);
//         newItem.appendChild(newTrash);
//         newTrash.appendChild(newImg);

//         inputBlock.value = '';
//         numberLine++;

//         clearning.style.display = 'flex';
//         setTimeout( () => {
//             clearning.style.height = '50px';
//             clearning.style.opacity = '1';
//         }, 50);

//         infoBlock.textContent = 'Додано нову справу';
//         infoBlock.style.opacity = '1';
//         infoBlock.style.bottom = '-30px';
//         setTimeout( ()=>{
//             infoBlock.style.opacity = '0';
//             setTimeout( ()=> {
//                 infoBlock.style.bottom = '0px';
//             }, 500);
//         }, 300);

//     }
// });

// document.addEventListener('keyup', (event) => {
//     if (event.code === 'Enter') {
//         if ( inputBlock.value != '' ) {

//             arrItems[numberLine] = inputBlock.value;
//             const newItem = document.createElement('div');
//             newItem.classList.add('block__item');
//             newItem.style.height = '46px';
//             listBlock.appendChild(newItem);
//             const newText = document.createElement('div');
//             newText.textContent = `${numberLine + 1}. ${arrItems[numberLine]}`;
//             newText.classList.add('block__text');
//             const newTrash = document.createElement('div');
//             newTrash.classList.add('block__trash');
//             const newImg = document.createElement('img');
//             newImg.src = 'trash3.svg';
//             newItem.appendChild(newText);
//             newItem.appendChild(newTrash);
//             newTrash.appendChild(newImg);
    
//             inputBlock.value = '';
//             numberLine++;
    
//             clearning.style.display = 'flex';
//             setTimeout( () => {
//                 clearning.style.height = '50px';
//                 clearning.style.opacity = '1';
//             }, 50);

//             infoBlock.textContent = 'Додано нову справу';
//             infoBlock.style.bottom = '-30px';
//             infoBlock.style.opacity = '1';
//             setTimeout( ()=>{
//                 infoBlock.style.opacity = '0';
//                 setTimeout( ()=> {
//                     infoBlock.style.bottom = '0px';
//                 }, 500);
//             }, 300);
    
//         }
//     }
// });

// document.querySelector('.block').addEventListener('click', (event) => {
//     if (event.path[0].classList[0] == 'block__item' || event.path[0].classList[0] == 'block__text') {

//         if ( event.target.style.textDecoration == 'line-through' ) {

//             event.target.style.textDecoration = 'none'; 

//         } else if ( event.target.style.textDecoration == '' || event.target.style.textDecoration == 'none' ) {

//             event.target.style.textDecoration = 'line-through';

//         }

//     } else if ( event.path[1].classList[0] == 'block__trash' || event.path[0].classList[0] == 'block__trash' ) {

//         event.path[2].style.height = '0px';
//         event.path[2].style.marginRight = '150%';
//         event.path[2].style.marginLeft = '-150%';
//         infoBlock.textContent = 'Видалено справу';
//             infoBlock.style.opacity = '1';
//             infoBlock.style.bottom = '-30px';

//             setTimeout( ()=>{
//                 infoBlock.style.opacity = '0';
//                 setTimeout( ()=> {
//                     infoBlock.style.bottom = '0px';
//                 }, 500);
//             }, 300);

//         setTimeout( () => {
//             let textItems = event.path[2].firstChild.textContent;
//             arrItems[Number(textItems[0]) - 1] = '';
//             arrItems = arrItems.filter(Boolean);
//             numberLine--;
//             if ( event.path[2].classList[0] == 'block__item' ) {
//                 event.path[2].remove();
//             }
//             listBlock.innerHTML = '';

//             arrItems.forEach( ( item, i ) => {

//                 const newItem = document.createElement('div');
//                 newItem.classList.add('block__item');
//                 newItem.style.height = '46px';
//                 listBlock.appendChild(newItem);
//                 const newText = document.createElement('div');
//                 newText.classList.add('block__text');
//                 newText.textContent = `${i + 1}. ${arrItems[i]}`;
//                 const newTrash = document.createElement('div');
//                 newTrash.classList.add('block__trash');
//                 const newImg = document.createElement('img');
//                 newImg.src = 'trash3.svg';
//                 newItem.appendChild(newText);
//                 newItem.appendChild(newTrash);
//                 newTrash.appendChild(newImg);

//             });

//             if ( arrItems == '' ) {

//                 clearning.style.height = '0px';
//                 clearning.style.opacity = '0';
//                 setTimeout( () => {
//                     clearning.style.display = 'none';
//                 }, 600);

//             }

            
//         }, 600);

//     }
// });

// const clearning = document.querySelector('.block__clear');
// clearning.addEventListener('click', (event) => {

//     document.querySelectorAll('.block__item').forEach( ( item, i) => {
//         item.style.height = '0px';
//         item.style.marginRight = '150%';
//         item.style.marginLeft = '-150%';
//     });

//     setTimeout( () => {
//         arrItems = [];
//         numberLine = 0;
//         inputBlock.value = '';
//         listBlock.innerHTML = '';
        
//         if ( clearning.style.opacity == 1 ) {

//             infoBlock.textContent = 'Список очищено';
//             infoBlock.style.bottom = '-30px';
//             infoBlock.style.opacity = '1';

//             setTimeout( ()=>{

//                 infoBlock.style.opacity = '0';
//                 setTimeout( ()=> {
//                     infoBlock.style.bottom = '0px';
//                 }, 500);

//             }, 300);

//         }

//         clearning.style.height = '0px';
//         clearning.style.opacity = '0';
//         setTimeout( () => {
//             clearning.style.display = 'none';
//         }, 600);
//     }, 600);

// });

// ToDo with localStorage

const inputBlock = document.querySelector('.block__input');
const buttonBlock = document.querySelector('.block__button');
const listBlock = document.querySelector('.block__list');
const infoBlock = document.querySelector('.block__info');
const clearning = document.querySelector('.block__clear');
let point = 1;

function infoText(title) {
    infoBlock.textContent = title;
    infoBlock.style.bottom = '-30px';
    infoBlock.style.opacity = '1';

    setTimeout( ()=>{

        infoBlock.style.opacity = '0';
        setTimeout( ()=> {
            infoBlock.style.bottom = '0px';
        }, 500);

    }, 300);
}

clearning.addEventListener('click', () => {
    document.querySelectorAll('.block__item').forEach( item => {
        item.style.margin = '0px 150% 5px -150%';
    });
    setTimeout( () => {
        localStorage.clear();
        point = 1;
        listBlock.innerHTML = '';
        inputBlock.value = '';
        infoText('Список очищено');
        clearning.style.display = 'none';
    }, 600);
});

function addedNewItem() {
    if ( inputBlock.value != '' ) {
        let dataFromUser = inputBlock.value;
        localStorage.setItem(point, dataFromUser);
        const newPoint = document.createElement('div');
        newPoint.innerHTML = 
            `<div class="block__text"><span>${point}</span>. ${dataFromUser}</div><div class="block__trash"></div>`;
        newPoint.classList.add('block__item');
        listBlock.append(newPoint);
        point++;
        inputBlock.value = '';
        infoText('Добавлено новий пункт');
        clearning.style.display = 'flex';
    }
}

buttonBlock.addEventListener('click', () => {
    addedNewItem();
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        addedNewItem();
    }
});

listBlock.addEventListener('click', (event) => {
    if ( event.target.classList[0] == 'block__trash' ) {

        console.log(event.target.parentNode);
        event.target.parentNode.style.margin = '0px 150% 5px -150%';

        setTimeout(function(){

            
            localStorage.removeItem(Number(event.target.parentNode.firstChild.firstChild.textContent));
            infoText('Видалено один пункт');
            if ( localStorage.length < 1 ) {
                clearning.style.display = 'none';
            }
            repaint();
            
        }, 600);
    }
});

function repaint() {
    const arrFromStorage = Object.values(localStorage);
    localStorage.clear();
    listBlock.innerHTML = '';
    point = 1;
    arrFromStorage.forEach( (item) => {
        localStorage.setItem(point, item);
        const newPoint = document.createElement('div');
        newPoint.innerHTML = 
            `<div class="block__text"><span>${point}</span>. ${item}</div><div class="block__trash"></div>`;
        newPoint.classList.add('block__item');
        listBlock.append(newPoint);
        point++;
    });
    if ( localStorage.length > 0 ) {
        clearning.style.display = 'flex';
    }
}
repaint();

document.querySelector('.block__title').addEventListener('click', () => {
    console.log(Object.values(localStorage));
});