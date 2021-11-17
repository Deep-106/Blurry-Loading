const loadingText = document.querySelector('.text');
const bgImage = document.querySelector('.bg');

let loadVal = 0;
let opacVal = 100;
let blurVal = 40;
const blurry = () => {
    loadVal++;

    if(loadVal > 99){
        clearInterval(interval);
    }
    loadingText.innerText = `${loadVal}%`;
    let cal = (opacVal - loadVal) / 100;
    loadingText.style.opacity = `${cal}`;
    cal = blurVal - (((loadVal)/100)*40);
    bgImage.style.filter = `blur(${cal}px)`;
};

let interval = setInterval(blurry, 40);
