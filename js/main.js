const imgArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];


const imgListDom = document.querySelector('.img_list');

let bigWrapperDom = "";

for (let i = 0; i < imgArray.length; i++ ){
    const newImgWrapper =   `<div class="img_wrapper">
    <img class="img_cover" src="img/${imgArray[i]}" />
    </div>`;


    bigWrapperDom += newImgWrapper;
}

console.log(bigWrapperDom);

imgListDom.innerHTML = bigWrapperDom;

const imgWrapperDOM = document.getElementsByClassName('img_wrapper');


let activeImage = 0;

imgWrapperDOM[activeImage].classList.add('show');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');


nextDom.addEventListener('click', 
    function() {
        if (activeImage < imgWrapperDOM.length - 1) {

            imgWrapperDOM[activeImage].classList.remove('show');
            activeImage++;
            imgWrapperDOM[activeImage].classList.add('show');


            prevDom.classList.remove('hide');
        }
        if (activeImage == imgWrapperDOM.length - 1) {
            nextDom.classList.add('hide');
        }
    }
);



prevDom.addEventListener('click', 
    function() {
        if (activeImage > 0) {

            imgWrapperDOM[activeImage].classList.remove('show');
            activeImage--;
            imgWrapperDOM[activeImage].classList.add('show');

            nextDom.classList.remove('hide');
            
        }
        if (activeImage == 0) {
            prevDom.classList.add('hide');
        }
    }
);