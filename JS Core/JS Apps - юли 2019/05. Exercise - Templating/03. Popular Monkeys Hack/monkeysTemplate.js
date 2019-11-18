(async () => {
    const path = "./templates/monkey-template.hbs";
    const response = await fetch(path);
    const data = await response.text()
    const template = await Handlebars.compile(data);

    let holder = document.querySelector(".monkeys");
    monkeys.forEach(monkey => {
        holder.innerHTML += template({ monkey });
    });

    holder.addEventListener("click", (ev) => {
        if (ev.target.textContent === "Info") {
            (ev.target.nextElementSibling.style.display === "none")
                ? ev.target.nextElementSibling.style.display = "block"
                : ev.target.nextElementSibling.style.display = "none"
        }
    });
})();