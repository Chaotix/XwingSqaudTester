//Constructors
function Pilot(strName, strDescription, intSkill, objShip, arrUpgrades, intPoints, arrActions){
	this.Name = strName;
	this.Description = strDescription;
	this.Skill = intSkill;
	this.Ship = objShip;
	this.Upgrades = arrUpgrades;
	this.Points = intPoints;
	this.Actions = arrActions;
}

// Initialize Pilots
var pltBiggsDarklighter = new Pilot("Biggs DarkLighter", 5, shpXwing);

var pltHowlrunner = new Pilot("Howlrunner", 8, shpTieFighter);
var pltAcademyPilot = new Pilot("Academy Pilot", 1, shpTieFighter);

var pltFennRau = new Pilot("Fenn Rau", 9, shpProtectorateStarfighter);
var pltdengar = new Pilot("Dengar", 9, shpJumpmaster5000);

// function createPilot(userpilot){
// 	pilots.push(clone(pltFennRau));
// }




// }
