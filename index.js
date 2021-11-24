var scor = 0;
var wrongans=0;
function correct() {
   
    scor++;
    
    document.getElementById("scor").innerHTML = scor;
}

function wrong() {
    wrongans=1;
     scor=0;
     document.getElementById("scor").innerHTML = scor;
    if(wrongans===1){
        console.log(wrongans);
    let x = document.querySelectorAll("ans1");
    x.disabled="true";
    }
    
    alert("Raspuns gresit");

}


