function solve() {
  let input = document.getElementById("text").value;
  let convertTo = document.getElementById("naming-convention").value;

  let result = document.getElementById("result");

  function pascalOrCamelCase(input, convertTo) {
    let split = input.toLowerCase().split(" ").filter(a => a !== '');

    let output = "";
    if (convertTo === "Pascal Case" || convertTo === "Camel Case") {
      for (const word of split) {
        output += (word[0].toUpperCase() + word.substr(1).toLowerCase());
      }
    } else {
      output = "Error!";
    }
    if (convertTo === "Camel Case") {
      output = output[0].toLowerCase() + output.substr(1);
    }
    // switch (convertTo) {
    //   case "Pascal Case":
    //     for (const word of split) {
    //       output += (word[0].toUpperCase() + word.substr(1).toLowerCase());
    //     }
    //     break;
    //   case "Camel Case":
    //     for (const word of split) {
    //       output += (word[0].toUpperCase() + word.substr(1).toLowerCase());
    //     }
    //     break;
    //   default:
    //     output = "Error!";
    //     break;
    // }
    // if (convertTo === "Camel Case") {
    //   output = output[0].toLowerCase() + output.substr(1);
    // }
    let p = document.createElement("p");
    p.innerHTML = output;
    result.appendChild(p);
  }
  pascalOrCamelCase(input, convertTo);
}