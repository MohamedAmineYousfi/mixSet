
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
		$('#btn').hide()

 })
$('#abt').on("click",function(){
 	    $('#about').show();
 	    
 	})

$('.active').on("click",function(){
 	    location.reload();
 	    
 	})
$('#contact').on("click",function(){
 	   $('#lastone').show();
 	    
 	})
$('#newbt').on("click",function(){
 	   $('#hits').show();
       $('#news').show();
 	    
 	})

