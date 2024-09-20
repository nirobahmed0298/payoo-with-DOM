function getInputValue(id){
    let inputValue = document.getElementById(id).value;
    let inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getText(id){
    let currentMoney = document.getElementById(id).innerText;
    let moneyNumber = parseFloat(currentMoney);
    return moneyNumber;
}
function showSectionByID(id){
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('trans-form').classList.add('hidden');
    // Show Section;
    document.getElementById(id).classList.remove('hidden');

}
