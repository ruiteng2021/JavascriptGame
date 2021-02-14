function getRealName(realname){
    let real = document.getElementById(realname).value;
    document.getElementById('real_name').innerHTML = real;
}

function getUserName(username){
    let user = document.getElementById(username).value;
    document.getElementById('user_name').innerHTML = user;
}

function getPoints(points){
    let pts = document.getElementById(points).value;
    document.getElementById('user_points').innerHTML = pts;
}

function pickAvatar(picked){
    let avarta = document.getElementById(picked).value;
    document.getElementById('myavatar').innerHTML = avarta;
    document.getElementById('avarta_img').innerHTML = ("<img src='asset/images/"+ avarta + ".jpg'/>");
}

function pickWeapons(){
    let i=0;
    let j=0;
    let k=0;
    let weapon1="";
    let weapon2="";
    let weapon3="";

    for (i=0;i<=9;i++){
        if (document.getElementById('w'+i).checked == true){
            weapon1 = document.getElementById('w'+i).value;
            document.getElementById('weapon_one').innerHTML = weapon1;
            break;
        }
    }

    for (j=(i+1);j<=9;j++){
        if (document.getElementById('w'+j).checked == true){
            weapon2 = document.getElementById('w'+j).value;
            document.getElementById('weapon_two').innerHTML = weapon2;
            break;
        }
    }

    for (k=(j+1);k<=9;k++){
        if (document.getElementById('w'+k).checked == true){
            weapon3 = document.getElementById('w'+k).value;
            document.getElementById('weapon_three').innerHTML = weapon3;
            break;
        }
    }
}

function pickSupplies(){
    let i=0;
    let j=0;
    let k=0;
    let m=0;
    let p=0;
    let supply1="";
    let supply2="";
    let supply3="";
    let supply4="";
    let supply5="";

    for (i=0;i<=9;i++){
        if (document.getElementById('s'+i).checked == true){
            supply1 = document.getElementById('s'+i).value;
            document.getElementById('supply_one').innerHTML = supply1;
            break;
        }
    }
    for (j=(i+1);j<=9;j++){
        if (document.getElementById('s'+j).checked == true){
            supply2 = document.getElementById('s'+j).value;
            document.getElementById('supply_two').innerHTML = supply2;
            break;
        }
    }
    for (k=(j+1);k<=9;k++){
        if (document.getElementById('s'+k).checked == true){
            supply3 = document.getElementById('s'+k).value;
            document.getElementById('supply_three').innerHTML = supply3;
            break;
        }
    }
    for (m=(k+1);m<=9;m++){
        if (document.getElementById('s'+m).checked == true){
            supply4 = document.getElementById('s'+m).value;
            document.getElementById('supply_four').innerHTML = supply4;
            break;
        }
    }
    for (p=(m+1);p<=9;p++){
        if (document.getElementById('s'+p).checked == true){
            supply5 = document.getElementById('s'+p).value;
            document.getElementById('supply_five').innerHTML = supply5;
            break;
        }
    }
}

function startGame(){
    // initialize variables and prompt for information
    let gender = "boy";
    let city = " ";
    let monster = " ";
    let food = " ";
    let drink = " ";
    //check for gender with charAt()
    //alert("XXX");
    numYears = prompt("Enter a number greater than 0: ");
    gender = prompt("It is a strory about a boy or a girl: ");
    let letter = gender.charAt(0);
    gender = (letter == "b" || letter =="B")? "boy" : "girl";
    pronoun = (gender == "boy")? "he" : "she";
    name = prompt("Enter the hero's name: ");
    city = prompt("Enter the name of a city: ");
    monster = prompt("Enter a type of monster: ");
    food = prompt("Enter a food you like: ");
    drink = prompt("Enter a drink you like: ");
       
    
    document.getElementById("content").innerHTML =("Once upon a time, about " + numYears + " years ago, there was a "+ 
    gender + " named " + name + ". " + name + " lived in a small cabin in the woods just outside " + 
    city + " limits.</p> <p>" + name + " enjoyed walking in the woods every day until... One day " + 
    pronoun + " came upon a " + monster + " sitting on a log eating a " + food + ".</p> <p>The " + 
    monster + " jumped up, spilling his " + drink + ". " + name + " ran home as fast as " + 
    pronoun + " could but the " + monster + " followed and ...</p><h3 style='border-bottom: none;'>What happened? You decide! </h3> <p>Ending 1: The " + 
    monster + " and " + name + " became best friends and lived in " + name + "'s house happily ever after.</p> <p>Ending 2: The " + 
    monster + " overpowered " + name + " and gobbled down all the " + food + " and " + drink + " in " + 
    name + "'s refrigerator.</p> <p>Ending 3: " + name + " screamed mean things at the " + 
    monster + ", causing the " + monster + " to turn and run back to the woods, never to be seen again.</p>");
}

