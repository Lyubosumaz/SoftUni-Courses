function solve() {
   let allProducts = [];
   let totalMoney = 0;

   let addButtons = document.querySelectorAll("button.add-product");
   let products = document.querySelectorAll("div.product");

   let output = document.getElementsByTagName("textarea")[0]
   for (let i = 0; i < addButtons.length; i++) {
      products[i].addEventListener("click", function () {
         let name = products[i].childNodes[3].childNodes[1].textContent;
         if (!allProducts.includes(name)) {
            allProducts.push(name);
         }
         let price = Number(products[i].childNodes[7].textContent);
         console.log(price);
         totalMoney += price;

         output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      });
   }

   // let checkoutButton = document.getElementsByClassName("checkout")[0];
   let checkoutButton = document.querySelector("button.checkout");
   checkoutButton.addEventListener("click", function () {

      for (const button of addButtons) {
         button.disabled = true;
      }
      output.textContent += `You bought ${allProducts.join(', ')} for ${totalMoney.toFixed(2)}.`
   });
}