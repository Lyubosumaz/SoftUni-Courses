function addItem() {
    let key = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;
    
    let selectMenu = document.getElementById("menu");
    let option = document.createElement("option");
    option.textContent = key;
    option.value = value;
    selectMenu.appendChild(option);
    // let optionObj = { [key]: value }

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}