function startFortune()
{
 	//initialize variables: edit fortunes if you want
	var num = 0;
	var question = " ";
	var fortune1 = "Absolutely ";
	var fortune2 = "No way ";
	var fortune3 = "Probably";
	var fortune4 = "Doubtful";
	var fortune5 = "Could be";
	var fortune6 = "Madame Vadoma cannot answer such a question. ";
	var fortune7 = "You must find the answer within yourself. ";
	var fortune8 = "Yes, of course! ";
	var fortune9 = "You don't really believe this works, do you? ";
	var fortune10 = "Madame Vadoma wonders about that too. ";
	
	num = (Math.floor(Math.random() * 10)) + 1;
	question = prompt("What is your question? ", " ");
	switch(num)
	{
        //code here
        case 1:
            document.getElementById('content').innerHTML =  fortune1;
            break;
        case 2:
            document.getElementById('content').innerHTML =  fortune2;
            break;
        case 3:
            document.getElementById('content').innerHTML =  fortune3;
            break;
        case 4:
            document.getElementById('content').innerHTML =  fortune4;
            break;
        case 5:
            document.getElementById('content').innerHTML =  fortune5;
            break;
        case 6:
            document.getElementById('content').innerHTML =  fortune6;
            break;
        case 7:
            document.getElementById('content').innerHTML =  fortune7;
            break;
        case 8:
            document.getElementById('content').innerHTML =  fortune8;
            break;
        case 9:
            document.getElementById('content').innerHTML =  fortune9;
            break;
        case 10:
            document.getElementById('content').innerHTML =  fortune10;
            break;
	}
}

function startFortune2()
{
 	//initialize variables: edit fortunes if you want
	let num = 0;
	let question = " ";
	let fortune1 = "Absolutely ";
	let fortune2 = "No way ";
	let fortune3 = "Probably";
	let fortune4 = "Doubtful";
	let fortune5 = "Could be";
	let fortune6 = "You will meet your soul mate very soon. ";
	let fortune7 = "You can get an A in this calss if you work hard. ";
	let fortune8 = "A good job is in your future. ";
	let fortune9 = "No one likes a show-off";
	let fortune10 = "Don't believe everything you read. ";
	
	num = (Math.floor(Math.random() * 10)) + 1;
	question = prompt("What is your question? ", " ");
	switch(num)
	{
        //code here
        case 1:
            document.getElementById('content').innerHTML =  fortune1;
            break;
        case 2:
            document.getElementById('content').innerHTML =  fortune2;
            break;
        case 3:
            document.getElementById('content').innerHTML =  fortune3;
            break;
        case 4:
            document.getElementById('content').innerHTML =  fortune4;
            break;
        case 5:
            document.getElementById('content').innerHTML =  fortune5;
            break;
        case 6:
            document.getElementById('content').innerHTML =  fortune6;
            break;
        case 7:
            document.getElementById('content').innerHTML =  fortune7;
            break;
        case 8:
            document.getElementById('content').innerHTML =  fortune8;
            break;
        case 9:
            document.getElementById('content').innerHTML =  fortune9;
            break;
        case 10:
            document.getElementById('content').innerHTML =  fortune10;
            break;
	}
}

