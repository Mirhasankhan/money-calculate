document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');
    const total = food + rent + clothes; 
    if(income<total){
        return alert('you cant use that amount of money');        
    }
    else{
        setValue('total-expenses',total)
    }   

    const balance = income - total;
    setValue('balance', balance);    
})

document.getElementById('save').addEventListener('click', function(){
    const income = getInputValue('income');
    const saveInput = getInputValue('save-input');
    const percentage = (income / 100) * saveInput;
    setValue('save-amount',percentage);
    
    const balance = getInputInnerText('balance');
    let remainingBalance;
    if(balance < percentage){
        return alert('You cant save more than your balance');        
    }
    else{
        remainingBalance = parseInt(balance) - parseInt(percentage); 
    }
    // const remainingBalance = parseInt(balance) - parseInt(percentage);   
    setValue('remaining-balance',remainingBalance);
    
})