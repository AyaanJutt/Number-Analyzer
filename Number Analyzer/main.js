// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    if (getSign(numInput) == '+'){
        document.getElementById('sign').innerHTML = 'POSITIVE';
    } else if (getSign(numInput)=='-'){
        document.getElementById('sign').innerHTML='NEGATIVE'
    } else {
        document.getElementById('sign').innerHTML='ZERO'
    }

    if(evenOrOdd(numInput)=='even'){
        document.getElementById('even-odd').innerHTML='EVEN'
    } else {
        document.getElementById('even-odd').innerHTML='ODD'  
    }

    if(multipleTen(numInput)=='true'){
        document.getElementById('multiple').innerHTML='TRUE'
    } else {
        document.getElementById('multiple').innerHTML='FALSE'    
    }
}

function getSign(number){
    if(number>0){
        return '+';
    } else if(number<0){
        return '-'
    } else {
        return 'zero'
    }
}

function evenOrOdd(eONum){
    if(eONum%2==0){
        return'even'
    } else{
        return'odd'
    }
}

function multipleTen(mTNum){
    if(mTNum%10==0){
        return'true'
    } else{
        return'false'
    }
}

// Analyze Functions
