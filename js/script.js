var s1 = document.querySelector('#number1');
var s2 = document.getElementById('number2');
var calc = document.getElementById('calculate');
var result;
var toplaBtn = document.getElementById('topla');
var cikarBtn = document.getElementById('cikar');
var carpBtn = document.getElementById('carp');
var bolBtn = document.getElementById('bol');



calc.onclick=function(e){
    e.preventDefault()
    const sayi1 = +(s1.value);
    const sayi2 = +(s2.value);
    if(toplaBtn.checked){
        result = sayi1 + sayi2;
    }else if(cikarBtn.checked){
        result = sayi1 - sayi2;
    }else if(carpBtn.checked){
        result = sayi1 * sayi2;
    }else if(bolBtn.checked){
        result = sayi1 / sayi2;
    }else{
        result = "Please enter values";
    }
    document.getElementById('toplam').innerHTML="Result : "+result;
}