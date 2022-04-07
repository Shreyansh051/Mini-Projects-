document.querySelector("#form").addEventListener("submit",formsubmit);

var MyArr=JSON.parse(localStorage.getItem("studentDataBase"))|| [];
console.log(MyArr)
function formsubmit(event){
    // event.preventDefault();
    var name=document.querySelector("#name").value;
    var age=document.querySelector("#age").value;
    var gender=document.querySelector("#gender").value;
    var email=document.querySelector("#email").value;
    var phone=document.querySelector("#phone").value;
    var  storeOBJ={
     name:name,
     age: age,
     gender:gender,
     email:email,
     phone:phone,
     };
     MyArr.push(storeOBJ);
     localStorage.setItem("studentDataBase", JSON.stringify(MyArr));
};