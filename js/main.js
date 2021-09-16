let inputAdd = document.querySelector(".todolist__input-add");
let todolistBody = document.querySelector(".todolist__body");

function addDeleteElement() {
    inputAdd.addEventListener("change", function () {
        let text = inputAdd.value;
        console.log(text);
        if(text.trim()) {
    
            let item = document.createElement("li");
            item.className = "todolist__item";
            item.innerHTML = `<span class="todolist__item-text">${text}</span><button class="todolist__btn-shift btn">
                                </button><button class="todolist__btn-del btn"></button>`;
            inputAdd.value = "";

            let listTasks = document.querySelector(".todolist__list-tasks");
            listTasks.append(item);
            
            let btnDeletes = document.querySelectorAll(".todolist__btn-del");
            btnDeletes.forEach((elem) => {
                elem.addEventListener("click", function () {
                this.parentElement.remove(); 
                });
            });

            let btnShift = document.querySelectorAll(".todolist__btn-shift");
            let listCompletedTask = document.querySelector(".todolist__list-completed-tasks");
            btnShift.forEach((elem) => {
                elem.addEventListener("click", function () {
                    listCompletedTask.append(this.parentElement);
                    this.style.cssText = `background: #FFFFFF; right: 50px; transform: translate(-50%, -50%) scale(1.2);`;
                    this.previousSibling.style.color = "#FFFFFF";
                    this.nextSibling.style.cssText = `background: #cb37b5; right: 20px;`;
                    this.parentElement.style.background = "#3a7bd5";
                });
            });
        } else {
            let popap = document.createElement("div");
            popap.className = "popap";
            popap.innerHTML = `<span class="popap__text">Введіть будь-ласка завдання!</span>`;
            document.body.append(popap);
            setTimeout(() => {
                popap.remove();
            }, 3000);
            inputAdd.value = "";
            // alert("Введіть будь-ласка завдання!");
        }
    });
}

addDeleteElement();



