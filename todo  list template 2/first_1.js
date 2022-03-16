document.querySelector("#form").addEventListener("submit",forMSubmit);

 var Addarr=JSON.parse(localStorage.getItem("AddProduct")) || [];

  function forMSubmit(event){
   
   var Category=document.querySelector("#cat").value;
   var Title=document.querySelector("#title").value;
   var Description=document.querySelector("#des").value;
   var Price=document.querySelector("#price").value;
  var addobj={
     cat:Category,
     title:Title,
     des:Description,
     price:Price,
  };
  Addarr.push(addobj);
  localStorage.setItem("AddProduct",JSON.stringify(Addarr));

 }

  Addarr.map(function(elem){
   var row=document.createElement("tr");

   var col1=document.createElement("td");
   col1.innerText=elem.cat;
   
   var col2=document.createElement("td");
   col2.innerText=elem.title;
  
   var col3=document.createElement("td");
   col3.innerText=elem.des;
   var col4=document.createElement("td");
   col4.innerText=elem.price
   row.append(col1,col2,col3,col4);
   document.querySelector("tbody").append(row);
  })

 
 
