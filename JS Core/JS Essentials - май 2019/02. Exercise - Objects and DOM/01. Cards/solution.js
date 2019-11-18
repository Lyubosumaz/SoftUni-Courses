function solve() {
   // let player1History = 0;
   // let player2History = 0;


   // let player1Images = document.querySelectorAll("div#player1Div img");
   // for (let i = 0; i < player1Images.length; i++) {
   //    player1Images[i].addEventListener("click", function () {
   //       player1Images[i].src = "images/whiteCard.jpg";

   //       let player1Strength = document.getElementsByTagName("span")[0];
   //       player1Strength.textContent = Number(player1Images[i].name);

   //       player1History = (Number(player1Images[i].name));
   //    });
   // }

   // let player2Images = document.querySelectorAll("div#player2Div img");
   // for (let i = 0; i < player2Images.length; i++) {
   //    player2Images[i].addEventListener("click", function () {
   //       player2Images[i].src = "images/whiteCard.jpg";
   //       let player2Strength = document.getElementsByTagName("span")[2];
   //       player2Strength.textContent = Number(player2Images[i].name);

   //       player2History = (Number(player2Images[i].name));

   //       if (player1History < player2History) {
   //          player2Images[i].style.border = "2px solid green";
   //       } else if (player1History[i] > player2History[i]) {
   //          player2Images[i].style.border = "2px solid red";
   //       }
   //    });
   // }


   let p1CardIndex = 0;
   let p2CardIndex = 0;
   let p1CardValue = 0;
   let p2CardValue = 0;
   const cardHistory = [];

   let images = document.querySelectorAll("section.cards img");
   for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function (e) {
         const currentImg = e.currentTarget
         currentImg.src = "images/whiteCard.jpg";
         const imgName = currentImg.name

         const parentId = e.target.parentElement.id
         if (parentId === "player1Div") {
            let player1Result = document.getElementsByTagName("span")[0];
            player1Result.textContent = imgName;
            p1CardValue = imgName
            p1CardIndex = i
         } else if (parentId === "player2Div") {
            let player2Result = document.getElementsByTagName("span")[2];
            player2Result.textContent = imgName;
            p2CardValue = imgName
            p2CardIndex = i
         }

         if (p1CardIndex > 0 && p2CardIndex > 0) {
            if (p1CardValue < p2CardValue) {
               images[p1CardIndex].style.border = "2px solid red";
               images[p2CardIndex].style.border = "2px solid green";
            } else if (p1CardValue > p2CardValue) {
               images[p1CardIndex].style.border = "2px solid green";
               images[p2CardIndex].style.border = "2px solid red";
            }
            cardHistory.push(`[${p1CardValue} vs ${p2CardValue}]`)
            p1CardIndex = null;
            p2CardIndex = null;
            p1CardValue = null;
            p2CardValue = null;
            // player1History = (Number(currentImg.name));
            let history = document.getElementById("history");
            history.textContent = cardHistory.join(' ');
            console.log(cardHistory)
         }

      });
   }
}