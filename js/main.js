const imgArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];
console.log(imgArray);

const imgListDom = document.querySelector('img_list');

let bigWrapperDom = "";

for (let i = 0; i < imgArray; i++ ){
    const newImgWrapper =   `<div class="image-wrapper">
    <img class="image" src="${imgArray[i]}" />
    </div>`;


    bigWrapperDom += newImgWrapper;
}

imgListDom.innerHTML = bigWrapperDom;