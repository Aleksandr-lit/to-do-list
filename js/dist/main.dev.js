"use strict";

var inputAdd = document.querySelector(".todolist__input-add");
var todolistBody = document.querySelector(".todolist__body");

function addDeleteElement() {
  inputAdd.addEventListener("change", function () {
    var text = inputAdd.value;
    console.log(text);

    if (text.trim()) {
      var item = document.createElement("li");
      item.className = "todolist__item";
      item.innerHTML = "<span class=\"todolist__item-text\">".concat(text, "</span><button class=\"todolist__btn-shift btn\">\n                                </button><button class=\"todolist__btn-del btn\"></button>");
      inputAdd.value = "";
      var listTasks = document.querySelector(".todolist__list-tasks");
      listTasks.append(item);
      var btnDeletes = document.querySelectorAll(".todolist__btn-del");
      btnDeletes.forEach(function (elem) {
        elem.addEventListener("click", function () {
          this.parentElement.remove();
        });
      });
      var btnShift = document.querySelectorAll(".todolist__btn-shift");
      var listCompletedTask = document.querySelector(".todolist__list-completed-tasks");
      btnShift.forEach(function (elem) {
        elem.addEventListener("click", function () {
          listCompletedTask.append(this.parentElement);
          this.style.cssText = "background: #FFFFFF; right: 50px; transform: translate(-50%, -50%) scale(1.2);";
          this.previousSibling.style.color = "#FFFFFF";
          this.nextSibling.style.cssText = "background: #cb37b5; right: 20px;";
          this.parentElement.style.background = "#3a7bd5";
        });
      });
    } else {
      var popap = document.createElement("div");
      popap.className = "popap";
      popap.innerHTML = "<span class=\"popap__text\">\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u043B\u0430\u0441\u043A\u0430 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F!</span>";
      document.body.append(popap);
      setTimeout(function () {
        popap.remove();
      }, 3000);
      inputAdd.value = ""; // alert("Введіть будь-ласка завдання!");
    }
  });
}

addDeleteElement();