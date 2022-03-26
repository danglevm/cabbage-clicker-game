var cabbagecount = 0; //The number of times the cabbage has been clicked
var autoClicker = 0; //The number of auto clickers
var farms = 0;
var multiplier = 1;




//A function that adds 1 value to the counter everytime the cabbage is clicked
function add(){

  cabbagecount = cabbagecount + 1;
    update()

}






function save(){ 
  //function that saves the cabbage count, number of autoclickers
      localStorage.setItem ("cabbagecount", cabbagecount);
      localStorage.setItem ("autoClicker", autoClicker);
      localStorage.setItem ("farms", farms);
}



function timer(){
  //This function is used for the tracking the number of cookies there are to add into the autoClicker. Adding the initial value with the autoClicker generated value
        cabbagecount = cabbagecount + autoClicker;
        cabbagecount = cabbagecount + farms*2;
        update ()

}

setInterval (timer, 1000) //Calls the timer function every 10000 miliseconds (1 seconds)



function load (){
  //A function that loads the count of the cabbage and parse the integer, loads the count of the autoClick and parse it out
        cabbagecount = localStorage.getItem ("cabbagecount");
        cabbagecount = parseInt (cabbagecount);
        autoClicker = localStorage.getItem("autoClicker");
        autoClicker = parseInt(autoClicker);
        farms = localStorage.getItem ("farms");
        farms = parseInt (farms);
      
 
 //Sets the value of the element 'text' to the value of the item tagged with cabbagecount
update ()
}

  //Buys an autoClicker anytime the 'pointer' button is pressed
function buyAutoClicker (){
  //If the number of cabbages the player have is more than 12, they can buy one autoclicker - update a good formula for randomizing the cost later
    if (cabbagecount >= ((autoClicker+1)*12)){
        cabbagecount = cabbagecount - ((autoClicker+1)*12);
        autoClicker = autoClicker+1
        update()
  
  }
}

function buyFarm (){
  //A function, when invoked, buys a farm for the Player. Takes 30 cabbages away from the player
    if (cabbagecount >= ((farms+1)*30)){
        cabbagecount = cabbagecount - ((farms+1)*30);
        farms = farms + 1;
        update()
  
  }
}




function reset ()
//A function that resets the cabbage count back to zero
{
    cabbagecount = 0
    autoClicker = 0
    farms = 0
    cabbagecount = parseInt (cabbagecount)


//Sets the value of the element 'text' to variable cabbagecount = 0
update()
}

//Updates the value of the element 'text', the amount of autoClickers the player have and the cost of buying more autoClickers every time needed
function update(){
  document.getElementById ('text').value = cabbagecount;
  document.title = cabbagecount + " Cabbage"
  document.getElementById('amountAutoClicker').innerHTML = "You own " + autoClicker + " Auto Clickers";
  document.getElementById ('costAutoClicker').innerHTML =  ((autoClicker+1)*12)+" Cabbages";


  //Produces the number of farms the player has
  document.getElementById ('amountFarm').innerHTML = "You own " + farms + " Farms"
  document.getElementById ('costFarm').innerHTML = ((farms+1)*30) + " Cabbages"

  //Producing the number of cabbages produced by the player per second
  document.getElementById ('cabbagespersecond').innerHTML = "You are producing " + (((autoClicker)+(farms*2))*multiplier) + " cabbages per second";
  
}



