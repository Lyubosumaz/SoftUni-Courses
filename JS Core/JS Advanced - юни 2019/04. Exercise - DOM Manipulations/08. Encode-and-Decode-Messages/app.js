function encodeAndDecodeMessages() {
    let message = document.getElementsByTagName("textarea")[0];
    let received = document.getElementsByTagName("textarea")[1];

    let encodeBtn = document.getElementsByTagName("button")[0];
    encodeBtn.addEventListener("click", () => {
        let input = message.value;
        let result = "";

        for (let char of input) {
            result += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        received.value = result;
        message.value = "";
    });

    let decodeBtn = document.getElementsByTagName("button")[1];
    decodeBtn.addEventListener("click", () => {
        let input = received.value;
        let result = "";

        for (let i = 0; i < input.length; i++) {
            result += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }
        received.value = result;
    });
}