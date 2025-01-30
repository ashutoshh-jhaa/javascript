class App {
  constructor() {
    this.initUI();
  }

  editInput(input) {
    input.readOnly = false;
    input.focus();
  }

  deleteInput(parentElement, parent) {
    parentElement.remove();
    if (parent.children.length == 1) {
      const defaultText = document.getElementById("info-text");
      defaultText.classList.remove("d-none");
    }
  }

  // strikeList(input) {
  //   input.
  // }

  addTask() {
    document.getElementById("info-text").classList.add("d-none");

    const listRow = document.getElementById("list-row");

    const inputGroup = this.createElement("div", ["input-group"], "")

    const inputGroupText = this.createElement("div", ["input-group-text"], "")
    const checkBox = this.createElement("input", ["form-check-input"])
    checkBox.type = "checkbox"
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        // strikeList(input)
      } else if (!checkBox.checked) {
        // strikeList(input)
      }
    })
    inputGroupText.appendChild(checkBox);

    const input = this.createElement("input", ["form-control"], "");
    input.type = "text";
    input.placeholder = "Write your Plans...";
    input.addEventListener("blur", (event) => {
      if (event.target.value) {
        input.readOnly = true;
      }
    })

    const editButton = this.createElement("button", ["btn", "btn-light", "text-bg-dark"], "");
    const deleteButton = this.createElement("button", ["btn", "btn-ligth", "text-bg-dark"], "");
    const editIcon = this.createElement("i", ["fa-regular", "fa-pen-to-square", "input-group-text"], "");
    const deleteIcon = this.createElement("i", ["fa-solid", "fa-trash", "input-group-text"], "");

    editButton.appendChild(editIcon);
    deleteButton.appendChild(deleteIcon);

    editButton.addEventListener("click", () => {
      this.editInput(input);
    })

    deleteButton.addEventListener("click", () => {
      this.deleteInput(inputGroup, listRow);
    })

    inputGroup.appendChild(inputGroupText)
    inputGroup.appendChild(input);
    inputGroup.appendChild(editButton)
    inputGroup.appendChild(deleteButton)

    listRow.appendChild(inputGroup);

    setTimeout(() => {
      input.focus();
    }, 0);
  };

  createElement(tag, classes = [], text = "") {
    const element = document.createElement(tag);
    if (classes.length) element.classList.add(...classes);
    if (text) element.innerText = text;
    return element;
  }

  initUI() {
    const container = this.createElement("div", ["container"]);

    // Heading Section
    const headingContainer = this.createElement("div", ["text-center", "mb-4"]);
    const heading = this.createElement("p", ["display-5", "fw-semibold"], "Todo List");
    headingContainer.appendChild(heading);
    container.appendChild(headingContainer);

    // Widgets Row
    const todoWidgetsRow = this.createElement("div", ["row", "justify-content-between", "align-items-center", "mb-3"]);

    const colAuto = this.createElement("div", ["col-auto"]);
    const tasks = this.createElement("h5", ["fw-semibold"], "Your Tasks");
    colAuto.appendChild(tasks);
    todoWidgetsRow.appendChild(colAuto);

    const newTaskContainer = this.createElement("div", ["col-auto"]);
    const newButton = this.createElement("button", ["btn", "btn-primary"], "Add Task");
    newButton.id = "new-item";
    newButton.addEventListener("click", () => {
      this.addTask();
    })

    const newIcon = this.createElement("i", ["fa-solid", "fa-plus", "me-1"]);
    newButton.prepend(newIcon);
    newTaskContainer.appendChild(newButton);
    todoWidgetsRow.appendChild(newTaskContainer);

    container.appendChild(todoWidgetsRow);

    // Main Row
    const mainRow = this.createElement("div", ["row", "bg-body-secondary", "p-3", "rounded", "shadow-sm"]);
    mainRow.id = "list-row"
    const listCol = this.createElement("div", ["col", "text-center", "text-muted"], "No tasks yet. Add a new task to get started!");
    listCol.id = "info-text"
    mainRow.appendChild(listCol);
    container.appendChild(mainRow);

    document.body.appendChild(container);
  }
}

const app = new App();