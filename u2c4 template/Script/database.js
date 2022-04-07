var showData=JSON.parse(localStorage.getItem("studentDataBase"))||[]; 

var admittedStudents=JSON.parse(localStorage.getItem("admitted"))||[];
console.log(showData);
var rejectedStudents=JSON.parse(localStorage.getItem("rejected"))||[];
console.log(showData);
showData.map(function(elem){
 
    var row=document.createElement("tr");
    var col1=document.createElement("td");
    col1.innerText=elem.name;
    var col2=document.createElement("td");
    col2.innerText=elem.age;

    var col3=document.createElement("td");
    col3.innerText=elem.gender;
    var col4=document.createElement("td");
    col4.innerText=elem.email;
    var col5=document.createElement("td");
    col5.innerText=elem.phone;
    var col6=document.createElement("td");
    col6.innerHTML="<button>Accept</button>";
    col6.addEventListener('click',function(){
        Foradmitted(elem);
    });
        var col7=document.createElement("td");
    col7.innerHTML="<button>Reject</button>";
    col7.addEventListener('click',function(){
        Forrejected(elem);
    });
        
    row.append(col1,col2,col3,col4,col5,col6,col7);
    document.querySelector("#body").append(row);
    

});

function Foradmitted(elem){
    admittedStudents.push(elem);
    localStorage.setItem("admitted",JSON.stringify(admittedStudents))
  };

  function Forrejected(elem){
    rejectedStudents.push(elem);
    localStorage.setItem("rejected" ,JSON.stringify(rejectedStudents))
  };