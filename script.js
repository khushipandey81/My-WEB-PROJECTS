
let products=[


{
brand:"Roadster",
name:"Men Blazer",
category:"MEN",
price:999,
old:1999,
img:"mens blazer.jpg"
},


{
brand:"HRX",
name:"Men T Shirt",
category:"MEN",
price:699,
old:1299,
img:"mens t shirt.avif"
},


{
brand:"Libas",
name:"Women Saree",
category:"WOMEN",
price:1499,
old:2999,
img:"saree.jpg"
},


{
brand:"Tokyo Talkies",
name:"Women Top",
category:"WOMEN",
price:699,
old:1299,
img:"women top.avif"
},


{
brand:"Kids",
name:"Kids Wear",
category:"KIDS",
price:799,
old:1599,
img:"kids.jpg"
}


];




let box=
document.querySelector("#products");



function showProducts(data){


box.innerHTML="";


data.forEach((p,i)=>{


box.innerHTML+=`


<div class="card">


<i onclick="wishlist(${i})"
class="fa-regular fa-heart heart">

</i>


<img src="${p.img}">


<h3>${p.brand}</h3>


<p>${p.name}</p>


<h2 class="price">

₹${p.price}

<del>
₹${p.old}
</del>

</h2>


<button onclick="addCart(${i})">

Add Bag

</button>


</div>


`;


});


}



showProducts(products);





function searchProduct(){


let text=
document.querySelector("#search")
.value.toLowerCase();



let result=
products.filter(p=>

p.name.toLowerCase()
.includes(text)

);


showProducts(result);


}





function filter(type){


let result=
products.filter(p=>

p.category==type

);


showProducts(result);


}





let cart=[];


function addCart(i){


cart.push(products[i]);


document.querySelector(".bag")
.innerHTML=

"Bag "+cart.length;


}





let wishlistData=[];


function wishlist(i){


wishlistData.push(products[i]);


alert("Added Wishlist ❤️");


}





function dark(){


document.body.classList.toggle("dark");


}