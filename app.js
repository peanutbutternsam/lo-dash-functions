LO-Dash
/***************************************************
*******************Lo-Dash Functions****************
****************************************************/



//***********************EACH***********************
//**************************************************
function each(array, action){
	for(var i =0; i<array.length; i++){
	//for each item in array
		action(array[i], i, array);
	}
}

//***********************MAP************************
//**************************************************

//iterates through array, applying callback to each element
function map(array, callback){
	result = [];
	for(var i=0; i<array.length; i++){
	result.push(callback(array[i]));
	}
	return result;
}

//***********************COMPACT********************
//**************************************************

//takes an array as an argument and returns all non-falsey values
//why is it still returning NaN
function compact(array){
	result = [];
	for(var i=0; i<array.length; i++){
		if(array[i] !== false &&
		   array[i] !== null && 
		   array[i] !== undefined && 
		   array[i] !== '' && 
		   array[i] !== 0 && 
		   array[i] !== NaN)
			result.push(array[i]);
	}
	return result;
}

//***********************COUNTER*********************
//***************************************************

//returns the number of elements in an array
//How to use the same function for objects and strings too?
function size( collection ){
	counter = 0
	for( var i = 0; i < collection.length; i++ ){
	counter++
	}
	return counter;
}

//********************forEachRight*******************
//***************************************************

//iterates over collection of elements from
//right to left and applies a callback function to each element

function forEachRight( collection, callback ){
	results = [];
	for(var i = collection.length - 1; i >= 0; i--){
		results.push(callback(collection[i]));
	}
	return results;
}

//***********************MIN***************************
//*****************************************************

//returns the smallest element in the array
function minimum( collection, callback ){
	min = collection[0];
	for(var i = 0; i < collection.length; i++){
		min = (min < collection[i])? min : collection[i];
	}
	return min;
}

//***********************MAX***************************
//*****************************************************

//returns the largest element in the array
function maximum( collection, callback ){
	max = collection[0];
	for var i = 0; i < collection.length; i++){
		max = (max < collection[i])? max : collection[i];
	}
	return max;
}

//***********************PLUCK*************************
//*****************************************************

//Removes specified elements from array and pushes occurrences of element to new array, results, then returns the new array
//Only works on arrays and strings, go back and fix for objects later

function pluck(collection, element){
	results = [];
	if(typeof collection === 'array' || 'string'){
		for(var i = 0; i < collection.length; i++){
			if(collection[i] === element){
			results.push(collection[i]);
			}
		}
	return results;
	}
}

//***********************FIRST*************************
//*****************************************************

//The function combined should return a new array with the first x amount of elements in the array and also be able to return a new array that takes the elements from the array that pass as true when a callback function is applied to them and return them in a new array if they pass that test.

function first( array, callback ){
	results = [];
	for( var i = 0; i<array.length;i++ ){
		if( callback(array[i])){
			results.push(array[i]);
		}
	}
	return results;
}

function first( array, numOfArgs ){
	results = [];
	for( var i =0; i < numOfArgs; i++ ){
	results.push( array[i] );
	}
	return results;
	}

//***********************UNION*************************
//*****************************************************

function union(array1){
	results = [];
	results.push(array1[0]);
	for(var i = 0; i < results.length; i++){
		for(var j = 1; j < array1.length; j++){
			if(array1[j] != results[i]){
				results.push(array1[j]);
			}
		}	
	}
	return results;
}


function union(array1){
	counter = 0;

	for(var i = 0; i < array1.length;){
		
		for(var e = 0; e < array1.length; e++){
			if(array1[i] != array1[e]){
				counter+=1;
			}
		}

		if ( counter > 1 ) {
			array1.splice(i,1);
		} else {
		 i+=1;
		}
		counter = 0;
	}
	return array1;
}

[1,1,2,3,4]

//***********************FILTER*************************
//******************************************************

function filter(array, callback){
	results = [];
	for(var i = 0; i<array.length; i++){
		if( callback(array[i]) ){
			results.push(array[i]);
		}
	}
	return results;
}

//***********************RANGE***************************
//*******************************************************

function range(start, end){
	results = [];
	for( var i = start; i < end; i++ ){
		results.push(i);
	}
	return results;
}

//***********************indexOf*************************
//*******************************************************

function indexOF( array, value ){
	for( var i = 0; i < array.length; i++){
		if(array[i] === value){
			return i;
		}
	}
}

//***********************SIZE****************************
//*******************************************************

function size( array ){
	count = 0;
	for(var i = 0; i <array.length; i++){
		count++;
	}
	return count;
}

//***********************DIFFERENCE**********************
//*******************************************************
//excludes values from given array
//fix it so you can provide multipe values, array of values

function difference(array, values){
	results = [];
	for( var i = 0; i < array.length; i++ ){
		if( array[i] !== values){
			results.push(array[i]);
		}
	}
	return results;
}

//***********************REST***************************
//******************************************************
//returns array beyond index 0
//add functionality so if you apply a callback and
//it returns truey for val at index 0, it is pushed as well

function rest(array, callback){
	results = [];
	for( var i = 0; i < array.length; i++ ){
		if( i !== 0){
			results.push(array[i]);
		}
	}
	return results;
}

//***********************findIndex**********************
//******************************************************

function findIndex( array, callback ){
	for(var i = 0; i <array.length; i++){
		if( callback(array[i])){
			return i;
		}
	}
	return -1;
}

//***********************findLastIndex******************
//******************************************************

function findLastIndex( array, callback ){
	for(var i = array.length - 1; i > 0; i--){
		if( callback(array[i])){
			return i;
		}
	}
	return -1;
}

//***********************PULL***************************
//******************************************************

function pull(array, value){
	results = [];
	for(var i = 0; i < array.length; i++){
		if(array[i] !== value){
			results.push(array[i]);
		}
	}
	return results;
}

//**************************LAST*************************
//*******************************************************

//returns last x values in the array that pass the test provided in the applied function
function last(array, fromRight, callback) {
	results = [];
		for( var i = array.length - 1; i >= fromRight - 1; i-- ){
			if( callback(array[i]) ){
				results.push( array[i] );
			}
		}
			return results.reverse();
}

//***********************REMOVE**************************
//*******************************************************

/*removes all values that return 'truey' then returns a
new array with those values*/

function remove (array, callback){
	results = [];
	for(var i = 0; i < array.length; i++){
		if(callback(array[i])){
			results.push(array[i]);
		}
	}
	return results;
}

//***********************uniq****************************
//*******************************************************

//removes duplicate values so only one of each appears in new array
//does not work if there are more than 3 of one value
function uniq (array) {
	results = [];
	sortedArr = array.sort();

	for(var i = 0; i < array.length; i++){
		if(sortedArr[i+1] == sortedArr[i]){
			results.push(sortedArr[i]);
		}
	}
	return results;
}

//*******************************************************
//*******************************************************


















