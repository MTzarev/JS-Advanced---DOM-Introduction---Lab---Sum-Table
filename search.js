function search() {
   let list = document.querySelectorAll(`#towns>li`);
   //let button = document.querySelector(`.button`);
   let input = document.querySelector(`input`).value;
   let result = document.getElementById(`result`);
   let sum = 0;

   for (let letters of list) {
      if ((letters.textContent).toLowerCase().includes(input.toLowerCase())) {
         letters.style.fontWeight = `bold`;
         letters.style.textDecoration = `underline`
         sum++
      } else {
         letters.style.fontWeight = ``;
         letters.style.tectDecoration = ``;
      }
   }

   result.textContent = `${sum} matches found`

}
