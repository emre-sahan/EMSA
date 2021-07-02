/* Hesap Makinesi Start */

function click1() {
  document.calculator.display.value += 1;
}
function click2() {
  document.calculator.display.value += 2;
}
function click3() {
  document.calculator.display.value += 3;
}
function click4() {
  document.calculator.display.value += 4;
}
function click5() {
  document.calculator.display.value += 5;
}
function click6() {
  document.calculator.display.value += 6;
}
function click7() {
  document.calculator.display.value += 7;
}
function click8() {
  document.calculator.display.value += 8;
}
function click9() {
  document.calculator.display.value += 9;
}
function click0() {
  document.calculator.display.value += 0;
}
function clickadd() {
  document.calculator.display.value += "+";
}
function clicksub() {
  document.calculator.display.value += "-";
}
function clickmulti() {
  document.calculator.display.value += "*";
}
function clickbol() {
  document.calculator.display.value += "/";
}
function clickclr() {
  document.calculator.display.value = "";
}
function clickequ() {
  var Display = eval(document.calculator.display.value);
  document.calculator.display.value = Display;
}

/* Hesap Makinesi Finish */

/* Kürenin Hacmi Start*/

function kure() {

    var hacim;

    var r=document.getElementById('r').value;

    hacim= (4/3) * Math.PI * Math.pow(r, 3);

    document.getElementById('result').value=hacim;
    document.getElementById('result,').textContent=hacim;

}



function kuretemizle(){

  
  document.getElementById('result').value="";
  document.getElementById('r').value="";
}

/* Kürenin Hacmi Finish */


/* Üçgenin Alanını Hesaplama */

function ucgenalanı(){
     
    var alan;

    var taban =document.getElementById('tabanuzunlugu').value;

    var yukseklık=document.getElementById('yukseklık').value;

    alan=(taban*yukseklık)/2;

    document.getElementById('result1').value=alan;

    document.getElementById('result1').textContent=alan;
}   
 


function ucgentemizle(){

  document.getElementById('result1').value="";
  document.getElementById('tabanuzunlugu').value="";
  document.getElementById('yukseklık').value="";
}

/* Üçgenin Alanını Hesaplama */

function daire(){
     
    var dairealan;

    var dairecevre;

    var yaricap =document.getElementById('yaricap').value;

  

    dairealan=Math.PI*yaricap*yaricap;

    dairecevre=2*Math.PI*yaricap;

    document.getElementById('result2').value=dairealan;
    document.getElementById('result2').textContent=dairealan;

    document.getElementById('result3').value=dairecevre;
    document.getElementById('result3').textContent=dairecevre;
    
  
}   
 

function dairetemizle(){

  document.getElementById('result2').value="";
  document.getElementById('result3').value="";
  document.getElementById('yaricap').value="";
}