function encodeIt()
{
    document.getElementById("message").innerHTML  = ("<h2>&nbsp;</h2>");
    //initialize variables
    let msg = prompt('Enter your message.', ' ');
    let newmsg = ' ';
    let upCaseCode = 155;
    let newCode = 0;
    let lowCaseCode = 219;
    let specialCode = 3;

    //the loop encodes each letter in the message string
    for (let j=0; j<msg.length; j++)
    {
        //check for upppercase letters and encode them
        if ((msg.charCodeAt(j) >= 65) && (msg.charCodeAt(j) <= 90))
            newCode = (upCaseCode - msg.charCodeAt(j));
        else if ((msg.charCodeAt(j) >= 97) && (msg.charCodeAt(j) <= 122))
        //check for lowercase letters and encode them
            newCode = (lowCaseCode - msg.charCodeAt(j));
        else if ( ( (msg.charCodeAt(j) > 90) && 
                    (msg.charCodeAt(j) < 97) ) ||
                    (msg.charCodeAt(j) < 65) )
        //check for numbers and special characters and encode them
            newCode = (msg.charCodeAt(j) + specialCode);
             
        //add each encoded character to the new message
        newmsg = newmsg + ' ' + String.fromCharCode(newCode);
    }
    //display the encoded message on the web page
    document.getElementById('secret').innerHTML = ( '<h2>' + newmsg + '</h2>')
    //decide if original message should be shown
    let choice = prompt('Do you want the original message displayed? Yes or No?', ' '); 
    if ((choice.charAt(0) == 'y') || (choice.charAt(0) == 'Y'))
        document.getElementById('message').innerHTML = ('<h2>' + msg + '</h2>');
}

function encodeIt2()
{
    document.getElementById("message").innerHTML  = ("<h2>&nbsp;</h2>");
    //initialize variables
    let msg = prompt('Enter your message.', ' ');
    let newmsg = '';
    //let upCaseCode = 155;
    let newCode = 0;
    //let lowCaseCode = 219;
    //let specialCode = 3;

    //the loop encodes each letter in the message string
    for (let j=0; j<msg.length; j++)
    {        
        //check for upppercase letters and encode them
        if ((msg.charCodeAt(j) >= 65) && (msg.charCodeAt(j) <= 90)){
            newCode = Math.floor((Math.random() * 25) + 65);
            if ((newCode>=65) && (newCode<=85))
                newCode+=5; // jump 5 chracters
            else if ((newCode>85) && newCode<=90)
                newCode-=21; // start from first upper case character
        }
        else if ((msg.charCodeAt(j) >= 97) && (msg.charCodeAt(j) <= 122)){
            newCode = Math.floor((Math.random() * 25) + 97);
            if ((newCode>=97) && (newCode<=117))
                newCode+=5;
            if ((newCode>117) && (newCode<=122))
                newCode-=21; // start from first lower case character
        }
        else
            newCode = msg.charCodeAt(j); // number and puncture will not be changed
        newmsg = newmsg + ' ' + String.fromCharCode(newCode);
    }
    //display the encoded message on the web page
    document.getElementById('secret').innerHTML = ( '<h4>' + newmsg + '</h4>')
    //decide if original message should be shown
    let choice = prompt('Do you want the original message displayed? Yes or No?', ' '); 
    if ((choice.charAt(0) == 'y') || (choice.charAt(0) == 'Y'))
        document.getElementById('message').innerHTML = ('<h4>' + msg + '</h4>');
}

