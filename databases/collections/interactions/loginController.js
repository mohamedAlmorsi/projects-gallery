$(document).ready ( function () {
    $(document).on ("click", "#btt", function () {
    $("#msg").css("visibility","hidden");
        /*
        check with db 
         if($("#pass").val()!= $("#passconf").val()){
        $("#err").text("Passwords Do Not Match");
        $("#err").css("visibility","visible");
       // $("#err").css("color","red");
    }*/
        
 if(($("#mail").val().length==0 )||
        ($("#pass").val().length==0))
{
    $("#msg").text("Missing Field (s)");
        $("#msg").css("visibility","visible");
} 
      
    });
});


$(document).ready ( function () {
    $(document).on ("click", "#btt1", function () {
    $("#msg").css("visibility","hidden");
        /*
        check with db 
         if($("#pass").val()!= $("#passconf").val()){
        $("#err").text("Passwords Do Not Match");
        $("#err").css("visibility","visible");
       // $("#err").css("color","red");
    }*/
        
    if(($("#mail").val().length==0 )){
    $("#msg").text("Enter Your mail");
        $("#msg").css("visibility","visible");} 
                    /*
                checl with db in else if 
       */
                    else{
                     $("#msg").text("wrong mail");
                    $("#msg").css("visibility","visible");
                    }
      
    });
});


