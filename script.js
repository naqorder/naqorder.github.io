
let numberYes = 0;
let numberNo = 0;
let total = numberYes + numberNo;
let ratio;


function functionYes() {
  numberYes++;
  total++;
  preRatio = numberYes / total;
  ratio = preRatio * 100;
  
  document.getElementById("demoYes").innerHTML = "Yes total: " + numberYes;
  document.getElementById("demoRatio").innerHTML = "Ratio Yes/No :" + ratio.toFixed(2) + "%";
}

function functionNo() {
  numberNo++;
  total++;
  preRatio = numberYes / total;
  ratio = preRatio * 100;
  
  document.getElementById("demoNo").innerHTML = "No total: " + numberNo;
  document.getElementById("demoRatio").innerHTML = "Ratio Yes/No :" + ratio.toFixed(2) + "%";
}


   