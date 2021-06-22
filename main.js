
	console.log("linked")
		$('.sin').hide();
		$(".list").hide();
		$("#about").hide();
		$('#lastone').hide();
		$('#hits').hide();
         $('#news').hide();


//
 $('.addMore').on("click",function(){
 	    $('.sin').show();
		$(".list").show();
		$('#first').hide()
		$('.btn').hide()

 })
$('#abt').on("click",function(){
 	    $('#about').show();
 	    
 	})
$('.btn').on("click",function(){
 	    alert('Wrong Password or invalid account . You should subscribe first')
 	    
 	})
$('#sub').on("click",function(){
 	    alert('check your E-mail first');
 	    $('.sin').hide(); 
 	     $('#news').show();
 	    
 	})

$('.active').on("click",function(){
 	    location.reload();    
 	})
$('#img').on("click",function(){
 	    location.reload();
 	})

$('#contact').on("click",function(){
 	   $('#lastone').show();
 	   $('#first').hide()
		$('.btn').hide()

 	    
 	})
$('#newbt').on("click",function(){
 	   $('#hits').show();
       $('#news').show();
       $("#first").hide()
       $('.btn').hide()
 	    
 	})