function battleIt()
{
    //initialize variables
    let heroPlay = 0;
    let heroPts =  100;
    let trollPts = 100;
    let trollPlay = 0;
    let rocks = 'magic rocks';
    let sword = 'the sword';
    let arrow = 'bow & arrow';
    let heroChoice = ' ';
    let trollChoice = ' ';

    document.getElementById('trollPts').innerHTML = (trollPts);
    document.getElementById('heroPts').innerHTML = (heroPts);
    document.getElementById('playerWeapon').innerHTML = ('Your Weapon:');
    document.getElementById('trollWeapon').innerHTML = ("The Troll's weapon:");
    document.getElementById('winner').innerHTML = ('&nbsp;');
    //fill HTML page
    
    //loop repeats until troll or player get 130 points
    while ((trollPts < 130) && (heroPts < 130)) 
    {
        // get player's weapon
        heroPlay = parseInt(prompt("what weapon do you choose? Enter 1 for magic rocks (enter 1), 2 for the sword, or 3 for the bow and arrow: (Enter 4 to leave the game at any tome)", " "));
        
        if (heroPlay == 4) break;
        // get troll's weapon
        trollPlay = Math.floor(Math.random()*3 + 1);
        // assign weapon to player and troll
        if (trollPlay == 1)
            trollChoice = rocks;
        if (trollPlay == 2)
            trollChoice = sword;
        if (trollPlay == 3)
            trollChoice = arrow;
        if (heroPlay == 1)
            heroChoice = rocks;
        if (heroPlay == 2)
            heroChoice = sword;
        if (heroPlay == 3)
            heroChoice = arrow
        
        //display weapon selections
        document.getElementById('playerWeapon').innerHTML = ('Your weapon: ' + heroChoice);
        document.getElementById('trollWeapon').innerHTML = ("The troll's weapon: " + trollChoice);
        alert("This round of the battle bigins now!");

        //find the winner
        if (((trollPlay == 1) && (heroPlay == 3)) ||
              ((trollPlay == 2) && (heroPlay == 1)) ||
              ((trollPlay ==3) && (heroPlay ==2))){
            document.getElementById("winner").innerHTML = ("<img src='asset/images/troll.jpg'/>");
            trollPts += 10;
            heroPts -= 10;
            document.getElementById('trollPts').innerHTML = (trollPts);
            document.getElementById('heroPts').innerHTML = (heroPts);
        }

        if (((trollPlay == 3) && (heroPlay == 1)) ||
              ((trollPlay == 1) && (heroPlay == 2)) ||
              ((trollPlay ==2) && (heroPlay ==3))){
            document.getElementById('winner').innerHTML = ("<img src='asset/images/wizard.jpg'/>");
            trollPts -= 10;
            heroPts += 10;
            document.getElementById('trollPts').innerHTML = (trollPts);
            document.getElementById('heroPts').innerHTML = (heroPts);
        }

        if (((trollPlay == 1) && (heroPlay == 1)) ||
              ((trollPlay == 2) && (heroPlay == 2)) ||
              ((trollPlay ==3) && (heroPlay ==3))){
            document.getElementById('winner').innerHTML = ("This round is tie. New weapon must be chosen...");
        }

        if (heroPlay == 4){
            document.getElementById('winner').innerHTML = ("It is true: when you run, you live to fight another day. See you again soon!");           
        }

        if (trollPts >= 130){
            document.getElementById('winner').innerHTML = ("The battle has been fought valiently but the troll has beaten you. Go home and nurse your wounds.");           
        }

        if (heroPts >= 130){
            document.getElementById('winner').innerHTML = ("The battle has been fought valiently and you have prevailed! Congratuations!");           
        }
    

    }
    //display the final winner		
}

function game21()
{
    //initialize variables
    let playerPts1 =  0;
    let playerPts2 =  0;
    let playerPts3 =  0;

    let playerPts =  0;
    let dealerPts1 = 0;
    let dealerPts2 = 0;
    let dealerPts = 0;
    let playerTotalpts = 0;
    let dealerTotalpts = 0;


    document.getElementById('winner').innerHTML = ('&nbsp;');
    //fill HTML page
    
    //loop repeats until troll or player get 130 points

    do
    {
        // ramdon generate player's and dealer's points
        // ACE will be 11, Jack, Queen and King will be 10
        playerPts1 = Math.floor((Math.random() * 14) + 1);
        if (playerPts1 == 1)
            playerPts1 = 11;
        if(playerPts1 == 11 || playerPts1 == 12|| playerPts1 == 13)
            playerPts1 = 10;

        playerPts2 = Math.floor((Math.random() * 14) + 1);
        if(playerPts2 == 1)
            playerPts2 = 11;
        if(playerPts2 == 11 || playerPts2 == 12|| playerPts2 == 13)
            playerPts2 = 10;

        playerPts = playerPts1 + playerPts2;

        dealerPts1 = Math.floor((Math.random() * 14) + 1);
        if (dealerPts1 == 1)
            dealerPts1 = 11;
        if(dealerPts1 == 11 || dealerPts1 == 12|| dealerPts1 == 13)
            dealerPts1 = 10;

        dealerPts2 = Math.floor((Math.random() * 14) + 1);
        if(dealerPts2 == 1)
        dealerPts2 = 11;
        if(dealerPts2 == 11 || dealerPts2 == 12|| dealerPts2 == 13)
        dealerPts2 = 10;

        dealerPts = dealerPts1 + dealerPts2;

        let choice = prompt('Player wants to another card? Yes or No? Or press Cancel to show last result', '');
        while ((choice.charAt(0) == 'y') || (choice.charAt(0) == 'Y')){
            playerPts3 = Math.floor((Math.random() * 14) + 1);
            if(playerPts3 == 1)
                playerPts2 = 11;
            if(playerPts3 == 11 || playerPts3 == 12|| playerPts3 == 13)
                playerPts3 = 10;
            
            playerPts = playerPts + playerPts3;
            choice = '';
            choice = prompt('Another more card? Yes or No?', '');
        }

        document.getElementById('playerPts').innerHTML = (playerPts);
        document.getElementById('dealerPts').innerHTML = (dealerPts);
        
        if (playerPts == dealerPts)
            document.getElementById('winner').innerHTML = ("Tie");
        else {
            if ((playerPts > 21) && (dealerPts > 21)) 
                document.getElementById('winner').innerHTML = ("No one wins");
            else if ((playerPts > 21) && (dealerPts < 21) ) 
                document.getElementById('winner').innerHTML = ("Dealer wins");
            else if ((playerPts < 21) && (dealerPts > 21) )
                document.getElementById('winner').innerHTML = ("Player wins");
            else if ((playerPts < 21) && (dealerPts < 21)) {
                if ((21 - playerPts) < (21 - dealerPts))
                    document.getElementById('winner').innerHTML = ("Player wins");
                else
                    document.getElementById('winner').innerHTML = ("Dealer wins");
            }
        }
        dealerTotalpts = dealerTotalpts + dealerPts;
        playerTotalpts = playerTotalpts + playerPts;

    }while ((dealerTotalpts <= 200) || (playerTotalpts <= 200)) 

}

