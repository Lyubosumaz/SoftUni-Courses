(() => {
    renderMonkeyTemplate();

    function renderMonkeyTemplate() {
        for (const monkey of monkeys) {
            let template = document.getElementById("monkey-template").innerHTML;
            let compiled = Handlebars.compile(template);

            let rendered = compiled({ monkey })
            document.getElementsByClassName("monkeys")[0].innerHTML += rendered;
        }

        document.querySelector(".monkeys").addEventListener("click", (ev) => {
            if (ev.target.textContent === "Info") {
                (ev.target.nextElementSibling.style.display === "none")
                    ? ev.target.nextElementSibling.style.display = "block"
                    : ev.target.nextElementSibling.style.display = "none"
            }
        });
    }
})();