let mode=0;
function changemode()
{
    switch(mode)
     {
        case 0:mode=1;
        document.body.style.backgroundColor="#010126";
        document.getElementById("maincontainer").style.borderColor="white";
        document.getElementById("posts1").style.borderColor="white";
        document.getElementById("posts2").style.borderColor="white";
        document.getElementById("posts3").style.borderColor="white";
        document.body.style.color="white";
        document.getElementById("home").style.color="white";
        document.getElementById("bulb").style.color="white";
        document.getElementById("bulb").className = "bi bi-lightbulb";
        break;
    case 1:

           mode=0;
        document.body.style.backgroundColor="white";
        document.getElementById("maincontainer").style.borderColor="black";
        document.getElementById("posts1").style.borderColor="black";
        document.getElementById("posts2").style.borderColor="black";
        document.getElementById("posts3").style.borderColor="black";
        document.body.style.color="black";
        document.getElementById("home").style.color="black";
        document.getElementById("bulb").style.color="black";
        document.getElementById("bulb").className = "bi bi-lightbulb-fill";
        break;

     }
}