/*===============================================================
                                Main
===============================================================*/

var score = 0;
               
var purchased = []

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key == 's') { // ctrl + s
        event.preventDefault();
        saveGame();
    }
}, false);

/*===============================================================
                              Upgrades
===============================================================*/

var upgrade = {
    name: [
        "Red Bull"
        ],
    description: [
        "Farmers are twice as efficient"
        ],
    image: [
        "farmer.png"
        ],
    type: [
        "building"
        ],
    cost: [
        100
        ],
    buildingIndex: [
        0
        ],
    requirement: [
        1
        ],
    bonus: [
        2
        ],
    purchased: [false],
   
    purchase: function(index) {
        if (!purchased[index] && score >= cost[index]) {
            if (type[index] == "building" && building.count[buildingIndex[index]] >= requirement[index])')' ;
                score -= cost[index];
                building.income[buildingIndex[0]] *= bonus[0];
                purchased[index] = true;
               
                updateUpgrades();
            } else if (type[index] == "click" && totalClicks >= requirement[index]) {
                score -= cost[index];
                clickValue *= bonus[index];
                purchased[index] = true;
                updateUpgrades();
        return upgrade;
            }
        }
    };

    function updateUpgrades() {
        document.getElementById("upgradeContainer").innerHTML = "";
        for (i = 0; i < upgrade.name.length; i++) {
            if (!upgrade.purchased[i]) {
                if (upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="Images/'+upgrade.image[i]+ '" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' potatoes)" onclick="upgrade.purchase('+i+')">';
                } else if (upgrade.type[i] == "click" && totalClicks >= upgrade.requirement[i]) {
                    document.getElementById("upgradeContainer").innerHTML += '<img src="Images/'+upgrade.image[i]+ '" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' potatoes)" onclick="upgrade.purchase('+i+')">';
                }
            }
        }
    };

/*===============================================================
                             Buildings
===============================================================*/

var farmerCost = 15;
var farmers = 0;

var trowelCost = 100;
var trowels = 0;

var shovelCost = 250;
var shovels = 0;

var hoeCost = 500;
var hoes = 0;

var tractorCost = 1000;
var tractors = 0;

var cropSprayerCost = 5000;
var cropSprayers = 0;

var cultivatorCost = 10000;
var cultivators = 0;

var harvesterCost = 100000;
var harvesters = 0;


var fieldCost = 1000000;
var fields = 0;

var idahoCost = 5000000;
var idahos = 0;

var irelandCost = 1000000000;
var irelands = 0;

var potatolandCost = 1000000000000000;
var potatolands = 0;

var redPotatoCost = 10000000000000000;
var redPotatoes = 0;

var goldenPotatoCost = 100000000000000000;
var goldenPotatoes = 0;

var radioactivePotatoCost = 1000000000000000000;
var radioactivePotatoes = 0;

var jacobCost = 10000000000000000000;
var jacobs = 0;

/*===============================================================
                          Buy Buildings
===============================================================*/

