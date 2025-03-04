const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const differenceTxt = document.getElementById("difference");
const productTxt = document.getElementById("product");
const qoutientTxt = document.getElementById("qoutient");


let sum = 0;
let difference = 0;
let product = 0;
let qoutient = 0;

function calculate() { 
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumTxt.innerHTML = sum;

        difference = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        differenceTxt.innerHTML = difference;

        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        productTxt.innerHTML = product;

        qoutient = parseInt(num1Txt.value)  / parseInt(num2Txt.value);
        qoutientTxt.innerHTML = qoutient;
    }

}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    sumTxt.innerHTML = "";
    differenceTxt.innerHTML = "";
    productTxt.innerHTML = "";
    qoutientTxt.innerHTML = "";
    sum = 0;
    difference = 0;
    product = 0;
    qoutient = 0;
   
   

}