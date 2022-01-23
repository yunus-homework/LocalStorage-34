"use strict";
(function () {
  const ulLi = document.querySelector(".ulli");

  const getLocalKey = localStorage.getItem("myKey");
  const person = JSON.parse(getLocalKey);

  Object.keys(person).forEach((key) => {
    const li = document.createElement("li");

    li.innerHTML = `${key} :  ${person[key]}`;

    ulLi.append(li);
  });

  console.log(person);
})();
