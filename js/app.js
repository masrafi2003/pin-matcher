function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('keypad').addEventListener('click',function(event){
    const number =  event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }

    }
    else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const failNotify = document.getElementById('notify-fail');
    const successNotify = document.getElementById('notify-success');
    if(pin == typedNumbers){
        
        successNotify.style.display = 'block';
        failNotify.style.display = 'none';
    
    }
    else{
        console.log('Not Matched');
        
        failNotify.style.display = 'block';
        successNotify.style.display = 'none';
    }
}
