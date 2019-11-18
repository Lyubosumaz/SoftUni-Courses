function lockedProfile() {

    let user1Btn = document.getElementsByTagName("button")[0];
    user1Btn.addEventListener("click", () => {
        let radioBtnUnlock = document.getElementsByTagName("input")[1];
        if (radioBtnUnlock.checked === true) {
            document.getElementById("user1HiddenFields").style.display = "block";
            user1Btn.textContent = "Hide it";
        }
        if (radioBtnUnlock.checked === true) {
            user1Btn.addEventListener("click", () => {
                document.getElementById("user1HiddenFields").style.display = "none";
                user1Btn.textContent = "Show more";
            });
        }
    });
    let user2Btn = document.getElementsByTagName("button")[1];
    user2Btn.addEventListener("click", () => {
        let radioBtnUnlock = document.getElementsByTagName("input")[6];
        if (radioBtnUnlock.checked === true) {
            document.getElementById("user2HiddenFields").style.display = "block";
            user2Btn.textContent = "Hide it";
        }
        if (radioBtnUnlock.checked === true) {
            user2Btn.addEventListener("click", () => {
                document.getElementById("user2HiddenFields").style.display = "none";
                user2Btn.textContent = "Show more";
            });
        }
    });

    let user3Btn = document.getElementsByTagName("button")[2];
    user3Btn.addEventListener("click", () => {
        let radioBtnUnlock = document.getElementsByTagName("input")[11];
        if (radioBtnUnlock.checked === true) {
            document.getElementById("user3HiddenFields").style.display = "block";
            user3Btn.textContent = "Hide it";
        }
        if (radioBtnUnlock.checked === true) {
            user3Btn.addEventListener("click", () => {
                document.getElementById("user3HiddenFields").style.display = "none";
                user3Btn.textContent = "Show more";
            });
        }
    });
}