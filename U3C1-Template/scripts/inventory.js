var getarr=JSON.parse(localStorage.getItem('products')) || [];

 document.querySelector("#add_product").addEventListener('click'
 ,showdata)

 document.querySelector("#add_product").addEventListener('click'
 ,function(){
     window.location.href="inventory.html"
     
 })

function showdata(event){
    getarr.map(function(elem,index){
       event.preventDefault
        var bigboss=document.
        createElement('div');
        
        
        var div1=document.createElement('h1');
        div1.innerText=elem.name;
        
        var div2=document.createElement('h1');
        div2.innerText=elem.price;
        
        var div3=document.createElement('h1');
        div3.innerText=elem.type;
        
        var div4=document.createElement('img');
        div4.setAttribute("src",elem.img)
        
        var div5=document.createElement("button");
        div5.innerText="Remove";
        div5.setAttribute("id","remove")
        bigboss.append(div1,div2,div3,div4,div5)
        
        
        document.querySelector("#products_data").append(bigboss)
        
        
        
        
        
        })
        
};
