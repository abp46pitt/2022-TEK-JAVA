const type = document.getElementById("type");
const sdate = document.getElementById("sdate");
const edate = document.getElementById("edate");
const button = document.getElementById("button");
const error = document.getElementById("error");
const arr = new Array(type, sdate, edate);
const table = document.getElementById("table");

let message = "Incorrect fields: ";

table.style.visibility = "hidden";

button.addEventListener("click", () => {
    let show = false;

    if (type.value === "default") {
        message += "type";
        type.style.borderColor = 'red';
        type.style.borderRadius = '25px';
        show = true;
    } else {
        removeChange(type);
    }

    if (!sdate.value) {
        message += ", start date";
        sdate.style.borderColor = 'red';
        sdate.style.borderRadius = '25px';
        show = true;
    } else {
        removeChange(sdate);
    }

    if (!edate.value) {
        message += ", end date";
        edate.style.borderColor = 'red';
        edate.style.borderRadius = '25px';
        show = true;
    } else {
        removeChange(edate);
    }

    if (parseDate(sdate.value) >= parseDate(edate.value)) {
        message = "Invalid dates";
    }

    if (show) {
        console.log(message);
        error.innerHTML = message;
        error.style.color = 'red';
        message = "Incorrect fields: ";
    } else {
        error.innerHTML = "Submited";
        error.style.color = 'green';
        printInfo();
        removeChangeAll();
    }
});

function removeChangeAll() {
    for (i in arr) {
        arr[i].style.borderColor = "black";
        arr[i].style.borderRadius = "0px";
        arr[i].value = "";
    }
}

function removeChange(element) {
    element.style.borderColor = "black";
    element.style.borderRadius = "0px";
}

function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
}

function printInfo() {
    for (let i = 0; i < 3; i++) {
        let element = document.getElementById(i);
        element.innerHTML = arr[i].value;
    }
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = parseDate(sdate.value);
    const secondDate = parseDate(edate.value);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    console.log(diffDays);
    let element = document.getElementById(3);
    element.innerHTML = diffDays;
    table.style.visibility = "visible";
}