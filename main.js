let snailArray = [];
let array = [[1,2,3,1], [4,5,6,4], [7,8,9,7], [7,8,9,7]]
let startPointTopLeft = 0;
let startPointTopRight = 1;
let startPointBottomRight1 = array[0].length - 1;
let startPointBottomRight2 = array[0].length - 2;
let startPointBottomLeft1 = array.length - 2;
let startPointBottomLeft2 = 0;
let amountOfIndices = array[0].length * array.length;

function snail (array) {
    // If the array is empty return an empty array
    if(array[0].length === 0){
        return [];
    }

    // If the length of the array is 1, return the index
    if(array[0].length === 1){
        return array[0];
    }

    // Traverse until all values are stored
    for(let i = 0; i < amountOfIndices; i++){
        moveRight();
        moveDown();
        moveLeft();
        moveUp();
    }

    return snailArray;
}

function moveRight () {
    
    // Store all the top array values from left to right
    for(let j = startPointTopLeft; j < array.length; j++){
        if(array[startPointTopLeft][j] !== null){
            snailArray.push(array[startPointTopLeft][j]);
            array[startPointTopLeft][j] = null;
        }

        else if(array[startPointTopLeft][j] === null){
            break;
        }
    }
    
    // Move the starting point
    startPointTopLeft++;
}

function moveDown () {
    
    // Store all the top arrays from up to down
    for(let i = startPointTopRight; i < array.length; i++){
        if(array[i][array.length - startPointTopRight] !== null){
            snailArray.push(array[i][array.length - startPointTopRight]);
            array[i][array.length - startPointTopRight] = null;
        }
        
        else if(array[i][array.length - startPointTopRight] === null){
            break;
        }
    }
    
    // Move the starting point
    startPointTopRight++;
}

function moveLeft () {
    
    // Store all the array values from right to left
    for(let j = startPointBottomRight2; j >= 0; j--){
        if(array[startPointBottomRight1][j] !== null){
            snailArray.push(array[startPointBottomRight1][j]);
            array[startPointBottomRight1][j] = null;
        }
        
        else if(array[startPointBottomRight1][j] === null){
            break;
        }
    }
    
    // Move the starting point
    startPointBottomRight1--;
    startPointBottomRight2--;
}

function moveUp () {
    
    // store all the array values from down to up
    for(let i = startPointBottomLeft1; i >= 0; i--){
        if(array[i][startPointBottomLeft2] !== null){
            snailArray.push(array[i][startPointBottomLeft2]);
            array[i][startPointBottomLeft2] = null;
        }
        
        else if(array[i][startPointBottomLeft2] === null){
            break;
        }
    }
    
    // Move the starting point
    startPointBottomLeft1--;
    startPointBottomLeft2++;
}