let computerRoll;
function rolling(){
    let again;
    let playerTotal = 0;
    for (let i=0; i<100;i++){

        if (playerTotal >= 100){
            again = prompt("Play again?", "");
            if(again=="yes"){
                playerTotal = 0;
                continue;
            }
            else
                break;
        }

        let playerRoll1 = Math.floor((Math.random() * 6) + 1);
        let playerRoll2 = Math.floor((Math.random() * 6) + 1);
        let computerRoll1 = Math.floor((Math.random() * 6) + 1);
        let computerRoll2 = Math.floor((Math.random() * 6) + 1);
    
        //playerRoll1 = 1;
        //playerRoll2 = 1;
        //computerRoll1 = 3;
        //computerRoll2 = 3;
    
        let playerRoll = playerRoll1 + playerRoll2;
        computerRoll = computerRoll1 + computerRoll2;
        document.getElementById('player').innerHTML = ("Player Rolling: "+ playerRoll1 +" and "+ playerRoll2 );
        document.getElementById('computer').innerHTML = ("Computer Rolling: "+ computerRoll1 + " and " + computerRoll2);
    
        if (playerRoll > computerRoll) {
            if (playerRoll1==playerRoll2)
                playerRoll *=2; 
            document.getElementById('result').innerHTML = ("Winner: Player with " + "points: "+ playerRoll);
        }
        if (computerRoll > playerRoll) {
            if (computerRoll1==computerRoll2)
                computerRoll *=2; 
            document.getElementById('result').innerHTML = ("Winner: Computer with "  + "points: "+ computerRoll);
        }
        if (computerRoll == playerRoll){
            document.getElementById('result').innerHTML = ("Tie");
        }
        playerTotal = playerTotal + playerRoll;
    }
}

function wagering(){
    
    let money = parseInt(prompt("How much wagering", ""));
    rolling();
    document.getElementById('bet').innerHTML = "";

    let bet = prompt("Bet a roll?", "");
    if (bet == "yes"){
        let betChoice = Math.floor((Math.random() * 3) + 1);
        switch(betChoice){
            case 1: //match the bet
                document.getElementById('bet').innerHTML = ("Match the bet");
                break;
            case 2:  //fold, wagered money add to computer
                money = money + computerRoll;
                document.getElementById('bet').innerHTML = ("Fold: "+ money + "$ to computer");
                break;
            case 3:  //raise the bet
                wagering();
                break;
        }
    }
}

