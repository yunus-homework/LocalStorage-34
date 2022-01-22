"use strict";
(function () {
  const ulLi = document.querySelector(".ulli");

  const getLocalKey = localStorage.getItem("myKey");
  const person = JSON.parse(getLocalKey);

  Object.entries(person).forEach((value) => {
    const li = document.createElement("li");

    li.innerHTML = value;

    ulLi.append(li);
  });

  console.log(person);
})();
