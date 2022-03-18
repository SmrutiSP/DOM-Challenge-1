const stars = document.querySelectorAll('.fa-star');
const rating = document.querySelector('.rating');

for(let i=0;i<stars.length;i++) {
    stars[i].starVal = i+1;
    stars[i].addEventListener('click',printResult);
    stars[i].addEventListener('mouseover',applyYellowColor);
    stars[i].addEventListener('mouseout',applyBlackColor);
}

function printResult(event) {
    rating.textContent = event.target.starVal;
    applyOrangeColor(event);
}

function makeStarSolid(ele) {
    ele.classList.add('fa-solid');
    ele.classList.remove('fa-regular');
}

function makeStarRegular(ele) {
    ele.classList.add('fa-regular');
    ele.classList.remove('fa-solid');
}

function applyOrangeColor(event) {
    for(let i=0;i<stars.length;i++) {
        if(stars[i].starVal <= event.target.starVal) {
            makeStarSolid(stars[i]);
            if(!stars[i].classList.contains('orange')) stars[i].classList.toggle('orange');
            if(stars[i].classList.contains('yellow')) stars[i].classList.toggle('yellow');
            if(stars[i].classList.contains('black')) stars[i].classList.toggle('black');
        } else {
            makeStarRegular(stars[i]);
            stars[i].classList.remove('fa-solid');
            stars[i].classList.add('fa-regular');
            if(!stars[i].classList.contains('black')) stars[i].classList.toggle('black');
            if(stars[i].classList.contains('orange')) stars[i].classList.toggle('orange');
            if(stars[i].classList.contains('black')) stars[i].classList.toggle('black');
        }
    }
}

function applyYellowColor(event) {
    for(let i=0;i<stars.length;i++) {
        if(stars[i].starVal <= event.target.starVal) {
            if(!stars[i].classList.contains('orange')) {
                makeStarSolid(stars[i]);
                if(!stars[i].classList.contains('yellow')) stars[i].classList.toggle('yellow');
                if(stars[i].classList.contains('black')) stars[i].classList.toggle('black');
            }
        } else {
            break;
        }
    }
}

function applyBlackColor(event) {
    for(let i=0;i<stars.length;i++) {
        if(stars[i].starVal <= event.target.starVal) {
            if(!stars[i].classList.contains('orange')) {
                makeStarRegular(stars[i]);
                if(stars[i].classList.contains('yellow')) stars[i].classList.toggle('yellow');
                if(!stars[i].classList.contains('black')) stars[i].classList.toggle('black');
            }
        } else {
            break;
        }
    }
}
