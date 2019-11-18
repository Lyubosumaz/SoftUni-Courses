function attachEventsListeners() {
    //days
    let daysBtn = document.getElementById("daysBtn");
    daysBtn.addEventListener("click", () => {
        let days = Number(document.getElementById("days").value);
        let daysHours = 0;
        let dayMinutes = 0;
        let daysSeconds = 0;
        if (days !== "" && days > 0) {
            daysHours = days * 24;
            dayMinutes = days * 1440;
            daysSeconds = days * 86400;
        }
        document.getElementById("hours").value = daysHours;
        document.getElementById("minutes").value = dayMinutes;
        document.getElementById("seconds").value = daysSeconds;
    });

    //hours
    let hoursBtn = document.getElementById("hoursBtn");
    hoursBtn.addEventListener("click", () => {
        let hours = document.getElementById("hours").value;
        let hoursDays = 0;
        let hoursMinutes = 0;
        let hoursSeconds = 0;
        if (hours !== "" && hours > 0) {
            hoursDays = (hours / 24);
            hoursMinutes = hours * 60;
            hoursSeconds = hours * 3600;
        }
        document.getElementById("days").value = hoursDays;
        document.getElementById("minutes").value = hoursMinutes;
        document.getElementById("seconds").value = hoursSeconds;
    });

    //minutes
    let minutesBtn = document.getElementById("minutesBtn");
    minutesBtn.addEventListener("click", () => {
        let minutes = document.getElementById("minutes").value;
        let minutesDays = 0;
        let minutesHours = 0;
        let minutesSeconds = 0;
        if (minutes !== "" && minutes > 0) {
            minutesDays = (minutes / 1440);
            minutesHours = (minutes / 60);
            minutesSeconds = minutes * 60;
        }
        document.getElementById("days").value = minutesDays;
        document.getElementById("hours").value = minutesHours;
        document.getElementById("seconds").value = minutesSeconds;

    });

    //seconds
    let secondsBtn = document.getElementById("secondsBtn");
    secondsBtn.addEventListener("click", () => {
        let seconds = document.getElementById("seconds").value;
        let secondsDays = 0;
        let secondsHours = 0;
        let secondsMinutes = 0;
        if (seconds !== "" && seconds > 0) {
            secondsDays = (seconds / 86400);
            secondsHours = (seconds / 3600);
            secondsMinutes = (seconds / 60);
        }
        document.getElementById("days").value = secondsDays;
        document.getElementById("hours").value = secondsHours;
        document.getElementById("minutes").value = secondsMinutes;
    });
}


// function attachEventsListeners() {
//     document.getElementById('daysBtn').addEventListener('click',onClickDays);
//     document.getElementById('hoursBtn').addEventListener('click',onClickHours);
//     document.getElementById('minutesBtn').addEventListener('click',onClickMinutes);
//     document.getElementById('secondsBtn').addEventListener('click',onClickSeconds);

//     let days = document.getElementById('days');
//     let hours = document.getElementById('hours');
//     let minutes = document.getElementById('minutes');
//     let seconds = document.getElementById('seconds');

//     function onClickDays() {
//       hours.value = Number(days.value) * 24;
//       minutes.value = Number(hours.value) * 60;
//       seconds.value = Number(minutes.value) * 60;
//     }

//     function onClickHours() {
//       days.value = (Number(hours.value) / 24);
//       minutes.value = Number(hours.value) * 60;
//       seconds.value = Number(minutes.value) * 60;
//     }

//     function onClickMinutes() {
//       hours.value = (Number(minutes.value) / 60);
//       days.value =(Number(hours.value) / 24);
//       seconds.value = Number(minutes.value) * 60;
//     }

//     function onClickSeconds() {
//       minutes.value = (Number(seconds.value) / 60);
//       hours.value = (Number(minutes.value) / 60);
//       days.value =(Number(hours.value) / 24);
//     }
//   }