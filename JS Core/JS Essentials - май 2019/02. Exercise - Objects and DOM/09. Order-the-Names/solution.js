function solve() {

    let inputText = document.getElementsByTagName("input")[0];
    let registerBtn = document.getElementsByTagName("button")[0];
    registerBtn.addEventListener("click", function () {
        let studentName = inputText.value;
        if (studentName !== "") {
            let obj = document.getElementsByTagName("li");
            //0a 1b 2c 3d 4e 5f 6g 7h 8i 9j 10k 11l 12m 13n 14o 15p 16q 17r 18s 19t 20u 21v 22w 23x 24y 25z
            let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let fistLetter = alphabet.indexOf(studentName[0].toLowerCase());
            if (obj[fistLetter].textContent.length === 0) {
                obj[fistLetter].textContent += studentName.charAt(0).toUpperCase() + studentName.slice(1).toLowerCase();
            } else {
                obj[fistLetter].textContent += `, ${studentName.charAt(0).toUpperCase() + studentName.slice(1).toLowerCase()}`;
            }
        }
    });
}