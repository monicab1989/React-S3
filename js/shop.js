// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
let ulElement = document.getElementsByClassName("list")[0];
let prices = document.getElementById("prices");
let totalElement=document.getElementById("total");
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    // 2. Add found product to the cartList array
    if (product.id === id) {
      cartList.push(products[i]);
      generateCart();
      calculateTotal();
      break;
    }
  }
}

function paintShoppingCar(){
  for(let i=0;i<cart.length;i++){
    let textElement = document.createTextNode(cart[i].quantity + " " + cart[i].name);
      let liElement = document.createElement("li");
      liElement.appendChild(textElement);
      liElement.style.listStyle="none";
      ulElement.appendChild(liElement);
      let priceElement = document.createElement("li");
      let textPrice = document.createTextNode("Price: " + cart[i].price);
      priceElement.appendChild(textPrice);
      priceElement.style.listStyle="none";
      prices.appendChild(priceElement);
  }
}

// Exercise 2
let buttonElement = document.createElement("button");
let textButton = document.createTextNode("Delete");
let containerElement = document.getElementById("containerList");
buttonElement.appendChild(textButton);
buttonElement.style.backgroundColor = "#E5E7E9";
containerElement.appendChild(buttonElement);
buttonElement.addEventListener("click", cleanCart, false);

function cleanCart() {
  cartList.length = 0;
  ulElement.innerHTML = "";
  prices.innerHTML="";
  total=0;
  totalElement.innerHTML="";

}

// Exercise 3

function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total=0;
  for (let i = 0; i < cartList.length; i++) {
    total = total + cartList[i].price;
    totalElement.innerHTML="Total: " + total + "€"; 
  }
}

// Exercise 4
function generateCart() {
  // Using the "cartList" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  let subtotal=0;
  cart.length=0;
  for(let i=0;i<cartList.length;i++){
    let productFind="";
    for(let j=0;j<cart.length;j++){
      if(cart[j].id===cartList[i].id){     
        productFind = cart[j];
        break;
      }
    }
    if(productFind===""){
      cart.push(
        {
        id: cartList[i].id,
        name: cartList[i].name,
        price: cartList[i].price,
        type: cartList[i].type,
        quantity: 1,
        subtotal: subtotal
      });
    }else {
      productFind.quantity++;
      subtotal=productFind.quantity*productFind.price;
    } 
    ulElement.innerHTML = "";
    prices.innerHTML="";
    paintShoppingCar();  
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}
