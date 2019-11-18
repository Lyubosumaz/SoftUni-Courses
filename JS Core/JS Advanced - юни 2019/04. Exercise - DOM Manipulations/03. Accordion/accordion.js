function toggle() {
    let btn = document.getElementsByClassName("button")[0];
    // let btn = document.querySelector(".button").textContent;
    let element = document.getElementById("extra");

    if (element.style.display === "none") {
        element.style.display = "block";
        btn.textContent = "Less";
    } else {
        element.style.display = "none";
        btn.textContent = "More"
    }
}