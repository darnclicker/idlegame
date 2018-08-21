var cookies = 0;

function cookieClick() {
    cookies = cookies+ 1;
    document.getElementById("cookies").innerHTML = cookies;
};

function updateGame(cookies_per_second) {
  cookies = cookies + cookies_per_second;
  document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;
var grandmas = 0;

function buyCursor(){
    var cursorCost = Math.floor(15 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	  cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(15 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyGrandma(){
    var grandmaCost = Math.floor(50 * Math.pow(1.3,grandmas));
    if(cookies >= grandmaCost){
        grandmas = grandmas + 1;
    	cookies = cookies - grandmaCost;
        document.getElementById('grandmas').innerHTML = grandmas;
        document.getElementById('cookies').innerHTML = cookies;
    };
    var nextCost = Math.floor(50 * Math.pow(1.3,grandmas));
    document.getElementById('grandmaCost').innerHTML = nextCost;
};

window.setInterval(function(){

  amount_of_cookies_to_add = cursors + (3*grandmas);
  updateGame(amount_of_cookies_to_add);

}, 1000);
