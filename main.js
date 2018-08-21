var cookies = 0;

function cookieClick(number) {
    cookies = cookies + number;
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
    var grandmaCost = Math.floor(50 * Math.pow(1.3,grandmas));     //works out the cost of this grandma
    if(cookies >= grandmaCost){                                   //checks that the player can afford the grandma
        grandmas = grandmas + 1;                                   //increases number of grandmas
    	cookies = cookies - grandmaCost;                          //removes the cookies spent
        document.getElementById('grandmas').innerHTML = grandmas;  //updates the number of grandmas for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(50 * Math.pow(1.3,grandmas));       //works out the cost of the next grandma
    document.getElementById('grandmaCost').innerHTML = nextCost;  //updates the grandma cost for the user
};

window.setInterval(function(){

  amount_of_cookies_to_add = cursors + (3*grandmas);
  cookieClick(amount_of_cookies_to_add);

}, 1000);
