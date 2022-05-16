const slider = document.querySelectorAll('.slider'),
      dots = document.querySelectorAll('.dot'),
      bDots = document.querySelectorAll('.big-dot'),
      content = document.querySelector('.slider-content');

const activeSlide = n => {
    content.style.transform = `translateY(-${100/4 * n}%)`;
    // for (let slide of slider){
    //     slide.classList.remove('active');
    // }
    // slider[n].classList.add('active');
}

const activeDot = n => {
    for (let dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
} 
const activebDot = n => {
    for (let bdot of bDots){
        bdot.classList.remove('active');
    }
    bDots[n].classList.add('active');
} 

dots.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        activeSlide(index);
    });
});

bDots.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        activeSlide(index);
    });
});
