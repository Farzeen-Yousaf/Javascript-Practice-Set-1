var originalText = "I love my country Pakistan. <br>I love my city. <br>I love my homeland."
var cities = ['Khanewal', 'Lahore','Multan','Quetta']

document.getElementById('originalTextBox').innerHTML = originalText;
 
// Show Output

function showOutput(output) {
    document.getElementById('output').innerHTML = output;
}

// Clear Output


 function clearOutput() {
     document.getElementById('output').innerHTML ='';
 }

// //  Clear Input Field
// function clearInputField() {
//      document.getElementById('input').innerText ='';
// }

// lower Case Text

function lowerCase() {
    
    let lowerCaseText = originalText.toLowerCase();
    document.getElementById('output').innerHTML = lowerCaseText;  
}


// Upper Case Text

function upperCase() {    
let upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;  
}


// Convert to Capitalize
function capitalize(){
    let capitalizeText = "<span style = 'text-transform :Capitalize;'>" + originalText + "</span>"
    document.getElementById('output').innerHTML = capitalizeText;
}


// BetterFormating
function betterFormating(){
    let text= document.getElementById('input').value ;
if (!text) {
    alert('Type your text')
    return;
}
text = text.toLowerCase();
// text = "<span style = 'text-transform :Capitalize;'>" + text + "</span>"
document.getElementById('output').style.textTransform = 'Capitalize'
document.getElementById('output').innerHTML = text ;
}

// Print All Cities

function printAllCties(){
    for (let i = 0; i < cities.length; i++) {
        let cityName = cities[i];
        document.getElementById('output').innerHTML +=  "<span>" + (i+1) + ')  ' + cityName + '<br>'+ "</span>";  
    }
}

// Add City In List

function addCity(){
    let city = document.getElementById('input').value ;
if (city==="") {
    alert('First Type Your City Name ');
    return;
}
     if (city.length < 3) {
        alert ('Enter Correct City.')
        return;
     }

     let cityFirstLetter = city.charAt(0).toUpperCase();
     let cityAllLetters = city.slice(1).toLowerCase();
     let cityInCapitalize = cityFirstLetter + cityAllLetters ;

let cityFound = false

for (let i = 0; i < cities.length; i++) {
   if (cities[i] === cityInCapitalize) {

    cityFound=true;

    let html = "<span style= 'color:red ;font-size: 20px ;font-weight:bold;'>" + cityInCapitalize + "</span>  is already in list.";
    document.getElementById('output').innerHTML =html ;
   }
}
if (cityFound === false) {
    cities.push(cityInCapitalize)
    let html = "<span style= 'color:green ;font-size: 20px ;font-weight:bold;'>" + cityInCapitalize + "</span>  is now added in list.";
    document.getElementById('output').innerHTML =html ;
    
}    
}
// Check Your City In List

function checkYourCity(){
    let city = document.getElementById('input').value ;
    
     if (city.length < 3) {
        alert ('Enter Correct City.')
        return;
     }

     let cityFirstLetter = city.charAt(0).toUpperCase();
     let cityAllLetters = city.slice(1).toLowerCase();
     let cityInCapitalize = cityFirstLetter + cityAllLetters ;

let cityFound = false

for (let i = 0; i < cities.length; i++) {
   if (cities[i] === cityInCapitalize) {

    cityFound=true;

    let html = "<span style= 'color:green ;font-size: 20px ;font-weight:bold;'>" + cityInCapitalize + "</span>  is already in list. &#128578;";
    document.getElementById('output').innerHTML =html ;
   }
}
if (cityFound === false) {
   
    let html = "<span style= 'color:red ;font-size: 20px ;font-weight:bold;'>" + cityInCapitalize + "</span>  is not found in list. &#128525;";
    document.getElementById('output').innerHTML =html ;   
}   
}

// Find This Word

function findWord() {
    
    let toFind = document.getElementById('input').value;

    let newOriginalText= originalText.toLowerCase();
    // console.log(find)
    if (!toFind) {
        alert('Enter the Word.');
        return;
    }
    toFind = toFind.toLowerCase();
    let find =newOriginalText.indexOf(toFind);

    if (find !== -1 ) {
        let html = "Your Word <span style= 'color:red ;font-size: 20px ;font-weight:bold;'>" + toFind + "</span>  Found At Index " + find ;
        document.getElementById('output').innerHTML = html ;   

    } else {

        let html = 'Your Word <span style= "color:red ;font-size: 20px ;font-weight:bold;">"' + toFind + "</span>  does Not Found ";
        document.getElementById('output').innerHTML =html ;   
        
    }
}

// Replace Word

  function replaceWith() {
    
    let word = document.getElementById('input').value
 
    if (!word) {
        alert('Type your word for replacing')
        return;
    }

    word =word.toLowerCase();
    let replaceWith= prompt('Enter a word that you want to replace with')

    if (!replaceWith) {
        alert('Type your word to replace with')
        return;
    }
    word =new RegExp(word , 'g')
    let paragraph = originalText.toLowerCase();

   let afterReplacing = paragraph.replace(word , replaceWith)
   document.getElementById('output').innerHTML = afterReplacing;
   document.getElementById('output').style.textTransform = 'Capitalize';
}