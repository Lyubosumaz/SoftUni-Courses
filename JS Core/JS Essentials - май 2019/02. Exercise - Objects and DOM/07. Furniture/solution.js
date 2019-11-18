function solve() {

  let furnitureList = {};

  let generate = document.getElementsByTagName("button")[0].addEventListener("click", function () {

    furnitureList = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let table = document.getElementsByClassName("table")[0];

    for (let furniture of furnitureList) {
      let row = table.insertRow();
      let cell = row.insertCell();

      let image = document.createElement("img");
      image.setAttribute("src", furniture.img);
      cell.appendChild(image);
      cell = row.insertCell();

      let name = document.createElement("p");
      name.innerHTML = furniture.name;
      cell.appendChild(name);
      cell = row.insertCell();

      let price = document.createElement("p");
      price.innerHTML = Number(furniture.price);
      cell.appendChild(price);
      cell = row.insertCell();

      let decFactor = document.createElement("p");
      decFactor.innerHTML = Number(furniture.decFactor);
      cell.appendChild(decFactor);
      cell = row.insertCell();

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      cell.appendChild(checkbox);
    }
  });

  let buy = document.getElementsByTagName("button")[1].addEventListener("click", function () {
    let rolls = document.querySelectorAll("tbody tr");

    let bought = [];
    let totalPrice = 0;
    let decorationFactor = 0;

    for (let i = 1; i < rolls.length; i++) {
      let checkboxChecker = rolls[i].childNodes[4].childNodes[0];
      if (checkboxChecker.checked === true) {
        bought.push(rolls[i].childNodes[1].textContent);
        totalPrice += Number(rolls[i].childNodes[2].textContent);
        decorationFactor += Number(rolls[i].childNodes[3].textContent);
      }
    }
    let output = document.getElementsByTagName("textarea")[1];
    decorationFactor = decorationFactor / bought.length;
    output.value = `Bought furniture: ${bought.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor}`;
  });
}