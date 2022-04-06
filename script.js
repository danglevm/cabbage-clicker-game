var cabbagecount = 0; //The number of times the cabbage has been clicked
var autoClicker = 0; //The number of auto clickers
var farms = 0; //no of farms
var factory = 0; //no of factories
var corporate = 0; //no of corporate
var conglomerate = 0; //no of conglomerate

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
      localStorage.setItem ("factory", factory);

}


function reset ()
//A function that resets the cabbage count back to zero
{
    cabbagecount = 0
    autoClicker = 0
    farms = 0
    clickmultiplier = 1
    farmMultiplier = 1
    factory = 0
    cabbagecount = parseInt (cabbagecount)


//Sets the value of the element 'text' to variable cabbagecount = 0
update()
}




function timer(){
  //This function is used for the tracking the number of cookies there are to add into the autoClicker. Adding the initial value with the autoClicker generated value
        cabbagecount = cabbagecount + autoClicker+ farms*2*farmMultiplier + factory*10 +corporate +conglomerate;
    
        
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
        factory = localStorage.getItem("factory");
        factory = parseInt.getItem(factory);
      
 
 //Sets the value of the element 'text' to the value of the item tagged with cabbagecount
update ()
}



/*=====================================================================================
STORE SECTION
=======================================================================================*/


  //Buys an autoClicker anytime the 'pointer' button is pressed
function buyAutoClicker (){
  let numberAutoClick  = Math.floor(Math.pow (1.5, autoClicker));
  //If the number of cabbages the player have is more than 12, they can buy one autoclicker - update a good formula for randomizing the cost later
    if (cabbagecount >= ((autoClicker+1)*12*numberAutoClick)){
        cabbagecount = cabbagecount - ((autoClicker+1)*12*numberAutoClick);
        autoClicker = autoClicker+1
        update()
  
  }
}

function buyFarm (){

let cabbageCounter = Math.pow (2, farms)
  //A function, when invoked, buys a farm for the Player. Takes a certain amount of cabbages away from the player
    if (cabbagecount >= ((farms+1)*30*cabbageCounter)){
        cabbagecount = cabbagecount - ((farms+1)*30*cabbageCounter);
        farms = farms + 1;
        update()
  
  }


}

//Function to buy one factory upgrade
function buyFactory(){
  let factoryCount = Math.pow(2, factory)

  if (factory >= ((factory + 1)*1500*factory)){
    cabbagecount = cabbagecount - ((factory + 1)*1500*factory);
    factory = factory +1;
    update()
  }
  
}


/*=====================================================================================
UPGRADES SECTION
=======================================================================================*/




//Buys the click multiplier upgrade

function buyMultiplier(){

  //Trying to exponentially increase the cost of buying a click multiplier by 4*factor
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
    cabbagecount = cabbagecount - ((farmMultiplier+1)*y*100);
    farmMultiplier = farmMultiplier +1;
    }
    update()
}




/*=====================================================================================
UPDATE method
=======================================================================================*/


//Updates the value of the element 'text', the amount of autoClickers the player have and the cost of buying more autoClickers every time needed
function update(){
  
  
  /*++++++++++++++++++++++++++VARIABLE DECLARATION+++++++++++++++++++++++++++ */

  let cabbageCounter = Math.pow (2, farms)
  let numberAutoClick = Math.floor(Math.pow (1.5, autoClicker));
  let  clickMultiplierCount = Math.pow(3, clickmultiplier-1);
  let y = Math.pow(8, farmMultiplier);
  let factoryCount = Math.pow(2, factory);
  //Variable for the total number of cabbages produced per second.

  cabbagesProduced = (((autoClicker)+(farms*2*farmMultiplier)+(factory*10)));





    /*++++++++++++++++++++++++++STORE SECTION++++++++++++++++++++++++++ */
  //if cabbage count is lower or equals to 1, the title and the input display text will show 1 cabbage. If it is more than one then cabbage turns into its plural cabbages.
  if (cabbagecount <= 1){
  document.getElementById ('text').value = cabbagecount + " Cabbage";
  document.title = cabbagecount + " Cabbage - Cabbage Clicker";
  } else{
  document.getElementById ('text').value = cabbagecount + " Cabbages";
  document.title = cabbagecount + " Cabbages - Cabbage Clicker";
  }


  //Number of autoclickers the player has
  if (autoClicker <=1){
  document.getElementById('amountAutoClicker').innerHTML = autoClicker + " Cabbage Harvester";
  document.getElementById ('costAutoClicker').innerHTML =  ((autoClicker+1)*12*numberAutoClick)+" Cabbages";
  } else{
    document.getElementById('amountAutoClicker').innerHTML = autoClicker + " Cabbage Harvesters";
  document.getElementById ('costAutoClicker').innerHTML =  ((autoClicker+1)*12*numberAutoClick)+" Cabbages";
  }


  //Number of farms the player has
  if (farms <=1){
    document.getElementById ('amountFarm').innerHTML = farms + " Farm"
    document.getElementById ('costFarm').innerHTML = ((farms+1)*30*cabbageCounter) + " Cabbages"
    } else{
      document.getElementById ('amountFarm').innerHTML = farms + " Farms"
      document.getElementById ('costFarm').innerHTML = ((farms+1)*30*cabbageCounter) + " Cabbages"
    }
  
    if (factory <=1){
      document.getElementById ('amountFactory').innerHTML = factory + " Factory"
      document.getElementById ('costFactory').innerHTML = ((factory+1)*1500*factoryCount) + " Cabbages"
      } else{
        document.getElementById ('amountFactory').innerHTML = factory + " Factories"
        document.getElementById ('costFactory').innerHTML = ((factory+1)*1500*factoryCount) + " Cabbages"
      }
    
  



  
  /*++++++++++++++++++++++++++UPGRADES SECTION+++++++++++++++++++++++++++ */

//Variable for the cost of buying new click multipliers
  
  //Click Multiplier
  document.getElementById('costMultiplier').innerHTML = ((clickmultiplier+1)*clickMultiplierCount*100) + " Cabbages"
  document.getElementById('currentMultiplier').innerHTML = "x" + clickmultiplier +" current multiplier"


  //farm multiplier


  document.getElementById('farmMultiplier').innerHTML = ((farmMultiplier+1)*y*100) + " Cabbages"
  document.getElementById('currentFarmMultiplier').innerHTML = "x" + farmMultiplier+ " current farm multiplier"




  //The number of cabbages produced by the player per second. Cabbage production smaller than 1 - single noun. larger than 1 - plural cabbage.

  if (cabbagesProduced <= 1){
    document.getElementById ('cabbagespersecond').innerHTML = cabbagesProduced + " cabbage per second";
  } else{
    document.getElementById ('cabbagespersecond').innerHTML = cabbagesProduced + " cabbages per second";
  }
 
  
}



