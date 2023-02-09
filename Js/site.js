//Get the string from the page
//contoller function
function getValues() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString) {

    let revString = [];

    //reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}


//Display the reversed string
//View function
function displayString(revString) {

    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}