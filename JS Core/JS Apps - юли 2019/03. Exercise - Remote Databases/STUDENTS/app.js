const url = "https://baas.kinvey.com/appdata/kid_SkWIy2EGS/students";

const elements = {
    id: document.getElementById("ID"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    facultyNumber: document.getElementById("facultyNumber"),
    grade: document.getElementById("grade"),
    btnSubmit: document.getElementById("btnSubmit"),
};

function sortCreateShow() {
    const data = {
        method: "GET",
        headers: {
            credentials: "include",
            Authorization: "Basic " + btoa("guest:guest"),
        }
    };

    (async () => {
        const response = await fetch(url, data)
        const students = await response.json();

        if (!students) {
            return console.log("There are none students in database.. Add one first!");
        }
        let output = document.getElementsByTagName("tbody")[0];
        let fragmentMain = document.createDocumentFragment();

        students.sort((a, b) => a.id - b.id).forEach(student => {
            let fragmentLesser = document.createDocumentFragment();

            let tdID = document.createElement("td");
            tdID.textContent = student.id;
            fragmentLesser.appendChild(tdID);

            let tdFirstName = document.createElement("td");
            tdFirstName.textContent = student.firstName;
            fragmentLesser.appendChild(tdFirstName);

            let tdLastName = document.createElement("td");
            tdLastName.textContent = student.lastName;
            fragmentLesser.appendChild(tdLastName);

            let tdFacultyNumber = document.createElement("td");
            tdFacultyNumber.textContent = student.facultyNumber;
            fragmentLesser.appendChild(tdFacultyNumber);

            let tdGrade = document.createElement("td");
            tdGrade.textContent = student.grade;
            fragmentLesser.appendChild(tdGrade);

            let trHolder = document.createElement("tr");
            trHolder.appendChild(fragmentLesser);
            fragmentMain.appendChild(trHolder);
        });
        output.appendChild(fragmentMain);
    })();
}
sortCreateShow();

elements.btnSubmit.addEventListener("click", createStudent)
async function createStudent(ev) {
    ev.preventDefault();
    if (Number(elements.id.value)
        && elements.firstName.value
        && elements.lastName.value
        && Number(elements.facultyNumber.value)
        && Number(elements.grade.value)) {

        let studentObj = {
            id: Number(elements.id.value),
            firstName: elements.firstName.value,
            lastName: elements.lastName.value,
            facultyNumber: Number(elements.facultyNumber.value),
            grade: Number(elements.grade.value),
        }


        const data = {
            method: "POST",
            headers: {
                credentials: "include",
                Authorization: "Basic " + btoa("guest:guest"),
                "Content-type": "application/json"
            },
            body: JSON.stringify(studentObj)
        }

        const response = await fetch(url, data)
        const student = await response.json();
        // console.log(student)
    }
}