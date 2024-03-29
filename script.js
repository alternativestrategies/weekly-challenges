 // Get two names to compare (a and b)
 function compare (a,b) {
            
    //split the names as strings into arrays
    var aName = a.split(" ");
    var bName = b.split(" ");
    
    // get the last names by selecting
    // the last element in the name arrays
    // using array.length - 1 since full names
    // may also have a middle name or initial
    var aLastName = aName[aName.length - 1];
    var bLastName = bName[bName.length - 1];
    
    // compare the names and return either
    // a negative number, positive number
    // or zero.
    if (aLastName < bLastName) return -1;
    if (aLastName > bLastName) return 1;
    return 0;
}

// Now let's get the string of names
var names = "Berta Caceres, Oscar Romero, Roque Dalton, Rutilio Grande"

// and break them into an array
var nameArray = names.split(", ");

// and sort the array using our compare function
nameArray.sort(compare);

// and finally, let's see what we've got
//document.write(nameArray);

for(var i = 0; i < nameArray.length; i++) {
    var newArray = nameArray[i].split(" ");
    document.write(`<li>${newArray[0]}<span class="last"> ${newArray[1]} </span></li>`);
    
}