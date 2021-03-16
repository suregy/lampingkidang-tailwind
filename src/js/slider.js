const slides = document.querySelector('.slides');
const slidesCount = slides.childElementCount;
console.log(slidesCount);
const maxLeft = (slidesCount -1) * 100 * -1;

console.log(maxLeft);

let current = 0;

setInterval(() => {

	if(current > maxLeft) {
		current -= 100;
		console.log(slides.style.left = current + '%')
		slides.style.left = current + '%';
	}else{
		current = 0;
		slides.style.left = 0;
	}

}, 5000);