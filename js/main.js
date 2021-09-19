
let title = document.querySelector(".todolist__title");
let box = document.querySelector(".todolist__box");
let inputAdd = document.querySelector(".todolist__input-add");
let todolistBody = document.querySelector(".todolist__body");
let line = document.querySelector(".todolist__line");


function loadAnimation() {
    window.addEventListener("load", () => {
        setTimeout(() => {
            title.classList.add("_load");
            box.classList.add("_load");
            line.classList.add("_load");
        }, 300);
    });
}

function showPopap(txt, time) {
    let popap = document.createElement("div");
    popap.className = "popap";
    popap.innerHTML = `<span class="popap__text">${txt}</span>`;
    document.body.append(popap);
    setTimeout(() => {
        popap.classList.add("_active");
    }, time);
    setTimeout(() => {
        popap.classList.remove("_active");
    }, 2000);
    setTimeout(() => {
        popap.remove();
    }, 2500);
}

function addDeleteElement() {
    inputAdd.addEventListener("change", function () {
        let text = inputAdd.value;
        if(text.trim()) {
            let item = document.createElement("li");
            item.className = "todolist__item";
            item.innerHTML = `<span class="todolist__item-text">${text}</span><button class="todolist__btn-shift btn">
                                </button><button class="todolist__btn-del btn"></button>`;
            inputAdd.value = "";

            let listTasks = document.querySelector(".todolist__list-tasks");
            listTasks.prepend(item);
            
            setTimeout(() => {
                item.classList.add("_active");
            }, 50);

            let btnDeletes = document.querySelectorAll(".todolist__btn-del");
            btnDeletes.forEach((elem) => {
                elem.addEventListener("click", function () {
                    this.parentElement.classList.remove("_active");
                    setTimeout(() => {
                        this.parentElement.remove();
                    }, 400);
                     
                });
            });

            let btnShift = document.querySelectorAll(".todolist__btn-shift");
            let listCompletedTask = document.querySelector(".todolist__list-completed-tasks");

            btnShift.forEach((elem) => {
                elem.addEventListener("click", function () {
                    this.parentElement.classList.remove("_active");
                    setTimeout(() => {
                        this.parentElement.classList.add("_active");
                    }, 400);
                    setTimeout(() => {
                        listCompletedTask.prepend(this.parentElement);
                    }, 200);
                    this.previousSibling.style.color = "#FFFFFF";
                    this.parentElement.style.background = "#3a7bd5";
                    showPopap(`Завдання виконано!`, 800);
                });
            });
        } else {
            showPopap("Введіть будь-ласка завдання!", 200);
            inputAdd.value = "";
        }
    });
}

loadAnimation();
addDeleteElement();



