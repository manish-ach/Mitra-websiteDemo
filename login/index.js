function pass(){
    var x = document.getElementById("inp2");
    if (x.type == "password"){
      x.type = "text";
    } 
    else{
      x.type = "password";
    }
} 