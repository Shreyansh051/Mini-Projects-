 document.querySelector("#form").addEventListener("submit", formSubmit);
var todoArr = JSON.parse(localStorage.getItem("Localsave"))||[];
console.log(todoArr)

function formSubmit(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;


  var todoObj = {
    name: name,
    qty: qty,
    priority: priority,
  };
  todoArr.push(todoObj);
  localStorage.setItem("Localsave", JSON.stringify(todoArr));
}


// todoArr.map(function(elem){
//   var row=document.createElement("tr");
//   var col1=document.createElement("td");
//   col1.innerText=elem.name;
//   var col2=document.createElement("td");
//   col1.innerText=elem.qty;
//   var col3=document.createElement("td");
//   col1.innerText=elem.priority;
//   var col4=document.createElement("button");
//   col4.innerText="MarkCompleted";
//   row.append(col1,col2,col3,col4);
//   document.querySelector("tbody").append(row);  
// })



