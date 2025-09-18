 // JavaScript code to calculate and update the total price
 const basicBikePrice = 1000;

 const addOnPrices = {
   helmet: 50,
   customised_color: 100,
   bike_cover: 30,
 };
 
 const totalPriceDisplay = document.getElementById('totalPrice');
 
 function calculateTotalPrice() {
   let totalPrice = basicBikePrice;
 
   for (const addOn in addOnPrices) {
     if (document.getElementById(addOn).checked) {
       totalPrice += addOnPrices[addOn];
     }
   }
 
   totalPriceDisplay.textContent = `$${totalPrice}`;
 }
 
 
 const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 checkboxes.forEach(checkbox => checkbox.addEventListener('change', calculateTotalPrice));
 
 
 function openModal() {
   const modal = document.getElementById('myModal');
   modal.style.display = 'block';
 }
 
 function closeModal() {
   const modal = document.getElementById('myModal');
   modal.style.display = 'none';
 
 
   checkboxes.forEach(checkbox => checkbox.checked = false);
 
 
   totalPriceDisplay.textContent = `$${basicBikePrice}`;
 }
 
 
 // Open the modal if the "open_modal" parameter is set in the URL (added by PHP)
 const urlParams = new URLSearchParams(window.location.search);
 if (urlParams.get('open_modal') === '1') {
   openModal();
 }
 




