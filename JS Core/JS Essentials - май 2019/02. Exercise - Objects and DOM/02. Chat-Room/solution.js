function solve() {
   let targetDiv = document.getElementsByClassName("my-message")[0];
   let sendButton = document.getElementById("send");
   let textArea = document.getElementById("chat_input");
   let chatMassageArea = document.getElementById("chat_messages");

   sendButton.addEventListener("click", function () {
      let targetDivClone = targetDiv.cloneNode(true);
      let textAreaContent = textArea.value;
      if (textArea !== "") {
         targetDivClone.textContent = textAreaContent;
         chatMassageArea.appendChild(targetDivClone);

         textArea.value = "";
      }
   });
}