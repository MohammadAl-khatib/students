`use strict`;

let form = document.getElementById('form');
let table = document.getElementById('table');
let total1 = document.getElementById('total1');
let objArray = [];

function getRandom() {
    return Math.floor(Math.random() * (25 - 18 + 1) + 18);
}

function CreateStudent(studentName, email, mobileNumber, tuition) {

    this.studentName = studentName;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.tuition = tuition;
    this.age = getRandom();
    objArray.push(this);
}

form.addEventListener('submit', submitHandler);
function submitHandler(event) {

    event.preventDefault();
    let studentName = event.target.studentName.value;
    let email = event.target.email.value;
    let mobileNumber = event.target.mobileNumber.value;
    let tuition = event.target.tuition.value;

    new CreateStudent(studentName, email, mobileNumber, tuition);
    localStorage.data = JSON.stringify(objArray);

    clearTable();
    render();
}

getData();
render();

function render() {

    for (let i = 0; i < objArray.length; i++) {

        let trElement = document.createElement('tr');
        table.appendChild(trElement);

        let td1Element = document.createElement('td');
        trElement.appendChild(td1Element);
        td1Element.textContent = objArray[i].studentName;

        let td2Element = document.createElement('td');
        trElement.appendChild(td2Element);
        td2Element.textContent = objArray[i].email;

        let td3Element = document.createElement('td');
        trElement.appendChild(td3Element);
        td3Element.textContent = objArray[i].mobileNumber;

        let td4Element = document.createElement('td');
        trElement.appendChild(td4Element);
        td4Element.textContent = objArray[i].age;

        let td5Element = document.createElement('td');
        trElement.appendChild(td5Element);
        td5Element.textContent = objArray[i].tuition;
    }
    total1.textContent = `Total = ${total()}`;
}

function clearTable() {

    let tableLength = table.rows.length;
    for (let i = 1; i < tableLength; i++) {
        table.deleteRow(1);
    }
}

function getData() {

    if (localStorage.data) {
        let data = JSON.parse(localStorage.data);
        for (let i = 0; i < data.length; i++) {
            new CreateStudent(data[i].studentName, data[i].email, data[i].mobileNumber, data[i].tuition);
        }
    }
}

function total() {
    let total = 0;
    for (let i = 0; i < objArray.length; i++) {
        total += parseInt(objArray[i].tuition); 
    }
    return total;
}