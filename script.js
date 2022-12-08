$(document).ready(function(){
   $('.main__img').slick({
      // dots: true,
      autoplay: true,
      autoplaySpeed:3000,
      arrows: false,
   })
})



$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .nav-bar').toggleClass('active')
   })
})

$(document).ready(function(){
   $('.questions__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(200)
   })
})

$(document).ready(function(){
   $('.services__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(200)
   })
})
$(document).ready(function(){
   $('.blog__title1').click(function(event){
      $(this).toggleClass('active').next().slideToggle(200)
   })
})

$(document).ready(function(){
   $('.about-us__title').click(function(event){
      $(this).toggleClass('active').next().slideToggle(200)
   })
})

let menuBlocks = []
let menuBlock = document.querySelectorAll('#menublocks')
for (let i = 0; i < menuBlock.length; i++) {
   let e = menuBlock[i];
menuBlocks.push(e)
}
// -----------------------------------------------------
let menuBtns = []
let menuBtn = document.querySelectorAll('#menubtns')
for (let i = 0; i < menuBtn.length; i++) {
   let e = menuBtn[i];
menuBtns.push(e)

}
// ------------------------------------------------------


for (let i = 0; i < menuBtns.length; i++) {
   const menuBtn = menuBtns[i];
   menuBtn.addEventListener('click', function(e){

      let index = menuBtns.indexOf(e.target)
   
      for (let i = 0; i < menuBtns.length; i++) {
         if(index != i){
            menuBlocks[i].style.display = 'none'
         }
         else{
            menuBlocks[i].style.display = 'grid'
         }
      }
   })
}

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});