let output = document.getElementById("root");
let btnLoadTowns = document.getElementById("btnLoadTowns");

btnLoadTowns.addEventListener("click", (ev) => {
    ev.preventDefault();
    let inputArray = (document.getElementById("towns").value).split(", ");

    let ul = document.createElement("ul");
    let fragment = document.createDocumentFragment()
    for (const element of inputArray) {
        let li = document.createElement("li");
        li.textContent = element;
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    output.appendChild(ul);
    document.getElementById("towns").value = "";
});