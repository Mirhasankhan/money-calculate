// function getInputValue(id){
//     const inputValue = document.getElementById(id).value;
//      return parseInt(inputValue);
// }
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const removeString = parseInt(inputValue)
    if (removeString < 0 || isNaN(removeString)) {
        document.getElementById(id).value = '';
        return alert('please enter a valid number!');
    }
    else return parseInt(removeString);
}
function getInputInnerText(id){
    const inputValue = document.getElementById(id).innerText;
    return parseInt(inputValue);
}


function setValue(id, value){
    document.getElementById(id).innerText = value;
}