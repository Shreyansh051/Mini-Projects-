var todolist = JSON.parse(localStorage.getItem("Localsave"));
var completed=JSON.parse(localStorage.getItem("completedtask"))||[];
// console.log(todolist);
todolist.map(function(elem){
    var row=document.createElement("tr");
    var col1=document.createElement("td");
    col1.innerText=elem.name;
    var col2=document.createElement("td");
    col2.innerText=elem.qty;
    var col3=document.createElement("td");
    col3.innerText=elem.priority;
    var col4=document.createElement("td");
    col4.innerHTML="<button>MarkCompleted</button>";
    col4.addEventListener("click",function(){
        MarkCompleted(elem);
    });
    row.append(col1,col2,col3,col4);
    document.querySelector("#body").append(row);  
  });
  function MarkCompleted(elem)
  {
    completed.push(elem);
    localStorage.setItem("completedtask",JSON.stringify(completed));
};

