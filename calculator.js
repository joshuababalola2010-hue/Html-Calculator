
let screen2Clear = false;

let message;
let getFirstVal;

function numberDisplay(numbers){
    screen2.value += numbers;

    if(screen2Clear){
        console.log(screen2Clear);
        
        screen2.value = numbers;
        screen2Clear = false;
    }

   
};


function operators(oper){

    message = oper;
    getFirstVal = screen2.value;
    screen1.value = getFirstVal + message;

    screen2Clear = true;
   
    
    

};

function equals(){
    if(message == '+'){
        screen1.value = getFirstVal + message + screen2.value+ '=';
        screen2.value = Number(getFirstVal) + Number(screen2.value);
    }
    else if(message == '-'){
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = getFirstVal - screen2.value
    }
    else if(message == 'x'){
        screen1.value = getFirstVal + message + screen2.value + '=';
        screen2.value = getFirstVal * screen2.value;
    }
};



function decimal(deci){
    screen2.value += deci;
}