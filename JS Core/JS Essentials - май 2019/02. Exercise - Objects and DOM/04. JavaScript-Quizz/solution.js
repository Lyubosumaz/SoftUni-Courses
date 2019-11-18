function solve() {
  let givenAnswers = [];
  let answerElements = document.getElementsByClassName("answer-text");
  let questions = document.getElementsByTagName("section");

  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].addEventListener("click", function (e) {
      givenAnswers.push(e.target.textContent);

      if (givenAnswers.length === 3) {
        let counter = 0;
        let correct = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
        for (let i = 0; i < correct.length; i++) {
          if (correct[i] === givenAnswers[i]) {
            counter++;
          }
        }

        // questions[givenAnswers.length - 1].className = "hidden";
        questions[givenAnswers.length - 1].style.display = "none";
        let output = document.querySelector("ul li h1");
        if (counter === 3) {
          output.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          output.textContent = `You have ${counter} right answers`;
        }
        let showThis = document.getElementById("results");
        showThis.style.display = 'block';
      } else {
        // questions[givenAnswers.length - 1].className = "hidden";
        // questions[givenAnswers.length].classList.remove("hidden");
        
        questions[givenAnswers.length - 1].style.display = "none";
        questions[givenAnswers.length].style.display = "block";
      }
    });
  }
}