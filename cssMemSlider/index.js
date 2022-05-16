const slider = document.querySelectorAll('.slider'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (let slide of slider){
        slide.classList.remove('active');
    }
    slider[n].classList.add('active');
}

const activeDot = n => {
    for (let dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
} 

dots.forEach((item,indexDot) =>{
    item.addEventListener('click', () =>{
    index = indexDot;
    activeSlide (index);
    })
})