function solve() {
  let text = document.getElementById("text").value;
  let parts = text.split(" ");

  let words = "";
  let numbers = "";

  let result = document.getElementById("result");
  parts.forEach(part => {
    if (isNaN(Number(part))) {
      words += [...part].map(ch => ch.charCodeAt(0)).join(" ");
      let p = document.createElement("p");
      p.innerHTML = words;
      result.appendChild(p);
      words = "";
    } else {
      numbers += String.fromCharCode(Number(part));
    }
  })
  let p = document.createElement("p");
  p.innerHTML = numbers;
  result.appendChild(p);
}