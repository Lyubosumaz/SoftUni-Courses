function solve() {
  let siteElements = document.getElementsByClassName("link-1");
  let paragraphElements = document.getElementsByTagName('p');

  for (let i = 0; i < siteElements.length; i++) {
    siteElements[i].addEventListener('click', (e) => {
     
      let text = paragraphElements[i].textContent;
      let textParts = text.split(' ');
      let clicks = Number(textParts[1]);
      clicks++;

      textParts[1] = clicks;
      paragraphElements[i].textContent = textParts.join(' ');
    })
  }
  // for (const siteElement of siteElements) {
  //   siteElement.addEventListener('click', (e) => {
  //     let currentTarget = e.currentTarget;
  //     let paragraphElement = currentTarget.getElementsByTagName('p')[0];

  //     let text = paragraphElement.textContent;
  //     let textParts = text.split(' ');
  //     let clicks = Number(textParts[1]);
  //     clicks++;

  //     textParts[1] = clicks;
  //     paragraphElement.textContent = textParts.join(' ');
  //   })
  // }
}