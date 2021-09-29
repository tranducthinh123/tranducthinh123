var slideIndex = 1;

	var slides = document.getElementsByClassName('slide');
		console.log(slides.length)

	var dots = document.getElementsByClassName('dot');
slideshow();

setInterval(function(){
	slideIndex = slideIndex + 1;
	slideshow();
}, 5000)

function slideshow(){

	if(slideIndex > slides.length){
		slideIndex = 1;
	}

	if(slideIndex < 1){
		slideIndex = slides.lenght;
	}

	for(var i = 0; i < slides.length; i++){
		slides[i].classList.remove('active');
	}
	for(var i = 0; i < slides.length; i++){
		dots[i].classList.remove('active-dot');
	}
	slides[slideIndex-1].classList.add('active');
    dots[slideIndex-1].classList.add('active-dot')
}

document.getElementById('next').addEventListener('click', function(){
	slideIndex = slideIndex + 1;
	slideshow();
})
document.getElementById('prev').addEventListener('click', function(){
	slideIndex = slideIndex - 1;
	slideshow();
})
function activeDot(n){
	slideIndex = n;
	slideshow();
}

