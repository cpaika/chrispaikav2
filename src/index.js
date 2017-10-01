// Handle changing pages when user clicks on top bar
$(".nav a").on('click',function(e) {
   e.preventDefault(); // stops link form loading
   $('.content').hide(); // hides all content divs
   $('.navitem').removeClass("active"); // unselects all nav items
   $(this).addClass("active"); //select the current item
   $($(this).attr('href') ).show(); //get the href and use it find which div to show
});