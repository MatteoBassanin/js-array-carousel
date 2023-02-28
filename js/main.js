const imgArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];
// console.log(imgArray);

const imgListDom = document.querySelector('img_list');

let bigWrapperDom = "";

for (let i = 0; i < imgArray.length; i++ ){
    const newImgWrapper =   `<div class="img-wrapper">
    <img class="img_cover" src="${imgArray[i]}" />
    </div>`;


    bigWrapperDom += newImgWrapper;
}

console.log(bigWrapperDom);

imgListDom.innerHTML = bigWrapperDom;

const imgWrapperDOM = document.getElementsByClassName('img-wrapper');


let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');