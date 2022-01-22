"use strict";

(function () {
  const forms = document.getElementById("form");

  forms.addEventListener("submit", (event) => {
    event.preventDefault();
    const obj = {};
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      obj[input.name] = input.value;
    });
    createElements(obj);

    localStorage.setItem("myKey", JSON.stringify(obj));
  });

  function createElements(elemdata) {
    const div = document.createElement("div");
    div.innerHTML = JSON.stringify(elemdata);
  }
})();

// 1. Собрать данные с формы при ее сабмите

// 2. Сохранить эти данные в качестве объекта внутри
// localStorage (не забываем о преобразовании в json)

// 3. Создать второй html файл, в котором списком (ul > li)
// вывести вывести все те данные, которые пользователь ввел в форму ранее

// 4. Если данных нет, то показать соответствующее сообщение
