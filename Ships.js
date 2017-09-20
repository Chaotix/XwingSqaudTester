//Constructor
function Ship(strName, intAttack, intDefence, intHull, intShields, arrActions, arrUpgrades){
	this.Name = strName;
	this.Attack = intAttack;
	this.Defence = intDefence;
	this.Hull = intHull;
	this.Shields = intShields;
	this.Actions = arrActions;
	this.Upgrades = arrUpgrades;
	//alert("im on a boat");
}

//Initialize Ship Types
var shpTieFighter = new Ship("Tie Fighter", 2, 3, 3, 0, ["focus", "barrelroll","evade"], [""]);
var shpXwing = new Ship("X-wing", 3, 2, 3, 2, ["targetlock","focus"],["torpedo","astromech"])
var shpJumpmaster5000 = new Ship("Jumpmaster 5000", 2, 2, 5, 5 ["focus","targetlock","barrelroll"], ["torpedo","torpedo","crew","salvagedastromech","illicit"])
var shpProtectorateStarfighter = new Ship("Protectorate Starfighter", 3,3,4,0, ["focus","targetlock","barrelroll","boost"],["torpedo"]);


//Ship functions
// function createShip(usership){
// 	ships.push(eval(usership));
// }