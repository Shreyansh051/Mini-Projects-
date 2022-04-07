//store the products array in localstorage as "products"
  document.querySelector("#product_form").addEventListener('submit',Arrayofproduct);


  var arr=JSON.parse(localStorage.getItem('products')) || [];
  function Arrayofproduct(event){
 event.preventDefault();

 var name=document.querySelector("#name").value;

 var price=document.querySelector("#price").value;

 var type=document.querySelector("#type").value;

 var image=document.querySelector("#image").value;

 function persondata(name,price,type,image){
 this.name=name;
 this.price=price;
 this.type=type;
 this.image=image;
 }
 const data=new persondata(name,price,type,image)
 arr.push(data);
 localStorage.setItem('products',JSON.stringify(arr));
  }