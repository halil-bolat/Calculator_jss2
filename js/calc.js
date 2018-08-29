

var output = document.getElementById("screen");

var btn = document.getElementsByClassName("buttonNum");

var opp = document.getElementsByClassName("operator");

var num1 = 0;

var num2 = 0;

var opp1 = undefined;

var init = "";

document.getElementsByClassName("buttonClear")[0].addEventListener("click", function(event){
  output.innerHTML = "";
  num1 = 0;
  num2 = 0;
  opp1 = undefined;
})

document.getElementsByClassName("equals")[0].addEventListener("click", function(event){
  switch(opp1) {
    case "*":
      output.innerHTML = num1 * num2;
      break;
    case "+":
      output.innerHTML = num1 + num2;
      break;
    case "-":
      output.innerHTML = num1 - num2;
      break;
    default:
      output.innerHTML = num1 / num2;
  }
  num1 = 0;
  num2 = 0;
  opp1 = undefined;
})

for (var i = 0; i < opp.length; i++) {
  opp[i].addEventListener("click", function(event){
    output.innerHTML = event.target.innerHTML;
    opp1 = event.target.innerHTML;
    console.log(event.target.innerHTML);
  })
}


for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(event){
    output.innerHTML = event.target.innerHTML;
    if (!opp1){
      num1 = parseInt(event.target.innerHTML);
    }
    else {
      num2 = parseInt(event.target.innerHTML);
    }
    console.log(event.target.innerHTML);
  })
}
