function validate() {
    let textBox = document.getElementById("email");

    const pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    textBox.addEventListener("input", validationCheck);

    function validationCheck(event) {
        if (event.target.value.match(pattern)) {
            if (textBox.classList.contains("error")) {
                textBox.classList.remove("error")
            }
        } else {
            textBox.classList.add("error");
        }
    }
}

// function validate() {
//     let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
//     let inputElement = document.getElementById('email');
//     let value = inputElement.value;
//     inputElement.addEventListener('change',checkEmail);
//     function checkEmail(event) {
//         if(reg.test(event.target.value)){
//             event.target.removeAttribute('class');
//             return;
//         }
//         event.target.className = 'error';
//     }
//  }