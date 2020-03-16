var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(candies , color , count){
    if(count <= 0) return "Number cannot be zero/negative";
    for (var i = 0; i < count; i++) {
        candies.unshift(color)
    }
    return candies.length;
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(candies, count){
    if(count > candies.length) return "Insufficient chocolates in the dispenser";
    else if(count <= 0) return "Number cannot be zero/negative";
    else{
        removed =[];
        for (var i = 0; i < count; i++)
            removed.push(candies.shift())
    }
    return removed;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(candies, count){
    if(count > candies.length) return "Insufficient chocolates in the dispenser";
    else if(count <= 0) return "Number cannot be zero/negative";
    else{
        removed =[];
        for (var i = 0; i < count; i++)
            removed.push(candies.pop())
    }
    return removed;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(candies, count, color){
    if(count > candies.length) return "Insufficient chocolates in the dispenser";
    else if(count <= 0) return "Number cannot be zero/negative";
    else{
        removed =[];
        for (var i = 0; i < count; i++){
            // if(candies[i] == color)
            removed.push(candies.pop())
        }
    }
    return removed;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(candies){
    var countlist = [];
    var visited = [];
    for (var i = 0; i < candies.length; i++) {
        if(elementVisited(candies[i],visited) == true){
            countlist.push(countElement(candies , candies[i]));
            visited.push(candies[i]);
        }
    }
    return countlist;
}

function elementVisited(element,list){
    for (i = 0; i < list.length; i++)
        if(element == list[i])
            return false
    return true;
}

function countElement(list,element){
    var count=0;
    for (i = 0; i < list.length; i++)
        if(element == list[i]){
            count+=1;
        }
    return count;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
// function sortChocolateBasedOnCount(){

// }

function sortChocolateBasedOnCount(chocolates) {
    countlist = noOfChocolates(chocolates);
    countlist.sort();
    return;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(list , count, color,changeTo){
    result =[];
    if(count <= 0) return "Number cannot be zero/negative";
    if(color == changeTo) return "Can't replace the same chocolates";
    for(var i=0;i<list.length;i++){
        if(count > 0  && list[i]==color){
            result.push(changeTo);
            count -= 1;
        }
        else
            result.push(list[i]);        
    }
    return result;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(candies,color,changeTo){
    if(candies.length <= 0) return [0,candies];
    if(color == changeTo) return "Can't replace the same chocolates";
    if(candies.length == 1) return [1,[changeTo]];
    for(var i=0 ;i < candies.length ;i++){
        if(candies[i]==color)
            candies[i] = changeTo;
    }
    return [candies.length,candies];
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
