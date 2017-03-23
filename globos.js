$("button").click(function(){
    
    
    //animacion de los globos
    
     $("#globo").animate({top: '0px'},5000);
     $("#globo").animate({left: '500px'},5000);
       
    
    
$("#globo2").animate({bottom: '200px'},5000);
   $("#globo2").animate({left: '400px'},5000);
    
    $("#globo3").animate({bottom: '150px'},5000);
   $("#globo3").animate({left: '300px'},5000);
    
    $("#globo4").animate({bottom: '250px'},5000);
   $("#globo4").animate({left: '100px'},5000);
    
    $("#globo5").animate({bottom: '300px'},5000);
   $("#globo5").animate({left: '200px'},5000);
    
 
    
   

    // cuando pinchas y desaparecen los globos

$('#globo , #globo2 , #globo3 , #globo4 , #globo5').click(function(){
    $(this).css("display", "none");
});

//parado de globos
 $('#globo4').mouseover(function(){
       $('#globo4').stop(true);
       
    });

     });