(async function showAllCats() {
    const path = "./templates/cat-template.hbs";
    const response = await fetch(path);
    const data = await response.text();
    const template = await Handlebars.compile(data);
    document.getElementById("allCats").innerHTML = template({ cats })
})();

let selection = document.getElementById("allCats");

selection.addEventListener("click", function (ev) {
    if (ev.target.className === "showBtn") {
        if (ev.target.textContent === "Hide status code") {
            ev.target.textContent = "Show status code";
            ev.target.nextElementSibling.style.display = "none";
        } else {
            ev.target.textContent = "Hide status code";
            ev.target.nextElementSibling.style.display = "block";
        }
    }
});