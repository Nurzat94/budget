let ftext = document.getElementById('ftext');
let calc = document.getElementById('calc');
let budgetCount = document.getElementById('budgetCount');
let stext = document.getElementById('stext')
let ttext = document.getElementById('ttext')
let add = document.getElementById('add')
let fourthTitle = document.getElementById('fourthTitle')
let fourthValue = document.getElementById('fourthValue')

calc.addEventListener('click', () => {
  budgetCount.innerHTML = ftext.value;
})
 
add.addEventListener('click',() => {
    fourthTitle.innerHTML = stext.value
    fourthValue.innerHTML =  ttext.value

})






