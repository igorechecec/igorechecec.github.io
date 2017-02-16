(function(){

	window.onload = init;

	function init(){
        
        humburgerIcon();
        
    }
    
    function humburgerIcon (){
        
        document.querySelector('.icon_humb').addEventListener('click', function (){
        
            this.classList.toggle('active');
        
        });
    }

})();


