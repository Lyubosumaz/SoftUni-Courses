const kinveyUsername = "guest";
const kinveyPassword = "guest";
const appKey = "kid_HJnWVF7zH";
const appSecret = "96a489f7782347f2be364de7b9681a7e";
const url = `https://baas.kinvey.com/appdata/${appKey}/books`;

elements = {
    btnSubmit: document.getElementById("btnSubmit"),
    btnLoadBooks: document.getElementById("loadBooks"),
    inputTitle: document.getElementById("title"),
    inputAuthor: document.getElementById("author"),
    inputIsbn: document.getElementById("isbn"),
    content: document.getElementById("content")
}

elements.btnSubmit.addEventListener("click", addBook)
elements.btnLoadBooks.addEventListener("click", showBookList)

function addBook(ev) {
    ev.preventDefault();

    if (elements.inputTitle.value && elements.inputAuthor.value && elements.inputIsbn.value) {
        const bookObj = {
            "title": elements.inputTitle.value,
            "author": elements.inputAuthor.value,
            "isbn": elements.inputIsbn.value,
        };

        const data = {
            method: "POST",
            headers: {
                credentials: "include",
                Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookObj)
        };

        try {
            (async () => {
                const response = await fetch(url, data);
                // const books = await response.json();

                showBookList(); //TODO
            }
            )()
        } catch{
            console.log("There Is Problem In Deleting Creating :(")
        }
    } else {
        return console.log("Incorrect input"); //Not needed
    }

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

function showBookList() {
    const data = {
        method: "GET",
        headers: {
            credentials: "include",
            Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
            "Content-type": "application/json"
        }
    };

    try {
        (async () => {
            const response = await fetch(url, data);
            const books = await response.json();

            if (!books) {
                return console.log("There are none books.. Add one first!");
            }

            elements.content.innerHTML = "";
            for (const key in books) {
                if (books.hasOwnProperty(key)) {
                    const element = books[key]
                    
                    let fragment = document.createDocumentFragment();
                    let trHolder = document.createElement("tr");
                    fragment.appendChild(trHolder);

                    let tdTitle = document.createElement("td");
                    tdTitle.textContent = element.title;
                    trHolder.appendChild(tdTitle);

                    let tdAuthor = document.createElement("td");
                    tdAuthor.textContent = element.author;
                    trHolder.appendChild(tdAuthor);

                    let tdIsbn = document.createElement("td");
                    tdIsbn.textContent = element.isbn;
                    trHolder.appendChild(tdIsbn);

                    let btnHolder = document.createElement("td");

                    let editBtn = document.createElement("button");
                    editBtn.textContent = "Edit";
                    editBtn.addEventListener("click", () => editBook(element._id))
                    btnHolder.appendChild(editBtn);

                    let deleteBtn = document.createElement("button");
                    deleteBtn.textContent = "Delete";
                    deleteBtn.addEventListener("click", () => removeBook(element._id))
                    btnHolder.appendChild(deleteBtn);

                    trHolder.appendChild(btnHolder);
                    elements.content.appendChild(fragment);
                }

            }

        }
        )()
    } catch{
        console.log("There Is Problem In Loading :(")
    }
}

function editBook(bookId) {
    const actionUrl = `https://baas.kinvey.com/appdata/${appKey}/books/${bookId}`;

    const bookObj = {
        "title": elements.inputTitle.value,
        "author": elements.inputAuthor.value,
        "isbn": elements.inputIsbn.value,
    };

    const data = {
        method: "PUT",
        headers: {
            credentials: "include",
            Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
            "Content-type": "application/json"
        },
        body: JSON.stringify(bookObj)
    };

    try {
        (async () => {
            const response = await fetch(actionUrl, data);
            // const books = await response.json();

            showBookList();
        }
        )()
    } catch{
        console.log("There Is Problem In Deleting Editing :(")
    }

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

function removeBook(bookId) {
    const actionUrl = `https://baas.kinvey.com/appdata/${appKey}/books/${bookId}`;

    const data = {
        method: "DELETE",
        headers: {
            Authorization: "Basic " + btoa(`${kinveyUsername}:${kinveyPassword}`),
            "Content-type": "application/json"
        },
    };

    try {
        (async () => {
            const response = await fetch(actionUrl, data);
            // const books = await response.json();

            showBookList();
        }
        )()
    } catch{
        console.log("There Is Problem In Deleting :(")
    }
}

// function handler(response) {
//     if (response.status >= 400) {
//         throw new Error(response.statusText)
//     }

//     return response.json()
// }