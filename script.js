var cabbagecount = 0; //The number of times the cabbage has been clicked
var autoClicker = 0; //The number of auto clickers
var farms = 0;

var clickmultiplier = 1; //The click multiplier variable

var farmMultiplier = 1;

var multiplier = 1;

var cabbagesProduced = 0;






//A function that adds a value to the counter everytime the cabbage is clicked
function add(){

  cabbagecount = cabbagecount + 1*clickmultiplier;
    update()

}




function save(){ 
  //function that saves the cabbage count, number of autoclickers
      localStorage.setItem ("cabbagecount", cabbagecount);
      localStorage.setItem ("autoClicker", autoClicker);
      localStorage.setItem ("farms", farms);
      localStorage.setItem ("clickmultiplier", clickmultiplier);
      localStorage.setItem ("farmMultiplier", farmMultiplier);

}


function reset ()
//A function that resets the cabbage count back to zero
{
    cabbagecount = 0
    autoClicker = 0
    farms = 0
    clickmultiplier = 1
    farmMultiplier = 1
    cabbagecount = parseInt (cabbagecount)


//Sets the value of the element 'text' to variable cabbagecount = 0
update()
}




function timer(){
  //This function is used for the tracking the number of cookies there are to add into the autoClicker. Adding the initial value with the autoClicker generated value
        cabbagecount = cabbagecount + autoClicker;
        cabbagecount = cabbagecount + farms*2*farmMultiplier;
        update ()

}

setInterval (timer, 1000) //Calls the timer function every 10000 miliseconds (1 seconds)



function load (){
  //A function that loads the stored value from the local web storage and inserts the player's saved value.
        cabbagecount = localStorage.getItem ("cabbagecount");
        cabbagecount = parseInt (cabbagecount);
        autoClicker = localStorage.getItem("autoClicker");
        autoClicker = parseInt(autoClicker);
        farms = localStorage.getItem ("farms");
        farms = parseInt (farms);
        clickmultiplier = localStorage.getItem("clickmultiplier");
        clickmultiplier = parseInt(clickmultiplier);
        farmMultiplier = localStorage.getItem("farmMultiplier");
        farmMultiplier = parseInt(farmMultiplier);
      
 
 //Sets the value of the element 'text' to the value of the item tagged with cabbagecount
update ()
}




//'Buy' functions section


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
//Buys the click multiplier upgrade

function buyMultiplier(){

  //Trying to exponentially increase the cost of buying a click multiplier by 2*factor
 let  x = Math.pow(3, clickmultiplier-1);
  if (cabbagecount >= ((clickmultiplier+1)*x*100)){
    cabbagecount = cabbagecount - ((clickmultiplier+1)*x*100);
    clickmultiplier = clickmultiplier +1;
    
    update()

  }
}

//Buys the farm multiplier upgrade

function buyFarmMultipliers (){
  let y = Math.pow(8, farmMultiplier);
    if (cabbagecount >= ((farmMultiplier+1)*y*100)){
    cabbagecount = cabbagecount - ((farmMultiplier+1)*y*g100);
    farmMultiplier = farmMultiplier +1;
    }
    update()
}


/*=====================================================================================
UPDATE method
=======================================================================================*/


//Updates the value of the element 'text', the amount of autoClickers the player have and the cost of buying more autoClickers every time needed
function update(){

  //Variable for the total number of cabbages produced per second.

  cabbagesProduced = (((autoClicker)+(farms*2*farmMultiplier)));





  
  //if cabbage count is lower or equals to 1, the title and the input display text will show 1 cabbage. If it is more than one then cabbage turns into its plural cabbages.
  if (cabbagecount <= 1){
  document.getElementById ('text').value = cabbagecount + " Cabbage";
  document.title = cabbagecount + " Cabbage - Cabbage Clicker";
  } else{
  document.getElementById ('text').value = cabbagecount + " Cabbages";
  document.title = cabbagecount + " Cabbages - Cabbage Clicker";
  }

  
  document.getElementById('amountAutoClicker').innerHTML = "You own " + autoClicker + " Auto Clickers";
  document.getElementById ('costAutoClicker').innerHTML =  ((autoClicker+1)*12)+" Cabbages";


  //Produces the number of farms the player has
  document.getElementById ('amountFarm').innerHTML = "You own " + farms + " Farms"
  document.getElementById ('costFarm').innerHTML = ((farms+1)*30) + " Cabbages"


//Variable for the cost of buying new click multipliers
  let  x = Math.pow(3, clickmultiplier-1);
  //Click Multiplier
  document.getElementById('costMultiplier').innerHTML = ((clickmultiplier+1)*x*100) + " Cabbages"
  document.getElementById('currentMultiplier').innerHTML = "Your current multiplier is x" + clickmultiplier


  //farm multiplier
  let y = Math.pow(8, farmMultiplier);

  document.getElementById('farmMultiplier').innerHTML = ((farmMultiplier+1)*y*100) + " Cabbages"
  document.getElementById('currentFarmMultiplier').innerHTML = "The current farm multiplier level is x" + farmMultiplier




  //The number of cabbages produced by the player per second. Cabbage production smaller than 1 - single noun. larger than 1 - plural cabbage.

  if (cabbagesProduced <= 1){
    document.getElementById ('cabbagespersecond').innerHTML = cabbagesProduced + " cabbage per second";
  } else{
    document.getElementById ('cabbagespersecond').innerHTML = cabbagesProduced + " cabbages per second";
  }
 
  
}