let cells;
let swapped;
let currentPosRow = 0;
let currentPosCol = 0;
function setup(){
    // create function to load array and call placeNumbers()    

    cells = new Array(
        [document.getElementById("cell00"),
        document.getElementById("cell01"),
        document.getElementById("cell02"),
        document.getElementById("cell03")],
        [document.getElementById("cell10"),
        document.getElementById("cell11"),
        document.getElementById("cell12"),
        document.getElementById("cell13")],
        [document.getElementById("cell20"),
        document.getElementById("cell21"),
        document.getElementById("cell22"),
        document.getElementById("cell23")],
        [document.getElementById("cell30"),
        document.getElementById("cell31"),
        document.getElementById("cell32"),
        document.getElementById("cell33")],
    );
    placeInitial();
}

function placeInitial() {
    for (let rows=0;rows<4;rows++){
        for (let cols=0;cols<4;cols++){
            cells[rows][cols].innerHTML = "<img src='asset/images/bunny_land_greg.jpg' alt='bunny' width ='60' height ='60'/>";
        }
    }
    cells[0][0].innerHTML = "<img src='asset/images/boy.jpg' alt='boy' width ='60' height ='60'/>";
    cells[3][3].innerHTML = "<img src='asset/images/pic6.jpg' alt='dest' width ='60' height ='60'/>";
}

function doClick(row, col){
    // create the function that will check, each time a cell is clicked, if
    // the move is legal and will, if it is not legal, display an alert
    // if the move is legal, the function should call the swap() function
    // it should also check to see if this move is a winner, i.e., call checkWinner()
    let pitfallRow1 = Math.floor((Math.random() * 3));
    let pitfallCol1 = Math.floor((Math.random() * 3));
    let pitfallRow2 = Math.floor((Math.random() * 3));
    let pitfallCol2 = Math.floor((Math.random() * 3));
    let pitfallRow3 = Math.floor((Math.random() * 3));
    let pitfallCol3 = Math.floor((Math.random() * 3));

    swapped = false;
    
    if (row == pitfallRow1 && col == pitfallCol1 ||
        row == pitfallRow2 && col == pitfallCol2 ||
        row == pitfallRow3 && col == pitfallCol3)
        alert("Pit Fall!!!");
    else if (row == (currentPosRow+1) || col == (currentPosCol+1) ||
        row == (currentPosRow-1) || col == (currentPosCol-1)){

        if (row == (currentPosRow+1) && col == (currentPosCol+1) ||
            row == (currentPosRow-1) && col == (currentPosCol-1) ||
            row == (currentPosRow+1) && col == (currentPosCol-1) ||
            row == (currentPosRow-1) && col == (currentPosCol+1)) {
        }
        else if(row == 3 && col ==3 ){
            cells[row][col].innerHTML = cells[currentPosRow][currentPosCol].innerHTML; 
            cells[currentPosRow][currentPosCol].innerHTML = "<img src='asset/images/bunny_land_greg.jpg' alt='bunny' width ='60' height ='60'/>";          
            currentPosRow = row;
            currentPosCol = col;    
        }
        else{
            swap(cells[currentPosRow][currentPosCol], cells[row][col]);
            currentPosRow = row;
            currentPosCol = col;    
        }
    }
    
    checkWinner();
}


function swap(firstCell, secondCell){
    // create function to swap values
    swapped = true;
    let buf = secondCell.innerHTML;
    secondCell.innerHTML = firstCell.innerHTML;
    firstCell.innerHTML = buf;
}

function checkWinner(){

    // create function to check if the last move made makes this a win
    // display winning message if it is a winner
    let win = false;
    if (currentPosRow==3 && currentPosCol ==3)
        win = true;

    if(win){
        alert("Congratulations! You won!");
        let again = prompt("Play again?", "yes");
        if (again == "yes"){
            placeInitial();
        }
        currentPosRow = 0;
        currentPosCol = 0;
    }
}

function tictac11(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac12(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac13(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac21(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac22(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac23(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac31(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac32(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function tictac33(name){
    let result = document.getElementById(name).value;
    if (result.charAt(0)=='X' || result.charAt(0)=='x')
       document.getElementById(name).setAttribute('style', 'background-color: yellow;');
    if (result.charAt(0)=='O'|| result.charAt(0)=='o')
       document.getElementById(name).setAttribute('style', 'background-color: orange;');
}

function playAgain() {
    document.getElementById('ticTac11').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac12').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac13').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac21').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac22').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac23').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac31').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac32').setAttribute('style', 'background-color:white;');
    document.getElementById('ticTac33').setAttribute('style', 'background-color:white;'); 
}
