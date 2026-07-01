let count = 1;

function addButtonEvent(btn) {

    btn.onclick = function () {

        if (btn.innerText === "start") {

            btn.innerText = "working";
            btn.style.backgroundColor = "yellow";
            btn.style.color = "white";

        } else if (btn.innerText === "working") {

            btn.innerText = "completed";
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
            btn.disabled = true;

        }

    };

}

let buttons = document.querySelectorAll(".start");

buttons.forEach(function (btn) {
    addButtonEvent(btn);
});

document.getElementById("add").onclick = function () {

    let task = prompt("Enter your task:");

    if (task === null || task.trim() === "") {
        return;
    }

    let table = document.getElementById("table");

    let row = table.insertRow(-1);

    row.insertCell(0).innerHTML = count;
    row.insertCell(1).innerHTML = task;
    row.insertCell(2).innerHTML =
        '<button class="start">start</button>';

    let newBtn = row.querySelector(".start");
    addButtonEvent(newBtn);

    count++;
};
document.getElementById("delete").onclick = function () {

    let table = document.getElementById("table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    count = 1;

};
document.getElementById("delRow").onclick = function () {
    
    let table = document.getElementById("table");
    
    let serial = prompt("Enter Serial Number to Delete:");
    
    if (serial === null || serial.trim() === "") {
        return;
    }
    
    serial = parseInt(serial);
    
    if (isNaN(serial) || serial < 1 || serial >= table.rows.length) {
        alert("Invalid Serial Number!");
        return;
    }
    
    table.deleteRow(serial);
    
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerText = i;
    }
    
    count = table.rows.length;
};