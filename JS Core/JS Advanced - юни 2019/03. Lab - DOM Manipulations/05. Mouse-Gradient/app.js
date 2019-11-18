function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mousemove", gradientIn);
    gradient.addEventListener("mouseout", gradientOut);

    function gradientIn(event) {
        let test = event.offsetX / (event.target.clientWidth - 1);
        test = Math.trunc(test * 100);
        document.getElementById("result").textContent = test + "%";

    }

    function gradientOut(event) {
        document.getElementById("result").textContent = "";
    }
}