function buyFarmer() {
    if (score >= farmerCost) {
        score = score - farmerCost;
        farmers = farmers + 1;
        farmerCost = Math.round(farmerCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("farmercost").innerHTML = farmerCost;
        document.getElementById("farmers").innerHTML = farmers;
        updateScorePerSecond();
    }
}

function buyTrowel() {
    if (score >= trowelCost) {
        score = score - trowelCost;
        trowels = trowels + 1;
        trowelCost = Math.round(trowelCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("trowelcost").innerHTML = trowelCost;
        document.getElementById("trowels").innerHTML = trowels;
        updateScorePerSecond();
    }
}

function buyShovel() {
    if (score >= shovelCost) {
        score = score - shovelCost;
        shovels = shovels + 1;
        shovelCost = Math.round(shovelCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("shovelcost").innerHTML = shovelCost;
        document.getElementById("shovels").innerHTML = shovels;
        updateScorePerSecond();
    }
}

function buyHoe() {
    if (score >= hoeCost) {
        score = score - hoeCost;
        hoes = hoes + 1;
        hoeCost = Math.round(hoeCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("hoecost").innerHTML = hoeCost;
        document.getElementById("hoes").innerHTML = hoes;
        updateScorePerSecond();
    }
}

function buyTractor() {
    if (score >= tractorCost) {
        score = score - tractorCost;
        tractors = tractors + 1;
        tractorCost = Math.round(tractorCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("tractorcost").innerHTML = tractorCost;
        document.getElementById("tractors").innerHTML = tractors;
        updateScorePerSecond();
    }
}

function buyCropSprayer() {
    if (score >= cropSprayerCost) {
        score = score - cropSprayerCost;
        cropSprayers = cropSprayers + 1;
        cropSprayerCost = Math.round(cropSprayerCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cropsprayercost").innerHTML = cropSprayerCost;
        document.getElementById("cropsprayers").innerHTML = cropSprayers;
        updateScorePerSecond();
    }
}

function buyCultivator() {
    if (score >= cultivatorCost) {
        score = score - cultivatorCost;
        cultivators = cultivators + 1;
        cultivatorCost = Math.round(cultivatorCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("cultivatorcost").innerHTML = cultivatorCost;
        document.getElementById("cultivators").innerHTML = cultivators;
        updateScorePerSecond();
    }
}

function buyHarvester() {
    if (score >= harvesterCost) {
        score = score - harvesterCost;
        harvesters = harvesters + 1;
        harvesterCost = Math.round(harvesterCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("harvestercost").innerHTML = harvesterCost;
        document.getElementById("harvesters").innerHTML = harvesters;
        updateScorePerSecond();
    }
}


function buyField() {
    if (score >= fieldCost) {
        score = score - fieldCost;
        fields = fields + 1;
        fieldCost = Math.round(fieldCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("fieldcost").innerHTML = fieldCost;
        document.getElementById("fields").innerHTML = fields;
        updateScorePerSecond();
    }
}

function buyIdaho() {
    if(score >= idahoCost) {
        score = score - idahoCost;
        idahos = idahos + 1;
        idahoCost = Math.round(idahoCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("idahocost").innerHTML = idahoCost;
        document.getElementById("idahos").innerHTML = idahos;
        updateScorePerSecond();
    }
}

function buyIreland() {
    if(score >= irelandCost) {
        score = score - irelandCost;
        irelands = irelands + 1;
        irelandCost = Math.round(irelandCost * 1.10);

        document.getElementById("score").innerHTML = score;
        document.getElementById("irelandcost").innerHTML = irelandCost;
        document.getElementById("irelands").innerHTML = irelands;
        updateScorePerSecond();
    }
}

function buyPotatoland() {
    if(score >= potatolandCost) {
        score = score - potatolandCost;
        potatolands = potatolands + 1;
        potatolandCost = Math.round(potatolandCost * 1.10);
       
        document.getElementById("score").innerHTML = score;
        document.getElementById("potatolandcost").innerHTML = potatolandCost;
        document.getElementById("potatolands").innerHTML = potatolands;
        updateScorePerSecond();
    }
}

function buyRedPotato() {
    if(score >= redPotatoCost) {
        score = score - redPotatoCost;
        redPotatoes = redPotatoes + 1;
        redPotatoCost = Math.round(redPotatoCost * 1.10);
       
        document.getElementById("score").innerHTML = score;
        document.getElementById("redpotatocost").innerHTML = redPotatoCost;
        document.getElementById("redpotatoes").innerHTML = redPotatoes;
        updateScorePerSecond();
    }
}

function buyGoldenPotato() {
    if(score >= goldenPotatoCost) {
        score = score - goldenPotatoCost;
        goldenPotatoes = goldenPotatoes + 1;
        goldenPotatoCost = Math.round(goldenPotatoCost * 1.10);
       
        document.getElementById("score").innerHTML = score;
        document.getElementById("goldenpotatocost").innerHTML = goldenPotatoCost;
        document.getElementById("goldenpotatoes").innerHTML = goldenPotatoes;
        updateScorePerSecond();
    }
}

function buyRadioactivePotato() {
    if(score >= radioactivePotatoCost) {
        score = score - radioactivePotatoCost;
        radioactivePotatoes = radioactivePotatoes + 1;
        radioactivePotatoCost = Math.round(radioactivePotatoCost * 1.10);
       
        document.getElementById("score").innerHTML = score;
        document.getElementById("radioactivepotatocost").innerHTML = radioactivePotatoCost;
        document.getElementById("radioactivepotatoes").innerHTML = radioactivePotatoes;
        updateScorePerSecond();
    }
}

function buyJacob() {
    if(score >= jacobCost) {
        score = score - jacobCost;
        jacobs = jacobs + 1;
        jacobCost = Math.round(jacobCost * 1.10);
       
        document.getElementById("score").innerHTML = score;
        document.getElementById("jacobcost").innerHTML = jacobCost;
        document.getElementById("jacobs").innerHTML = jacobs;
        updateScorePerSecond();
    }
}

/*===============================================================
                            Buy Upgrades
===============================================================*/

function buyRedBull() {
    // Placeholder
}

function potatorain() {
    const potatorain = object.create(document.getElementById("potato"))
}

function updateScorePerSecond() {
    scorePerSecond = farmers + trowels * 10 + shovels * 18 + hoes * 20 + tractors * 50 + cropSprayers * 100 + cultivators * 500 + harvesters * 1000 + fields * 2500 + idahos * 418527 + irelands * 1949333 + potatolands * 5000000000 + redPotatoes *
8000000000 + goldenPotatoes * 10000000000 + radioactivePotatoes * 100000000000 + jacobs * 1000000000000;
    document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}

/*===============================================================
                            Save Game
===============================================================*/

function saveGame() {
    var saveGame = {
        score: score,
        farmerCost: farmerCost,
        farmers: farmers,
        trowelCost: trowelCost,
        trowels: trowels,
        shovelCost: shovelCost,
        shovels: shovels,
        hoeCost: hoeCost,
        hoes: hoes,
        tractorCost: tractorCost,
        tractors: tractors,
        cropSprayerCost: cropSprayerCost,
        cropSprayers: cropSprayers,
        cultivatorCost: cultivatorCost,
        cultivators: cultivators,
        harvesterCost: harvesterCost,
        harvesters: harvesters,
        fieldCost: fieldCost,
        fields: fields,
        idahoCost: idahoCost,
        idahos: idahos,
        irelandCost: irelandCost,
        irelands: irelands,
        potatolandCost: potatolandCost,
        potatolands: potatolands,
        redPotatoCost: redPotatoCost,
        redPotatoes: redPotatoes,
        goldenPotatoCost: goldenPotatoCost,
        goldenPotatoes: goldenPotatoes,
        radioactivePotatoCost: radioactivePotatoCost,
        radioactivePotatoes: radioactivePotatoes,
        jacobCost: jacobCost,
        jacobs: jacobs,
        upgradePurchased: upgrade.purchased
    };
    const mySave = {
        score: score,
        farmerCost: farmerCost,
        farmers: farmers,
        trowelCost: trowelCost,
        trowels: trowels,
        shovelCost: shovelCost,
        shovels: shovels,
        hoeCost: hoeCost,
        hoes: hoes,
        tractorCost: tractorCost,
        tractors: tractors,
        cropSprayerCost: cropSprayerCost,
        cropSprayers: cropSprayers,
        cultivatorCost: cultivatorCost,
        cultivators: cultivators,
        harvesterCost: harvesterCost,
        harvesters: harvesters,
        fieldCost: fieldCost,
        fields: fields,
        idahoCost: idahoCost,
        idahos: idahos,
        irelandCost: irelandCost,
        irelands: irelands,
        potatolandCost: potatolandCost,
        potatolands: potatolands,
        redPotatoCost: redPotatoCost,
        redPotatoes: redPotatoes,
        goldenPotatoCost: goldenPotatoCost,
        goldenPotatoes: goldenPotatoes,
        radioactivePotatoCost: radioactivePotatoCost,
        radioactivePotatoes: radioactivePotatoes,
        jacobCost: jacobCost,
        jacobs: jacobs,
        upgradePurchased: upgrade.purchased
    };
    const myJSON = JSON.stringify(mySave);
    localStorage.setItem("gameSave", myJSON)
}

/*===============================================================
                            Load Game
===============================================================*/

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    if (typeof savedGame.farmerCost !== "undefined") farmerCost = savedGame.farmerCost;
    if (typeof savedGame.farmers !== "undefined") farmers = savedGame.farmers;
    if (typeof savedGame.trowelCost !== "undefined") trowelCost = savedGame.trowelCost;
    if (typeof savedGame.trowels !== "undefined") trowels = savedGame.trowels;
    if (typeof savedGame.shovelCost !== "undefined") shovelCost = savedGame.shovelCost;
    if (typeof savedGame.shovels !== "undefined") shovels = savedGame.shovels;
    if (typeof savedGame.hoeCost !== "undefined") hoeCost = savedGame.hoeCost;
    if (typeof savedGame.hoes !== "undefined") hoes = savedGame.hoes;
    if (typeof savedGame.tractorCost !== "undefined") tractorCost = savedGame.tractorCost;
    if (typeof savedGame.tractors !== "undefined") tractors = savedGame.tractors;
    if (typeof savedGame.cropSprayerCost !== "undefined") cropSprayerCost = savedGame.cropSprayerCost;
    if (typeof savedGame.cropSprayers !== "undefined") cropSprayers = savedGame.cropSprayers;
    if (typeof savedGame.cultivatorCost !== "undefined") cultivatorCost = savedGame.cultivatorCost;
    if (typeof savedGame.cultivators !== "undefined") cultivators = savedGame.cultivators;
    if (typeof savedGame.harvesterCost !== "undefined") harvesterCost = savedGame.harvesterCost;
    if (typeof savedGame.harvesters !== "undefined") harvesters = savedGame.harvesters;
    if (typeof savedGame.fieldCost !== "undefined") fieldCost = savedGame.fieldCost;
    if (typeof savedGame.fields !== "undefined") fields = savedGame.fields;
    if (typeof savedGame.idahoCost !== "undefined") idahoCost = savedGame.idahoCost;
    if (typeof savedGame.idahos !== "undefined") idahos = savedGame.idahos;
    if (typeof savedGame.irelandCost !== "undefined") irelandCost = savedGame.irelandCost;
    if (typeof savedGame.irelands !== "undefined") irelands = savedGame.irelands;
    if (typeof savedGame.potatolandCost !== "undefined") potatolandCost = savedGame.potatolandCost;
    if (typeof savedGame.potatolands !== "undefined") potatolands = savedGame.potatolands;
    if (typeof savedGame.goldenPotatoCost !== "undefined") goldenPotatoCost = savedGame.goldenPotatoCost;
    if (typeof savedGame.goldenPotatoes !== "undefined") goldenPotatoes = savedGame.goldenPotatoes;
    if (typeof savedGame.redPotatoCost !== "undefined") redPotatoCost = savedGame.redPotatoCost;
    if (typeof savedGame.redPotatoes !== "undefined") redPotatoes = savedGame.redPotatoes;
    if (typeof savedGame.radioactivePotatoCost !== "undefined") radioactivePotatoCost = savedGame.radioactivePotatoCost;
    if (typeof savedGame.radioactivePotatoes !== "undefined") radioactivePotatoes = savedGame.radioactivePotatoes;
    if (typeof savedGame.jacobCost !== "undefined") jacobCost = savedGame.jacobCost;
    if (typeof savedGame.jacobs !== "undefined") jacobs = savedGame.jacobs;
    if (typeof savedGame.upgradePurchased !== "undefined") upgradePurchased = savedGame.upgradePurchased;
}

window.onload = function() {
    loadGame();
    updateScorePerSecond();
    updateUpgrades();
    document.getElementById("score").innerHTML = score;
    document.getElementById("farmercost").innerHTML = farmerCost;
    document.getElementById("farmers").innerHTML = farmers;
    document.getElementById("trowelcost").innerHTML = trowelCost;
    document.getElementById("trowels").innerHTML = trowels;
    document.getElementById("shovelcost").innerHTML = shovelCost;
    document.getElementById("shovels").innerHTML = shovels;
    document.getElementById("hoecost").innerHTML = hoeCost;
    document.getElementById("hoes").innerHTML = hoes;
    document.getElementById("tractorcost").innerHTML = tractorCost;
    document.getElementById("tractors").innerHTML = tractors;
    document.getElementById("cropsprayercost").innerHTML = cropSprayerCost;
    document.getElementById("cropsprayers").innerHTML = cropSprayers;
    document.getElementById("cultivatorCost").innerHTML = cultivatorCost;
    document.getElementById("cultivators").innerHTML = cultivators;
    document.getElementById("harvestercost").innerHTML = harvesterCost;
    document.getElementById("harvesters").innerHTML = harvesters;
    document.getElementById("fieldcost").innerHTML = fieldCost;
    document.getElementById("fields").innerHTML = fields;
    document.getElementById("idahocost").innerHTML = idahoCost;
    document.getElementById("idahos").innerHTML = idahos;
    document.getElementById("irelandcost").innerHTML = irelandCost;
    document.getElementById("irelands").innerHTML = irelands;
    document.getElementById("potatolandcost").innerHTML = potatolandCost;
    document.getElementById("potatolands").innerHTML = potatolands;
    document.getElementById("goldenpotatocost").innerHTML = goldenPotatoCost;
    document.getElementById("goldenpotatoes").innerHTML = goldenPotatoes;
    ocument.getElementById("redpotatocost").innerHTML = redPotatoCost;
    document.getElementById("redpotatoes").innerHTML = redPotatoes;
    document.getElementById("radioactivepotatocost").innerHTML = radioactivePotatoCost;
    document.getElementById("radioactivepotatoes").innerHTML = radioactivePotatoes;
    document.getElementById("jacobcost").innerHTML = jacobCost;
    document.getElementById("jacobs").innerHTML = jacobs;
    document.getElementById("upgradepurchased").innerHTML = upgradePurchased;
};

/*===============================================================
                            Buttons
===============================================================*/

function resetGame() {
    if (confirm("Are you sure that you want to reset your game?")) {
        var gameSave = {};
        localStorage.setItem("gameSave", JSON.stringify(gameSave));
        location.reload();
    }
}

document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementClassName("clicker").innerHTML = "";
  totalClicks ++;
  addToScore(clickValue);
}

/*===============================================================
                          Set Interval
===============================================================*/

setInterval(function() {
    score = score + farmers;
    score = score + trowels * 10;
    score = score + shovels * 18;
    score = score + hoes * 20;
    score = score + tractors * 50;
    score = score + cropSprayers * 100;
    score = score + cultivators * 500;
    score = score + harvesters * 1000;
    score = score + fields * 2500;
    score = score + idahos * 418527;
    score = score + irelands * 1949333;
    score = score + potatolands * 5000000000;
    score = score + redPotatoes * 10000000000;
    score = score + goldenPotatoes * 100000000000;
    score = score + radioactivePotatoes * 100000000000;
    score = score + jacobs * 1000000000000;
    document.getElementById("score").innerHTML = score;
    document.title = score + " Potatoes - Potato Clicker ";
    updateScorePerSecond();
}, 1000); // 1000ms = 1 second

setInterval(function() {
    updateUpgrades();
}, 3000); //3000ms = 3 seconds

setInterval(function() {
    saveGame();
    updateScorePerSecond();
}, 30000); // 30000ms = 30 seconds

/*===============================================================
                             Farm Name
===============================================================*/

		RandomFarmName=function()
		{
			return (Math.random()>0.05?(choose(['Magic','Fantastic','Fancy','Sassy','Snazzy','Pretty','Cute','Pirate','Ninja','Zombie','Robot','Radical','Urban','Cool','Hella','Sweet','Awful','Double','Triple','Turbo','Techno','Disco','Electro','Dancing','Wonder','Mutant','Space','Science','Medieval','Future','Captain','Bearded','Lovely','Tiny','Big','Fire','Water','Frozen','Metal','Plastic','Solid','Liquid','Moldy','Shiny','Happy','Happy Little','Slimy','Tasty','Delicious','Hungry','Greedy','Lethal','Professor','Doctor','Power','Chocolate','Crumbly','Choklit','Righteous','Glorious','Mnemonic','Psychic','Frenetic','Hectic','Crazy','Royal','El','Von'])+' '):'Mc')+choose(['Cookie','Biscuit','Muffin','Scone','Cupcake','Pancake','Chip','Sprocket','Gizmo','Puppet','Mitten','Sock','Teapot','Mystery','Baker','Cook','Grandma','Click','Clicker','Spaceship','Factory','Portal','Machine','Experiment','Monster','Panic','Burglar','Bandit','Booty','Potato','Pizza','Burger','Sausage','Meatball','Spaghetti','Macaroni','Kitten','Puppy','Giraffe','Zebra','Parrot','Dolphin','Duckling','Sloth','Turtle','Goblin','Pixie','Gnome','Computer','Pirate','Ninja','Zombie','Robot']);
		}
		GetFarmName=function() {return RandomFarmName();}
		farmName=GetFarmName();
		farmNameL=l('farmName');
		farmNameL.innerHTML=farmName+'\'s Farm';
		farmNameSet=function(what)
		{
			farmName=what.replace(/\W+/g,' ');
			farmName=bakeryName.substring(0,28);
			farmNameRefresh();
		}
		farmNameRefresh=function()
		{
			var name=farmName;
			if (name.slice(-1).toLowerCase()=='s') name+='\' Farm'; else name+='\'s Farm';
			farmNameL.innerHTML=name;
			name=farmName.toLowerCase();
			if (name=='JRProgrammers') Win('God complex');
			if (name.indexOf('JRProgrammers',name.length-('JRProgrammers').length)>0 && !sesame) OpenSesame();
			recalculateGains=1;
		}
		farmNamePrompt=function()
		{
			Prompt('<h3>Name your farm</h3><div class="block" style="text-align:center;">What should your farm\'s name be?</div><div class="block"><input type="text" style="text-align:center;width:100%;" id="farmNameInput" value="'+farmName+'"/></div>',[['Confirm','if (l(\'farmNameInput\').value.length>0) {farmNameSet(l(\'farmNameInput\').value);Win(\'What\\\'s in a name\');ClosePrompt();}'],['Random','farmNamePromptRandom();'],'Cancel']);
			l('farmNameInput').focus();
			l('farmNameInput').select();
		}
		farmNamePromptRandom=function()
		{
			l('farmNameInput').value=RandomFarmName();
		}
		AddEvent(farmNameL,'click',farmNamePrompt);
