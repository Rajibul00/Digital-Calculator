let userInput = document.querySelector('#userInput');
let expression =''
let ns = document.querySelectorAll('.ns');
ns.forEach(function (val){
   val.addEventListener('click',function(){
    expression = expression + val.innerText
    userInput.value = expression;
   })

})

function erase(){
    userInput.value = "";
    window.location.reload()

}
function equal(){

    userInput.value =   eval(expression);
    expression =  eval(expression)
}

