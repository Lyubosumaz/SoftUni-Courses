function focus() {
    let onFocus = function () {
        this.parentNode.classList.add("focused");
    };

    let onBlur = function () {
        this.parentNode.classList.remove("focused")
    };

    [...document.querySelectorAll("input")]
        .forEach(input => {
            input.addEventListener("focus", onFocus);
            input.addEventListener("blur", onBlur);
        });
}

// function focus() {
//     let inputs = document.getElementsByTagName('input');
//     Array.from(inputs).forEach(i => i.addEventListener('focus', onFocus));
//     Array.from(inputs).forEach(i => i.addEventListener('blur', onBlur));

//     function onFocus(event) {
//         let input = event.target;
//         input.parentNode.setAttribute('class', 'focused');
//     }

//     function onBlur(event) {
//         let input = event.target;
//         input.parentNode.removeAttribute('class');
//     }
// }