function Player(ID, objSquad, strName){
	this.ID = ID;
	this.Squad = objSquad;
	this.Name = strName;
}

var Player1 = new Player();
var Player2 = new Player();

//Player functions

function createPlayers(){
	if (players.length==0){
		players.push(new Player(1,null,"Player1"));
		players.push(new Player(2,null,"Player2"));
	}
	Player1 = players[0];
	Player2 = players[1];

}

