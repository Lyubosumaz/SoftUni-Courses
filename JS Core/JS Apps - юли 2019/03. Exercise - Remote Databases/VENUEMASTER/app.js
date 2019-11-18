const elements = {
    getVenues: document.getElementById("venueDate"),
    btnVenues: document.getElementById("getVenues"),
    infoVenues: document.getElementById("venue-info"),
}

let venues = [];
elements.btnVenues.addEventListener("click", getAvailableVenues);

async function getAvailableVenues() {
    let inputDate = elements.getVenues.value;
    const url = `https://baas.kinvey.com/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${inputDate}`;
    const data = {
        method: "POST",
        headers: {
            credentials: "include",
            Authorization: "Basic " + btoa("guest:pass"),
            "Content-type": "application/json"
        },
    };

    let response = await fetch(url, data);
    let result = await response.json();
    showAllVenues(result);
}

async function showAllVenues(arrOfKeys) {
    let allVenues = [];
    for (const _id of arrOfKeys) {
        const url = `https://baas.kinvey.com/appdata/kid_BJ_Ke8hZg/venues/${_id}`;
        const data = {
            method: "GET",
            headers: {
                credentials: "include",
                Authorization: "Basic " + btoa("guest:pass"),
                "Content-type": "application/json"
            },
        };
        let response = await fetch(url, data);
        let result = await response.json();
        allVenues.push(result);
    }
    allVenues.sort((a, b) => a.name.localeCompare(b.name)).forEach(venue => createHTMLElement(venue));

    let btnInfo = document.getElementsByClassName("info");
    for (const iterator of btnInfo) {
        iterator.addEventListener("click", function (event) {
            let divMoreInfo = event.target.parentNode.parentNode.childNodes[3];
            //TODO "block" and "none" onclick for divMoreInfo.style.display
            divMoreInfo.style.display = "block"
        });
    }
    //TODO I need rest..
}

function createHTMLElement(venue) {
    let elementFull = `
        <div class="venue" id="${venue._id}">
            <span class="venue-name">
                <input class="info" type="button" value="More info">
            ${venue.name}</span>
            <div class="venue-details" style="display: block;">
                <table>
                    <tr>
                        <th>Ticket Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td class="venue-price">${venue.price} lv</td>
                        <td><select class="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select></td>
                        <td><input class="purchase" type="button" value="Purchase"></td>
                    </tr>
                </table>
                <span class="head">Venue description:</span>
                <p class="description">${venue.description}</p>
                <p class="description">Starting time: ${venue.startingHour}</p>
            </div>
        </div>
    `;

    elements.infoVenues.innerHTML += elementFull;
}