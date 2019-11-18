function solve() {
   let fundamentals = document.querySelector("input[name=js-fundamentals]");
   let advanced = document.querySelector("input[name=js-advanced]");
   let applications = document.querySelector("input[name=js-applications]");
   let web = document.querySelector("input[name=js-web]");

   let onsite = document.getElementsByTagName("input")[4];
   let online = document.getElementsByTagName("input")[5];

   let outputCourses = document.querySelector("#myCourses > div.courseBody > ul");
   let outputPrice = document.querySelector("#myCourses > div.courseFoot > p");

   let btn = document.getElementsByTagName("button")[0];
   btn.addEventListener("click", function () {

      let courses = {
         fundamentals: 170,
         advanced: 180,
         applications: 190,
         web: 490,
      };
      //Math
      if (fundamentals.checked && advanced.checked) {
         courses.advanced -= courses.advanced * 0.10;
      }
      if (fundamentals.checked && advanced.checked && applications.checked) {
         courses.fundamentals -= courses.fundamentals * 0.06;
         courses.advanced -= courses.advanced * 0.06;
         courses.applications -= courses.applications * 0.06;
      }
      if (online.checked) {
         courses.fundamentals -= courses.fundamentals * 0.06;
         courses.advanced -= courses.advanced * 0.06;
         courses.applications -= courses.applications * 0.06;
         courses.web -= courses.web * 0.06;
      }
      //appending
      let totalSum = 0;

      if (fundamentals.checked) {
         totalSum += courses.fundamentals;
         let li = document.createElement("li");
         li.textContent = "JS-Fundamentals";
         outputCourses.appendChild(li);
      }
      if (advanced.checked) {
         totalSum += courses.advanced;
         let li = document.createElement("li");
         li.textContent = "JS-Advanced";
         outputCourses.appendChild(li);

      }
      if (applications.checked) {
         totalSum += courses.applications;
         let li = document.createElement("li");
         li.textContent = "JS-Applications";
         outputCourses.appendChild(li);

      }
      if (web.checked) {
         totalSum += courses.web;
         let li = document.createElement("li");
         li.textContent = "JS-Web";
         outputCourses.appendChild(li);

      }
      if (fundamentals.checked && advanced.checked
         && applications.checked && web.checked) {
         let li = document.createElement("li");
         li.textContent = "HTML and CSS";
         outputCourses.appendChild(li);
      }
      if (totalSum > 0) {
         outputPrice.textContent = `Cost: ${Math.floor(totalSum)}.00 BGN`
      }
   });
}

solve();