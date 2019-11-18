function attachEvents() {
    let url = `https://rest-messanger.firebaseio.com/messanger.json`;

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {

        let author = document.getElementById("author").value;
        let content = document.getElementById("content").value;
        let pattern = { "author": author, "content": content };

        fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(pattern)
        })
            .then(() => {
                document.getElementById("author").value = "";
                document.getElementById("content").value = "";
            })
    });

    let messages = document.getElementById("messages");
    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function () {
        messages.textContent = "";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (const key in data) {
                    messages.textContent += `${data[key].author}: ${data[key].content}\n`;
                }
            })
    });
}

attachEvents();