(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = document.getElementById("cat-template").innerHTML;
        let compiled = Handlebars.compile(template);

        let rendered = compiled({
            cats: window.cats
        });

        document.getElementById("allCats").innerHTML = rendered;

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
    }
})();