
    
        $("img.b-body__img").click(function isFace(e){
  alert($(this).attr('alt')); 
        //console.log($(this).attr('alt')); 
            
   
           
            $('.b-face__img-1').attr("src", $(this).attr('alt')+"_1_big_face.png"); 
           
             $('.b-face__img-1').attr("alt", $(this).attr('alt')+"_1"); 
            
            
    
            $('.b-face__img-2').attr("src", $(this).attr('alt')+"_2_big_face.png");
            
             $('.b-face__img-2').attr("alt", $(this).attr('alt')+"_2"); 
            
            
            $('.b-face__img-3').attr("src", $(this).attr('alt')+"_3_big_face.png");
             $('.b-face__img-3').attr("alt", $(this).attr('alt')+"_3"); 
            
          
    $('.b-person_bodyimg').attr("src", $(this).attr('alt')+"_big.png");  

            
        var elem = document.getElementsByClassName('b-face__img1');
       
     console.log(elem.src);
            
            
     e.preventDefault();
  return false; 
          
  
    });  




   $("img.b-face__img").click(function isSmile(e){
  alert($(this).attr('alt')); 
        console.log($(this).attr('alt')); 
            
   
          

      $('.b-person_faceimg').attr("src", $(this).attr('alt')+"_big_face.png"); 

    
    
 });

