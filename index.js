function convert(){
  let calVal = Number(document.getElementById("inputs").value)
 let fahVal = calVal*9/5+32;
 let result=document.getElementById("result")
 result.innerHTML=fahVal +" °F"
 }