function solve() {
    let input = document.getElementById("array").value;
    let result = document.getElementById("result");
    let array = JSON.parse(input);

    let keyword = array[0];
    // let pattern = `(${[...keyword].reduce((resultString, char) => {
    //     return resultString += `[${char.toUpperCase()}${char.toLowerCase()}]`
    // }, "")})[\s+]([A-Z\!\%\#\$]{8,})([\s|\.|\,|$])`;
    // let regex = new RegExp(pattern, "gm");
    let regex = new RegExp(`(\\s|^)(${keyword}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

    for (let i = 1; i < array.length; i++) {
        let text = array[i];
        let match = regex.exec(text);
        while (match) {
            let encodeMessage = match[3];
            if (encodeMessage.toUpperCase() !== encodeMessage) {
                match = regex.exec(text);
                continue;
            }
            let decodeMessage = decodeMessageFunc(encodeMessage);
            let message = match[1] + match[2] + decodeMessage + match[4];
            text = text.replace(match[0], message);
            match = regex.exec(text);
        }
        let p = document.createElement('p');
        p.textContent = text;
        result.appendChild(p);
    }
    function decodeMessageFunc(encodeMessage) {
        while (encodeMessage.indexOf('!') !== -1) {
            encodeMessage = encodeMessage.replace('!', '1')
        }
        while (encodeMessage.indexOf('%') !== -1) {
            encodeMessage = encodeMessage.replace('%', '2')
        }
        while (encodeMessage.indexOf('#') !== -1) {
            encodeMessage = encodeMessage.replace('#', '3')
        }
        while (encodeMessage.indexOf('$') !== -1) {
            encodeMessage = encodeMessage.replace('$', '4')
        }
        return encodeMessage.toLowerCase()
    }
}