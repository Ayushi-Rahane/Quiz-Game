var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');

var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var ques = document.getElementById("ques");
var A = ["Canberra","Harper Lee","Mars"];
var Q = ["What is the capital of Australia?","Who is the author of the book 'To Kill a Mockingbird'?","Which planet is known as the 'Red Planet'?"];
var Q1 =["Sydney","Melbourne","Canberra","Brisbane"];
var Q2 = ["J.K. Rowling","George Orwell","Harper Lee","Charles Dickens"];
var Q3 = ["Venus","Mars","Jupiter","Saturn"];
var i=0;

var count=0;
function validate(){

 
//checking answer
var selectedOption = document.querySelector('input[name="ans"]:checked');

 if(selectedOption){
selectedOption.checked=false;
if(selectedOption.value==A[i]){
count++;
}
else{
console.log("Wrong answer")
}
}
else{
alert("Kindly select option");
i--;
}

i++;
if(i>=Q.length){
   alert("Correct Answer: "+count+" out of "+Q.length);
   window.close();
 }
 ques.innerHTML = Q[i];
 console.log(Q[i]);
 if(Q[i]=="What is the capital of Australia?"){
    a1.value=Q1[0];
  a2.value=Q1[1];
  a3.value=Q1[2];
  a4.value=Q1[3];


  op1.innerHTML=a1.value;
  op2.innerHTML=a2.value;
  op3.innerHTML=a3.value;
  op4.innerHTML=a4.value;
 }
else if(Q[i]=="Who is the author of the book 'To Kill a Mockingbird'?"){
  a1.value=Q2[0];
  a2.value=Q2[1];
  a3.value=Q2[2];
  a4.value=Q2[3];


  op1.innerHTML=a1.value;
  op2.innerHTML=a2.value;
  op3.innerHTML=a3.value;
  op4.innerHTML=a4.value;
 }
 else if(Q[i]=="Which planet is known as the 'Red Planet'?"){
  a1.value=Q3[0];
  a2.value=Q3[1];
  a3.value=Q3[2];
  a4.value=Q3[3];


  op1.innerHTML=a1.value;
  op2.innerHTML=a2.value;
  op3.innerHTML=a3.value;
  op4.innerHTML=a4.value;
 }
}