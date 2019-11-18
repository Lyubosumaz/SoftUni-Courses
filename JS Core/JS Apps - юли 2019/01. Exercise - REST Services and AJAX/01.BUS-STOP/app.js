function getInfo() {
    let inputId = document.getElementById("stopId").value;
    let url = `https://judgetests.firebaseio.com/businfo/${inputId}.json`;

    let stopName = document.getElementById("stopName");
    let buses = document.getElementById("buses");

    buses.textContent = "";
    fetch(url)
        .then((response) => {
            if (response.status != 200) {
                throw Error()
            }
            return response.json()
        })
        .then((data) => {
            stopName.textContent = data.name;

            for (const key in data.buses) {
                let li = document.createElement("li");
                li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;

                buses.appendChild(li);
            }
        })
        .catch(() => {
            stopName.textContent = "Error";
        })
}