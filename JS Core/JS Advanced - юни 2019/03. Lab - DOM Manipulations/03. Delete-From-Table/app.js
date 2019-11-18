function deleteByEmail() {
    const SELECTORS = {
        TABLE_ROWS: "#customers tr td:last-child",
        MASSAGE: "result",
        EMAIL: "email",
    };
    console.log(SELECTORS.TABLE_ROWS)
    console.log(SELECTORS.MASSAGE)
    console.log(SELECTORS.EMAIL)

    const massage = document.getElementById(SELECTORS.MASSAGE);
    deleteByEmail();

    function getEmail() {
        return document.getElementsByName(SELECTORS.EMAIL)[0].value;
    }

    function deleteByEmail() {
        const rows = document.querySelectorAll(SELECTORS.TABLE_ROWS);
        const email = getEmail();
        const rowToDelete = Array.from(rows).find(row => row.textContent == email);

        if (rowToDelete) {
            let row = rows[0].parentNode;
            row.parentNode.removeChild(row);
            massage.textContent = "Deleted.";
        } else {
            massage.textContent = "Not found.";
        }
    }
}