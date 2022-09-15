                var score = 0;
                
                var upgrade = {
                    name: [
                        ],
                    description: [
                        ],
                    image: [
                        ],
                    type: [
                        ],
                    cost: [
                        ],
                    toolIndex: [
                        ],
                    requirement: [
                        ],
                    bonus: [
                        ],
                    purchased: [],
                    
                    purchase: function(index) {
                    }
                };

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

                function buyFarmer() {
                    if (score >= farmerCost) {
                        score = score - farmerCost;
                        farmers = farmers + 1;
                        farmerCost = Math.round(farmerCost * 1.15);

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
                        trowelCost = Math.round(trowelCost * 1.15);

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
                        shovelCost = Math.round(shovelCost * 1.15);

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
                        hoeCost = Math.round(hoeCost * 1.15);

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
                        tractorCost = Math.round(tractorCost * 1.15);

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
                        cropSprayerCost = Math.round(cropSprayerCost * 1.15);

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
                        cultivatorCost = Math.round(cultivatorCost * 1.15);

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
                        harvesterCost = Math.round(harvesterCost * 1.15);

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
                        fieldCost = Math.round(fieldCost * 1.15);

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
                        idahoCost = Math.round(idahoCost * 1.15);

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
                        irelandCost = Math.round(irelandCost * 1.15);

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
                        potatolandCost = Math.round(potatolandCost * 1.15);
                        
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
                        redPotatoCost = Math.round(redPotatoCost * 1.15);
                        
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
                        goldenPotatoCost = Math.round(goldenPotatoCost * 1.15);
                        
                        document.getElementById("score").innerHTML = score;
                        document.getElementById("goldenpotatocost").innerHTML = goldenPotatoCost;
                        document.getElementById("goldenpotatoes").innerHTML = goldenPotatoes;
                        updateScorePerSecond();
                    }
                }
                
                function potatorain() {
                    const potatorain = object.create(document.getElementById("potato"))
                }

                function addToScore(amount) {
                    score = score + amount;
                    document.getElementById("score").innerHTML = score;
                }

                function updateScorePerSecond() {
                    scorePerSecond = farmers + trowels * 10 + shovels * 18 + hoes * 20 + tractors * 50 + cropSprayers * 100 + cultivators * 500 + harvesters * 1000 + fields * 2500 + idahos * 418527 + irelands * 1949333 + potatolands * 5000000000 + redPotatoes * 
8000000000 + goldenPotatoes * 10000000000;
                    document.getElementById("scorepersecond").innerHTML = scorePerSecond;
                }
                
                function saveGame() {
                    var saveGame = {
                        score: score,
                        clickingPower: clickingPower,
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
                        goldenPotatoes: goldenPotatoes
                    };
                    localStorage.setItem("gameSave", JSON.stringify(gameSave));
                }
                
                function loadGame() {
                    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
                    if (typeof savedGame.score !== "undefined") score = savedGame.score;
                    if (typeof savedGame.clickingPower !== "undefined") clickingPower = savedGame.clickingPower;
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
                }
                
                function resetGame() {
                    if (confirm("Are you sure that you want to reset your game?")) {
                        var gameSave = {};
                        localStorage.setItem("gameSave", JSON.stringify(gameSave));
                        location.reload();
                    }
                }
                
                window.onload = function() {
                    loadGame();
                    updateScorePerSecond();
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
                };

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
                    score = score + redPotatoes * 8000000000;
                    score = score + goldenPotatoes * 10000000000;
                    document.getElementById("score").innerHTML = score;
                    document.title = score + " Potatoes - Potato Clicker ";
                    updateScorePerSecond();
                }, 1000); // 1000ms = 1 second
                
                setInterval(function() {
                    saveGame();
                    updateScorePerSecond();
                }, 30000); // 30000ms = 30 seconds
                
                document.addEventListener("keydown", function(event) {
                    if (event.ctrlKey && event.which == 83) { // ctrl + s
                        event.preventDefault();
                        saveGame();
                    }
                }, false);
                
                addToScore(0);

