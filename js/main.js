window.onload = startSlide;

function startSlide(){

	var actualNumber = 1,
		//slide = document.getElementsByClassName('slide')[0];
		containerSlide = document.getElementsByClassName('container')[0];
		slide = document.getElementsByClassName('slide');
		slide = [].slice.call(slide);
	//alert(slide);

	containerSlide.onclick = function(e){
		
		var target = e.target;

		target.setAttribute('class', 'active');
		
	};

	slide.forEach( function(element, i, slide) {
		//alert(element.outerHTML);
	});
	
}