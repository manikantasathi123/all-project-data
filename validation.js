function validated(){
    var email=document.getElementsByClassName("inputs");
    var cnfrmpwd=document.getElementsByClassName("inputs")
    if(email !==null && typeof email!=='undefined'&& email !=="" && cnfrmpwd !=null && typeof cnfrmpwd !=='undefined'){
    if(email.value==""||email.value==null){
       document.getElementById("usererror").setAttribute("style","visibility:visible;color:red"); 
       document.getElementById("cnferror").setAttribute("style","visibility:visible;color:red"); 
    }else{
        document.getElementById("usererror").setAttribute("style","visibility:visible;color:red"); 
    }
    if(cnfrmpwd.value.length <= 8 ||cnfrmpwd.value.length >25){
        document.getElementById("cnferror").setAttribute("style","visibility:visible;color:red"); 
    }else{
        document.getElementById("cnferror").setAttribute("style","visibility:visible;color:red"); 
    }
}
}