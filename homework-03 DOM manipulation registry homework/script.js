let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let description = document.getElementById("description");
let createReminderBtn = document.getElementById("createRemainderButton");
let showReminderBtn = document.getElementById("showRemainderButton");
let result = document.getElementById("result");
let reminders = [];

function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

createReminderBtn.addEventListener("click", () => {
  let newReminder = new Reminder(
    titleElem.value,
    priorityElem.value,
    colorElem.value,
    description.value
  );

  reminders.push(newReminder);

  resetForm();
});
function resetForm() {
  titleElem.value = "";
  priorityElem.value = "";
  colorElem.value = "";
  description.value = "";
}

showReminderBtn.addEventListener("click", () => {
  result.replaceChildren();
  let tbl = document.createElement("table");
  tbl.setAttribute("border", "1");

  createTableHeader(tbl);
  createTableBody(tbl);

  result.appendChild(tbl);
});

function createTableHeader(tbl) {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let thTitle = document.createElement("th");
  let thPriority = document.createElement("th");
  let thDescription = document.createElement("th");

  thTitle.innerText = "Title";
  thPriority.innerText = "Priority";
  thDescription.innerText = "Description";

  tr.appendChild(thTitle);
  tr.appendChild(thPriority);
  tr.appendChild(thDescription);
  thead.appendChild(tr);
  tbl.appendChild(thead);
}

function createTableBody(tbl) {
  let tbody = document.createElement("tbody");

  for (const reminder of reminders) {
    let tr = document.createElement("tr");
    let tdTitle = document.createElement("td");
    let tdPriority = document.createElement("td");
    let tdDescription = document.createElement("td");

    tdTitle.innerHTML = `<span style = "color: ${reminder.color}">${reminder.title}</span>`;
    tdPriority.innerText = reminder.priority;
    tdDescription.innerText = reminder.description;

    tr.appendChild(tdTitle);
    tr.appendChild(tdPriority);
    tr.appendChild(tdDescription);
    tbody.appendChild(tr);
  }
  tbl.appendChild(tbody);
}
