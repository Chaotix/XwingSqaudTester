var results = [];

  function rollDie()
  { 

    var result = 1 + Math.floor(Math.random() * 8);
    console.log(result);
    switch(result){
    	case 1:
        results.push("hit")
    		break;
    	case 2:
    		results.push("eye")
    		break;
    	case 3:
    		results.push("blank")
    		break;
    	case 4:
    		results.push("hit")
    		break;
    	case 5:
    		results.push("eye")
    		break;
    	case 6:
    		results.push("blank")
    		break;
    	case 7:
    		results.push("hit")
    		break;
    	case 8:
    		results.push("crit")
    		break;

    }
  }

  function rerollDie(i)
  { 

    var result = 1 + Math.floor(Math.random() * 8);

    switch(result){
      case 1:
        results[i] = "hit";
        break;
      case 2:
        results[i] = "eye";
        break;
      case 3:
        results[i] = "blank"
        break;
      case 4:
        results[i] = "hit"
        break;
      case 5:
        results[i] = "eye"
        break;
      case 6:
        results[i] = "blank"
        break;
      case 7:
        results[i] = "hit"
        break;
      case 8:
        results[i] = "crit"
        break;

    }
  }

 function rollAttack(number)
  {
  	var total = 0;
  	results = [];
    while(number-- > 0) total += rollDie(number);
  }

function attack(){
	rollAttack(5);
	console.log(results);
}

function modFocusAttack(){
	for (var i=0; i < results.length; i++){
		if (results[i] == "eye"){
			results[i] = "hit";
		}
	}
	console.log(results);
}

function modRerollAttack(source){
    if (source == "targetlock"){
      for (var i=0; i < results.length; i++){
        if (results[i] == "eye" || results[i] == "blank"){
          if (pilots[pilotindex].focus != 0 ) {             //need to figure out how to keep track of tokens
           results[i] = rollDie();
          } 
        }
        alert(results);
      }
    }
  }

function modDice(option){
	switch(option){
		case "focus":
			modFocusAttack();
			break;
		case "targetlock":
			modRerollAttack("targetlock");
			break;
		case "special":
			modSpecialAttack();
			break;
		default:
			break;
	}
}