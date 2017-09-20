function addShields(pilot,shields){
	pilot.ship.shields = pilot.ship.shields + shields;
}

function ActionBank(ship) { //Holds current player actions/icons/effects???
	this.ship = ship;
}

function AddAction(shipindex, strAction){
	ships[shipindex].arrActions.push(strAction);
}