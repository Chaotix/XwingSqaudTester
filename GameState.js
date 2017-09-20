//GameState Init
//test
createPlayers();
gameround = 0;
phase = 0;


readTextFile("Pilots.json", function(text){
    var data = JSON.parse(text);    
    document.getElementById('Pilots').value = text.toString();
    Pilots = data;
});

readTextFile("Upgrades.json", function(text){
    var data = JSON.parse(text);
    document.getElementById('Upgrades').value = text.toString();
    Upgrades = data;
});

//document.getElementById('XWS1').value = "{'description':'','faction':'scum','name':'Unsaved Squadron','pilots':[{'name':'dengar','points':33,'ship':'jumpmaster5000'}],'points':33,'vendor':{'yasb':{'builder':'(Yet Another) X-Wing Miniatures Squad Builder','builder_url':'https://geordanr.github.io/xwing/','link':'https://geordanr.github.io/xwing/?f=Scum%20and%20Villainy&d=v4!s!171:-1,-1,-1,-1,-1,-1:-1:-1:&sn=Unsaved%20Squadron&obs='}},'version':'0.3.0'}";
//document.getElementById('XWS2').value = "{'description':'','faction':'scum','name':'Unsaved Squadron','pilots':[{'name':'dengar','points':33,'ship':'jumpmaster5000'}],'points':33,'vendor':{'yasb':{'builder':'(Yet Another) X-Wing Miniatures Squad Builder','builder_url':'https://geordanr.github.io/xwing/','link':'https://geordanr.github.io/xwing/?f=Scum%20and%20Villainy&d=v4!s!171:-1,-1,-1,-1,-1,-1:-1:-1:&sn=Unsaved%20Squadron&obs='}},'version':'0.3.0'}";

function PlayerInitiative(){
	if (Player1.Squad.Points > Player2.Squad.Points){
		ActivePlayer = Player1;
	}
	else if (Player1.Squad.Points < Player2.Squad.Points){
		ActivePlayer = Player2;
	}
	else{ActivePlayer = eval('Player'+rollinit())}
	return ActivePlayer;
}

function rollinit(){
	 var result = 1 + Math.floor(Math.random() * 2);
	 return result;
}

function PilotInitiative(){

	for (i=0; i<activeplayer.Squad.Pilots.length; i++){
	//	alert(ships[i]);
	}
}

//Import XWS file and create Player(s).Squads.Pilots.Ships.Upgrades data structure

function ImportXWS(playernum){

	//if(player == 'Player1'){
		
		var JSONinput = document.getElementById('XWS'+playernum).value;	
		squadJSON = JSON.parse(JSONinput);
		//console.log(squadJSON);
		//alert(squadJSON.pilots[0].upgrades.turret);
		 // var foundobject = findObjectByLabel(Pilots, "ahsokatano")
		 // if (typeof  foundobject === "object"){
		 // 	alert("yup");
		 // }

		// for (var key in squadJSON) {
		//    var obj = squadJSON[key];
		//    for (var prop in obj) {
		//       alert(prop + " = " + obj[prop]);
		//    }
		// }
		
		JSONinput = document.getElementById('Pilots').value;
		pilot = JSON.parse(JSONinput);

		JSONinput = document.getElementById('Upgrades').value;
		upgrade = JSON.parse(JSONinput);
		
		CreateGameObjects(squadJSON, playernum);

		//console.log(Player1);
	//	}
		
		
	// if(player == 'Player2'){

	// 	var JSONinput = document.getElementById('XWS2').value;	
	// 	squad = JSON.parse(JSONinput);

	// 	JSONinput = document.getElementById('Pilots2').value;
	// 	pilot = JSON.parse(JSONinput);

	// 	JSONinput = document.getElementById('Upgrades2').value;
	// 	upgrade = JSON.parse(JSONinput);

	// 	Player2.Squad = new Squad(squad.name, squad.description, squad.faction, [], squad.points);

	// 	for (i=0;i<squad.pilots.length;i++){
	// 		Player2.Squad.Pilots[i] = new Pilot(squad.pilots[i].name, 0, squad.pilots[i].ship);
	// 		alert("Player2 Pilot"+i+": "+Player2.Squad.Pilots[i].Name);
	// 	}
	// }

	// if (typeof Player1.Squad === 'object' && typeof Player2.Squad === 'object'){
	// 	ActivePlayer = PlayerInitiative();
	// 	activeilot = PilotInitiative();
	// }
}

function CreateGameObjects(squadJSON, playernum){
		ActivePlayer = eval("Player"+playernum)
		ActivePlayer.Squad = new Squad(squadJSON.name, squadJSON.description, squadJSON.faction, [], squadJSON.points);
		
		for (i=0;i<squadJSON.pilots.length;i++){		
			
			ActivePlayer.Squad.Pilots[i] = new Pilot(squadJSON.pilots[i].name, "", 0, null, [], 0);			
			ActivePlayer.Squad.Pilots[i].Ship = new Ship(squadJSON.pilots[i].ship, 0, 0, 0, 0, [], []);
			ActivePlayer.Squad.Pilots[i].Points = squadJSON.pilots[i].points;

			obj = squadJSON.pilots[i].upgrades;
			k=0;
			var objUpgrade = new Object();
			for (prop in obj){
				objUpgrade = obj[prop];				
			 	ActivePlayer.Squad.Pilots[i].Upgrades[k] = new Upgrade(prop,objUpgrade,null,eval(objUpgrade));
			 	k=k+1;
			}
		
		}
	ActivePlayer.Squad.Pilots[1].Upgrades[4].Execute;
		console.log(Player1);
		console.log(Player2);
		//console.log(Pilots);
		//console.log(Upgrades);
}