function solve(arr, string) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let outputArr = [];
    for (let ticketTokens of arr) {
        let [destination, price, status] = ticketTokens.split("\|");
        price = Number(price)
        outputArr.push(new Ticket(destination, price, status));
    }
    if (string === "destination") {
        return outputArr = outputArr.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    }
    if (string === "price") {
        return outputArr = outputArr.sort((a, b) => {
            return a.price - b.price;
        });
    }
    if (string === "status") {
        return outputArr = outputArr.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    }
}

solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');