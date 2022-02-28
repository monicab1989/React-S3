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
let totalElement = document.getElementById("total");

/*function buy(id) {
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
}*/

// Exercise 2

function cleanCart() {
  cartList.length = 0;
  total = 0;
 
  ulElement.innerHTML = "";
  prices.innerHTML = "";
  totalElement.innerHTML = "";
}

// Exercise 3

/*function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total=0;
  for (let i = 0; i < cartList.length; i++) {
    total = total + cartList[i].price;
    totalElement.innerHTML="Total: " + total + "€"; 
  }
}*/

//Modificado el ejercicio 3 para hacer el 7

function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
    cart[i].subtotal=total;
    totalElement.innerHTML="Total: " + total + "€"; 
  }
}

// Exercise 4
/*function generateCart() {
  // Using the "cartList" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
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
        subtotal: 0,
      });
    }else {
      productFind.quantity++;
      subtotal=productFind.quantity*productFind.price;
    } 
    ulElement.innerHTML = "";
    prices.innerHTML="";
    paintShoppingCart(); 
    applyPromotionsCart(); 
  }
}
function paintShoppingCart(){
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
*/

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    cart[i].subtotalWithDiscount=cart[i].price;
    cart[i].subtotal=total;
    if (cart[i].quantity >= 3 && cart[i].name === "cooking oil") {
      cart[i].subtotalWithDiscount = (cart[i].price - 0.5) * cart[i].quantity;
    }
    if (cart[i].quantity >= 10 && cart[i].name === "Instant cupcake mixture") {
      cart[i].subtotalWithDiscount = (2 * cart[i].price) / 3;
    }
  }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.id == id) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        type: product.type,
        quantity: 0,
        subtotal: 0,
        subtotalWithDiscount: 0,
      });
      let productFind = "";
      for (let j = 0; j < cart.length; j++) {
        if (cart[j].id === product.id) {
          productFind = cart[j];
          ulElement.innerHTML = "";
          prices.innerHTML = "";
          break;
        }
      }
      if (productFind === "") {
        cart.push(productFind);
      } else {
        productFind.quantity++;
        subtotal = productFind.quantity * productFind.price;
      }
      calculateTotal();
      applyPromotionsCart();
      ulElement.innerHTML = "";
      prices.innerHTML = "";
      printCart();
      
    }
  }
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for(let i=0; i<cart.length; i++){
    if(cart[i].id==id && cart[i].quantity > 1){
      cart[i].quantity=cart[i].quantity-1;
      console.log(cart[i].quantity);
    }else if(cart[i].id==id && cart[i].quantity=== 1){
      cart.splice(i,-1);
    }
  }
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  for(let i=0;i<cart.length;i++){
     if(cart[i].quantity!=0){
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
}

      let buttonElement = document.createElement("button");
      let textButton = document.createTextNode("Delete");
      let containerElement = document.getElementById("containerList");
      buttonElement.appendChild(textButton);
      buttonElement.style.backgroundColor = "black";
      buttonElement.style.color = "white";
      containerElement.appendChild(buttonElement);
      buttonElement.addEventListener("click", cleanCart, false);

      