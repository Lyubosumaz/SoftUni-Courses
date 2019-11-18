function attachEvents() {
    let url = "https://phonebook-nakov.firebaseio.com/phonebook.json";

    document.getElementById("btnLoad").addEventListener("click", loadPhoneBook);

    document.getElementById("btnCreate").addEventListener("click", function () {

        let person = document.getElementById("person").value;
        let phone = document.getElementById("phone").value;
        let pattern = { "person": person, "phone": phone }

        fetch(url, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(pattern)
        })
            .then(loadPhoneBook)

    });

    function loadPhoneBook() {
        fetch(url)
            .then((request) => request.json())
            .then((data) => {
                let output = document.getElementById("phonebook");
                output.innerHTML = "";

                for (let key in data) {
                    let name = data[key].person;
                    let phoneNumber = data[key].phone;

                    let delBtn = document.createElement("button");
                    delBtn.textContent = "DELETE";
                    delBtn.addEventListener("click", () => deleteContact(key));

                    let listItem = document.createElement("li");
                    listItem.textContent = `${name}: ${phoneNumber}`;

                    listItem.appendChild(delBtn);
                    output.appendChild(listItem);
                }
            })
    }

    function deleteContact(id) {
        let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`;
        fetch(deleteUrl, {
            method: "delete",
            headers: { "Content-type": "application/json" }
        })
        .then(loadPhoneBook)
    }

}

attachEvents();