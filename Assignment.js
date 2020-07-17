/**1st problem unit converter */

function feetToMile(feet){
    if(feet < 0){
        return "invalid value. Yor valu should no be negative";
    }
    var mile = feet / 5280;     /**1 mile = 5280 feet. */
    return mile;
}
var result = feetToMile(5280);
console.log(result);

/**2nd problem wood calculator */

function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        return "Your data should be positive";
    }
    var neededWood = (chair * 1) + (table * 3) + (bed * 5); /**we know that 1 chair, 1 table and 1 bed nedd 1,3 and 5 qubic wood*/
    return neededWood;
}

var totalWood = woodCalculator(2,2,1);
console.log(totalWood);

/**3rd problem brick calculator */

function brickCalculator(numberOfFloor){
    if(numberOfFloor <=0){
        return "wrong input";
    }
    else if(numberOfFloor <=10){
        requireBrick = 10*15*1000; /**'accroding to qus' In 1th to 10th floor each floor is 15 feet and every feet need 1000 brick*/
    }
    else if(numberOfFloor <=20){
        requireBrick = 10*15*1000 + (numberOfFloor - 10)*12*1000; /**11-20th floor. each floor is 12 fet */
    }
    else{
        requireBrick = 10*15*1000 + 10*12*1000 + (numberOfFloor-20)*10*1000; /**after 20th floor each floor is 10 feet in hight */
    }
    return requireBrick;
}

var newBuilding = brickCalculator(23);
console.log(newBuilding);

/**4th problem */

function tinyFriend(names){
    if(names == 0){
        return "This could not be a smallest name.write a proper name of empty space"
    }
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){
        var currentNumber = names[i];
        if(currentNumber.length < smallest.length){
            smallest = currentNumber;
        }
    }
    return smallest;
}

var test = tinyFriend(["name", "eri","ae",
'parveg', "piu", "pitu"]);
console.log(test);
