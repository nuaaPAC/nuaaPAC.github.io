const img = document.querySelector('.slideshow img');
const arr = ['./images/1_inchworm.png', './images/2_MDMA.png', './images/3_stage.png', './images/4_three_rhombus_RCM.png', './images/5.png'];
const points = document.querySelectorAll('.point')

let index = 1;
setInterval(() => {
    img.src = arr[index];
    clearPoint();
    points[index].style.backgroundColor = 'rgb(214, 206, 206)';
    index++;
    if (index === arr.length) {
        index = 0;
    }
}, 3000)

for (let i = 0; i < as.length; i++) {
    points[i].addEventListener('click', () => {
        index = i;
        img.src = arr[index];
        clearPoint();
        points[i].style.backgroundColor = 'rgb(214, 206, 206)';
    })
}


const clearPoint = () => {
    for (let i = 0; i < points.length; i++) {
        points[i].style.backgroundColor = 'transparent';
    }
}

points[0].style.backgroundColor = 'rgb(214, 206, 206)';
