function solve() {
   let searchBtn = document.getElementById("searchBtn");
   searchBtn.addEventListener("click", function () {
      let rolls = document.querySelectorAll("tbody tr");

      // reset

      let searchField = document.getElementById("searchField").value;

      for (let i = 0; i < rolls.length; i++) {
         rolls[i].classList.remove("select");

         for (let j = 0; j < rolls[i].childNodes.length; j++) {
            let rollCell = rolls[i].childNodes[j].innerHTML;
            
            if (rollCell && rollCell.includes(searchField)) {
               rolls[i].classList.add("select");
            }
         }
      }
      let search = document.getElementById("searchField");
      search.value = "";
   });
}