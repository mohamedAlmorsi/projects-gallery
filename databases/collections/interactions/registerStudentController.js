
$(document).ready ( function () {
    $(document).on ("click", "#btt", function () {
    $("#err").css("visibility","hidden");
    $("#suc").css("visibility","hidden");
         if($("#pass").val()!= $("#passconf").val()){
        $("#err").text("Passwords Do Not Match");
        $("#err").css("visibility","visible");
       // $("#err").css("color","red");
    }
        
   else if(($("#fname").val().length==0 )||
        ($("#lname").val().length==0) ||
        ($("#id").val().length==0) ||
        ($("#mail").val().length==0 )||
        ($("#pass").val().length==0)  ||
        ($("#passconf").val().length==0))
{
    $("#err").text("Missing Field (s)");
        $("#err").css("visibility","visible");
       // $("#err").css("color","red");
} 
        else{
            $("#suc").text("You've Registered Successfully , Now you Can Login");
            $("#suc").css("visibility","visible");
      //  $("#err").css("color","red");
        }
      
    });
});


