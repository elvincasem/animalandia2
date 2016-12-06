var currentscore = 0;
var currentqnascore = 0;
function sound_frog(){
	if(document.getElementById("sound1").value=="frog"){
		currentscore+=10;
	}
	console.log(currentscore);
}
function sound_goat(){
	if(document.getElementById("sound2").value=="goat"){
		currentscore+=10;
	}
	console.log(currentscore);
}
function sound_elephant(){
	if(document.getElementById("sound3").value=="elephant"){
		currentscore+=10;
	}
	console.log(currentscore);
}
function sound_lion(){
	if(document.getElementById("sound4").value=="lion"){
		currentscore+=10;
	}
	console.log(currentscore);
}
function sound_cat(){
	if(document.getElementById("sound5").value=="cat"){
		currentscore+=10;
	}
	console.log(currentscore);
}
function sound_dog(){
	if(document.getElementById("sound6").value=="dog"){
		currentscore+=10;
	}
	console.log(currentscore);
}

function qna_correct(){
	currentqnascore+=10;
	console.log(currentqnascore);
}


function display_soundscore(){
	document.getElementById("currentsoundscore").innerHtml = currentscore;
}
function initial(){
	var db = openDatabase('animalandia', '1.0', 'Test DB', 30 * 1024 * 1024);
	
	
	db.transaction(function (tx) {
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS highscore (playername,playerscore)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS highscoreqna(playername,playerscore)');
		
	});
	console.log(currentscore);
}


$$(document).on('pageAfterAnimation', '.page[data-page="soundplayfinal"]', function (e) {
	document.getElementById("currentsoundscore").value = currentscore;
  console.log(currentscore+" now")
}) 
$$(document).on('pageAfterAnimation', '.page[data-page="qnafinal"]', function (e) {
	document.getElementById("currentqnascore").value = currentqnascore;
  console.log(currentqnascore+" now")
}) 
$$(document).on('pageAfterAnimation', '.page[data-page="soundhelp"]', function (e) {
	currentscore = 0;
  console.log(currentscore+" now")
}) 
$$(document).on('pageAfterAnimation', '.page[data-page="qnahelp"]', function (e) {
	currentqnascore = 0;
  console.log(currentqnascore+" now")
}) 
function soundplayscore_submit(){
	
	var playername_sound = document.getElementById("soundplayname").value;
	var db = openDatabase('animalandia', '1.0', 'Test DB', 30 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO highscore(playername,playerscore) VALUES ('+playername_sound+','+currentscore+')');
	});
	console.log(playername_sound);
	console.log(currentscore);
}

function qnascore_submit(){
	
	var playername_sound = document.getElementById("qnaplayername").value;
	var db = openDatabase('animalandia', '1.0', 'Test DB', 30 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO highscoreqna(playername,playerscore) VALUES ('+playername_sound+','+currentqnascore+')');
	});
	//console.log(playername_sound);
	//console.log(currentscore);
}

$$(document).on('pageAfterAnimation', '.page[data-page="highscore"]', function (e) {
	var db = openDatabase('animalandia', '1.0', 'Test DB', 30 * 1024 * 1024);
	db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM highscore', [], function (tx, results) {
      var len = results.rows.length, i;
	  console.log(len);

	
      for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = "<li>"+
          "<div class='item-content'>"+
            "<div class='item-inner'>"+
              "<div class='item-title'>"+results.rows.item(i).playername+"</div>"+
              "<div class='item-after'>"+results.rows.item(i).playerscore+"</div>"+
            "</div>"+
          "</div>"+
        "</li>";
		//console.log(display);
		$$('#highscorelist').append(display);

			}
	
		}, null);
		
		
		tx.executeSql('SELECT * FROM highscoreqna', [], function (tx, results) {
      var len = results.rows.length, i;
	  console.log(len);

	
      for (i = 0; i < len; i++){
         //alert(results.rows.item(i).mainprogram );
		var display = "<li>"+
          "<div class='item-content'>"+
            "<div class='item-inner'>"+
              "<div class='item-title'>"+results.rows.item(i).playername+"</div>"+
              "<div class='item-after'>"+results.rows.item(i).playerscore+"</div>"+
            "</div>"+
          "</div>"+
        "</li>";
		//console.log(display);
		$$('#highscorelistqna').append(display);

			}
	
		}, null);
	   
		
	});
	
	
}) 
