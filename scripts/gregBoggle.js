compWords = new Array(); 

function setup(){
	let num = Math.floor(Math.random()*5)+1;
	compWords = words(num);
	yourWord = compWords[0];
	document.getElementById("letters").innerHTML = yourWord;
	//selectionSort();
	//bubbleSort();
	//let math = new Array("Algebra 1", "Algebra 2", "Trig",
    //        "Calculus 1", "Calculus 2");
    //    document.write("There are " + math.length + 1 + 
    //        " math courses in the sequence.");
}

function words(x)
{
	let word;
	switch (x)
	{
	case 1:
		word = new Array("balte","table","hat","tab","belt","lab","eat","tea","ate","tale","bale","let","bet","teal","late","beat");
		break;		
	case 2:
		word = new Array("atwre","water","wet","wear","tear","war","ret","rate","eat","ate","tea","awe","raw","rat","wart","art","tar");
		break;
	case 3:
		word = new Array("dclaen","can","cane","and","clan","lane","lean","lend","land","den","dean","dance","lance","clean","deal","ale","dale","candle","clad");
		break;
	case 4:
		word = new Array("aepinlar","air","airplane","plane","plan","lane","lean","pane","ear","near","nap","nape","lair","pen","pan","ape","leap","ale","peal","nap","rap","par", "pare", "pale", "are", "rail", "ail", "pail", "nail", "air", "pair", "ran", "pin", "pine", "line", "nip", "rip", "ripe", "lip", "earn", "learn", "ire");
		break;
	case 5:
		word = new Array("redykboa","keyboard","key","board","bored","bore","bark","dark","dork","oar","boar","ark","dare","bare","are","red","rod","road","bode","rode","ode","bread", "read", "bead", "bred", "break", "drey", "day", "boy", "broke", "rake", "bake", "ear", "dear", "bear", "dye", "dyer", "doer", "oak", "boa", "doe", "okay","dab", "bade", "ade", "drake", "bard", "yard", "year", "beak", "beard", "bad", "bed", "bay");
		break;
	}
	return word;
}

let timer = 0;
let interval;
let play ="";
let score = 0;
let flag = 0;
let countDownDate;
let now;

let x;
let timeOut;
let gussWord;
let playWords = new Array();
let inputWord = new Array();
let notAWord = new Array();
/*
function inputWords(){

	//while(play != "Q"){
		play = prompt("enter a word or enter Q when done");
		playWords.push(play);
		if (play != "Q"){
			document.getElementById("entries").innerHTML = playWords.toString();
		}
		else{
			let compLght = compWords.length;
			let playlght = (playWords.length-1);
			for (let i=0;i<playlght;i++){
				flag =0;
				for(let k=0;k<compLght;k++){
					if(playWords[i] == compWords[k]){
						score++;
						flag = 1;
					}
				}
				if (flag==0)
					notAWord.push(playWords[i]);
			}
			clearInterval(interval);
			let buf = "Your score is " + score + ". The following entries are not valid words: <br/>" + notAWord.toString();
			document.getElementById("result").innerHTML = (buf);	
		}
	//}

	if (timer != 10000){
		alert("Timer is reset");
		timer = 10000;
	}

}
*/


function boggle(){

	let play ="";
	let score = 0;
	let flag = 0;
	
	countDownDate = new Date().getTime();
	x = setInterval(countDownTimer, 1000);

	while((play != "Q")&&(timeOut<=100)){
		play = prompt("enter a word or enter Q when done");
		playWords.push(play);
		/*
		if (inputWord[inputWord.length-1] != "Q"){
			playWords.push(inputWord[inputWord.length-1]);
			document.getElementById("entries").innerHTML = playWords.toString();
		}*/
		if (play != "Q"){
			document.getElementById("entries").innerHTML = playWords.toString();
		}
		else{
			let compLght = compWords.length;
			let playlght = (playWords.length-1);
			//let playlght = playWords.length;
			for (let i=0;i<playlght;i++){
				flag =0;
				for(let k=0;k<compLght;k++){
					if(playWords[i] == compWords[k]){
						score++;
						flag = 1;
					}
				}
				if (flag==0)
					notAWord.push(playWords[i]);
			}
		}
	}

	if (play == "Q"){
	//if (inputWord[inputWord.length-1]=="Q"){
		let buf = "Your score is " + score + ". The following entries are not valid words: <br/>" + notAWord.toString();
		document.getElementById("result").innerHTML = (buf);	
	}

}


function countDownTimer(){
	//convert to second
	now = new Date().getTime();
	timeOut = Math.floor((now - countDownDate)/1000);
	document.getElementById("countDown").innerHTML = "Time: "+ timeOut + "s ";
	// set time out as 100 second
	if (timeOut > 100) {
		clearInterval(x);
		document.getElementById("countDown").innerHTML = "Time: EXPIRED";
	}
}

function inputYourWord(){
	gussWord = document.getElementById("guessInput").value;
	inputWord.push(gussWord);
	document.getElementById("demo").innerHTML = gussWord;
}

function selectionSort(){
	let score = ["lorem","ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "quisquam", 
	"similique", "porro", "esse", "fugiat", "voluptatem", "praesentium", "minus", "sapiente", "culpa", 
	"soluta", "facilis", "non", "sit", "qui", "ut", "repellendus", "corporis", "dolores", "sequi", "quaerat", 
	"reiciendis"];
	let littlest = 0;
	let index = 0;
	let k = 0;
	let j = 0;
	let count = score.length;
	//begin the selection sort
	for(k=0;k<(count-1);k++){
		littlest = score[k];
		index = k;
		for (j=(k+1); j<=(count-1); j++){
			if(score[j]<littlest){
				littlest = score[j];
				index = j;
			}
		}
		if (k!=index){
			temp = score[k];
			score[k] = score[index];
			score[index] = temp;
		}
	}
	document.getElementById("letters").innerHTML = score.toString();
}

function bubbleUp(lgth, arrayName){
	let flag = 0;
	let temp = 0;
	while(flag==0){
		flag = 1;
		for (k=0;k<=(lgth-2); k++){
			if (arrayName[k] > arrayName[k+1]){
				temp = arrayName[k];
				arrayName[k] = arrayName[k+1];
				arrayName[k+1] = temp;
				flag = 0;
			}
		}
	}
}

function bubbleDown(lgth, arrayName){
	let flag = 0;
	let temp = 0;
	while(flag==0){
		flag = 1;
		for (k=0;k<=(lgth-2); k++){
			if (arrayName[k] < arrayName[k+1]){
				temp = arrayName[k];
				arrayName[k] = arrayName[k+1];
				arrayName[k+1] = temp;
				flag = 0;
			}
		}
	}
}

function bubbleSort(){
	/*
	let score = ["lorem","ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "quisquam", 
	"similique", "porro", "esse", "fugiat", "voluptatem", "praesentium", "minus", "sapiente", "culpa", 
	"soluta", "facilis", "non", "sit", "qui", "ut", "repellendus", "corporis", "dolores", "sequi", "quaerat", 
	"reiciendis"];*/
	let score = [2,7,4,9,10,100,245,345,222,555];
	let count = 0;
	count = score.length;
	bubbleDown(count, score);	
	document.getElementById("letters").innerHTML = score.toString();
	bubbleUp(count, score);	
	//document.getElementById("letters").innerHTML = score.toString();
}