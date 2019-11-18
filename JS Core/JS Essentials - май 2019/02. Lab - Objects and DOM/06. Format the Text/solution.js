function solve() {

  let input = document.getElementById('input');
  let inputData = input.textContent;
  let output = document.getElementById('output');

  let sentencesRegEx = /\(?[^\.\?\!]+[\.!\?]\)?/g;
  let inputArr = [];
  if (!inputArr.includes(inputData.match(sentencesRegEx))) {
    inputArr.push(...inputData.match(sentencesRegEx));
  }

  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i] = inputArr[i].toString().replace(/\n\s+/g, ' ');
  }

  let numberOfSentences = inputArr.length;
  let paragraphs = 0;
  if (numberOfSentences <= 3) {
    paragraphs = 1;
  } else {
    paragraphs = Math.ceil(numberOfSentences / 3);
  }
  console.log(paragraphs);

  for (let i = 0; i < paragraphs; i++) {
    let p = document.createElement("p");
    const rest = inputArr.splice(0, 3);
    p.innerHTML = rest.join('');
    output.appendChild(p);
  }
  console.log(inputArr);
}