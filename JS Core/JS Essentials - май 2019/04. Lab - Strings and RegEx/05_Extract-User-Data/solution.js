function solve() {
    let user = JSON.parse(document.getElementById("arr").value);

    const extractName = (user) => {
        const pattern = /^[A-Z][a-z]* [A-Z][a-z]*/;
        const match = user.match(pattern);
        return match && match[0];
    };
    const extractPhone = (user) => {
        const pattern = /(\+359 \d d{3} d{3})|(\+359-\d-\d{3}-\d{3})/;
        const match = user.match(pattern);
        return match && match[0];
    };
    const extractEmail = (user) => {
        const pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const match = user.match(pattern);
        return match && match[0];
    };
    let result = document.getElementById("result");
    for (let data of user) {
        let output = "";
        const name = extractName(data);
        const phone = extractPhone(data);
        const email = extractEmail(data);
        if (name && phone && email) {
            // output += `Name: ${name}\nPhone Number: ${phone}\nEmail: ${email}\n- - -\n`;
            let nameP = document.createElement("p");
            output = `Name: ${name}`;
            nameP.innerHTML = output;
            result.appendChild(nameP);

            let phoneP = document.createElement("p");
            output = `Phone Number: ${phone}`;
            phoneP.innerHTML = output;
            result.appendChild(phoneP);

            let emailP = document.createElement("p");
            output = `Email:${email}`;
            emailP.innerHTML = output;
            result.appendChild(emailP);
        } else {
            let p = document.createElement("p");
            output += "Invalid data";
            p.innerHTML = output;
            result.appendChild(p);
        }
        let dotsP = document.createElement("p");
        output = "- - -";
        dotsP.innerHTML = output;
        result.appendChild(dotsP);

    }
}