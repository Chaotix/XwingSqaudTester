
var Playernum=1;
var players = []; //Player objects
var squads = []; // Game sqauds
var ships = []; //Game ships
var pilots = []; //Game pilots
var upgrades = []; //Game upgrades
var ActivePlayer = new Object();
var Pilots = new Object();
var Upgrades = new Object();
var arrPhases = ["Planning","Activation","Combat","End"]
var arrAttackTiming = ["DeclareTarget","RollAttackDice","ModifyAttackDice","RollDefenceDice","ModifyDefenceDice","CompareResults","ResolveAttack","DealDamage","ResolveAttack","AfterAttack"]
//var squad = new Object();