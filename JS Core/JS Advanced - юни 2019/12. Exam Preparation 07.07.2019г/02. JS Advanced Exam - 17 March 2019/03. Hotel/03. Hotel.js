class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = {
            single: Number(capacity) * 0.50,
            double: Number(capacity) * 0.30,
            maisonette: Number(capacity) * 0.20,
        };
        this.booking = [];
        this.currentBookingNumber = 1;

        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135,
        };

        this.servicesPricing = {
            food: 10,
            drink: 15,
            housekeeping: 25,
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.capacity[roomType] > 0) {
            let pattern = {
                name: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber,
                services: [],
            };

            this.booking.push(pattern);
            this.capacity[roomType] -= 1;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`
        }

        let output = `No ${roomType} rooms available!`
        for (const key in this.capacity) {
            if (this.capacity[key] === roomType) {
                continue;
            }
            output += ` Available ${key} rooms: ${this.capacity[key]}.`
        }
        return output;
    }

    roomService(currentBookingNumber, serviceType) {
        let checker = false;
        for (const key in this.servicesPricing) {
            if (key === serviceType) {
                checker = true
            }
        }
        if (checker === false) {
            return `We do not offer ${serviceType} service.`;
        }

        for (let room of this.booking) {
            if (room.roomNumber === currentBookingNumber) {
                room.services.push(serviceType);
                return `Mr./Mrs. ${room.name}, Your order for ${serviceType} service has been successful.`
            }
        }

        return `The booking ${currentBookingNumber} is invalid.`;
    }

    checkOut(currentBookingNumber) {
        for (let room of this.booking) {
            if (room.roomNumber === currentBookingNumber) {
                let totalMoney = room.nights * this.roomsPricing[room.roomType];
                this.capacity[room.roomType] += 1
                if (room.services.length === 0) {
                    return `We hope you enjoyed your time here, Mr./Mrs. ${room.name}. The total amount of money you have to pay is ${totalMoney} BGN.`;
                } else {
                    let totalServiceMoney = 0;
                    for (let service of room.services) {
                        totalServiceMoney += this.servicesPricing[service];
                    }
                    return `We hope you enjoyed your time here, Mr./Mrs. ${room.name}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
                }
            }
        }
        return `The booking ${currentBookingNumber} is invalid.`;
    }

    report() {
        let arr = [];
        arr.push(`${this.name.toUpperCase()} DATABASE:`);
        arr.push(`${"-".repeat(20)}`);

        if (this.booking.length === 0) {
            arr.push(`There are currently no bookings.`);
            return arr.join("\n");
        }
        for (let room of this.booking) {
            arr.push(`bookingNumber - ${room.roomNumber}`);
            arr.push(`clientName - ${room.name}`);
            arr.push(`roomType - ${room.roomType}`);
            arr.push(`nights - ${room.nights}`);
            if (room.services.length > 0) {
                arr.push(`services: ${room.services.join(", ")}`);
            }
            arr.push(`${"-".repeat(10)}`);
        }
        let cutTheEnd = arr.pop();
        return arr.join("\n");
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());