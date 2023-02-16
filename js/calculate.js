document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');
    const total = food + rent + clothes;    
    setValue('total-expenses',total)

    const balance = income - total;
    setValue('balance', balance);    
})

document.getElementById('save').addEventListener('click', function(){
    const income = getInputValue('income');
    const saveInput = getInputValue('save-input');
    const percentage = (income / 100) * saveInput;
    setValue('save-amount',percentage);
    
    const balance = getInputValue('balance');
    const remainingBalance = parseInt(balance) - parseInt(percentage);   
    setValue('remaining-balance',remainingBalance);
    
})