function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return parseInt(inputValue);
}


function setValue(id, value){
    document.getElementById(id).innerText = value;
}