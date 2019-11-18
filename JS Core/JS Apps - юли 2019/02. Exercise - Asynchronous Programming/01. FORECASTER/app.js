function attachEvents() {

    const elements = {
        inputField: document.getElementById("location"),
        button: document.getElementById("submit"),
        current: document.getElementById("current"),
        upcoming: document.getElementById("upcoming"),
        forecast: document.getElementById("forecast"),
    };

    const symbols = {
        sunny: "☀",
        partlySunny: "⛅",
        overcast: "☁",
        rain: "☂",
        degrees: "°",
    };

    elements.button.addEventListener("click", loadWeatherInfo)

    function loadWeatherInfo() {
        elements.forecast.style.display = "block";
        fetch("https://judgetests.firebaseio.com/locationss.json")
            .then(handler)
            .then(localLocationWeatherInfo)
        // .catch(err => {
        //     document.getElementsByClassName("label")[0].style.display = "none";
        //     document.getElementsByClassName("label")[1].style.display = "none";
        //     let p = document.createElement("p");
        //     p.textContent = "Error";
        //     elements.forecast.appendChild(p);
        // });
    }

    function localLocationWeatherInfo(data) {
        let location = data.filter((o) => o.name === elements.inputField.value)[0];

        fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
            .then(handler)
            .then((data) => showLocationWeatherInfo(data, location.code))
    }

    function showLocationWeatherInfo(data, code) {
        let divForecast = createHTMLElement("div", "forecasts");

        let symbol = symbols[data.forecast.condition.toLowerCase()];
        let spanSymbol = createHTMLElement("span", ["condition", "symbol"], symbol);

        let spanHolder = createHTMLElement("span", "condition");

        let spanName = createHTMLElement("span", "forecast-data", data.name);
        let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
        let spanDegrees = createHTMLElement("span", "forecast-data", degrees)
        let spanCondition = createHTMLElement("span", "forecast-data", data.forecast.condition);

        spanHolder = appendChildrenToParent([spanName, spanDegrees, spanCondition], spanHolder);
        divForecast = appendChildrenToParent([spanSymbol, spanHolder], divForecast);

        elements.current.appendChild(divForecast);
        loadUpcomingLocationWeatherInfo(code);
    }

    function loadUpcomingLocationWeatherInfo(code) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(handler)
            .then(showUpcomingLocationWeatherInfo);
    }

    function showUpcomingLocationWeatherInfo(data) {
        let divForecast = createHTMLElement("div", "forecast-info");

        data.forecast.forEach((o) => {
            let spanHolder = createHTMLElement("span", "upcoming");

            let symbol = symbols[o.condition.toLowerCase()] || symbols["partlySunny"];
            let spanSymbol = createHTMLElement("span", "symbol", symbol);

            let degrees = `${o.low}${symbols.degrees}/${o.high}${symbols.degrees}`;
            let spanDegrees = createHTMLElement("span", "forecast-data", degrees)

            let spanCondition = createHTMLElement("span", "forecast-data", o.condition);

            divForecast.appendChild(appendChildrenToParent([spanSymbol, spanDegrees, spanCondition], spanHolder));
        });

        elements.upcoming.appendChild(divForecast);
    }

    // utils
    function appendChildrenToParent(children, parent) {
        children.forEach((child) => parent.appendChild(child));

        return parent;
    }

    function createHTMLElement(tagName, className, textContent) {
        let currentElement = document.createElement(tagName);

        if (typeof className === "string") {
            currentElement.classList.add(className);
        } else if (typeof className === "object") {
            currentElement.classList.add(...className);
        }

        if (textContent) {
            currentElement.textContent = textContent;
        }

        return currentElement
    }

    function handler(response) {

        if (response.status > 400) {
            elements.forecast.innerHTML = "Error";
            throw new Error(`Something is wrong. Error: ${response.statusText}`);
        }

        return response.json();
    }

}

attachEvents();