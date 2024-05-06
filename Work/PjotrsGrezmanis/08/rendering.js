
let student = {
    firstName: 'Петр',
    lastName: 'Петр',
    age: 20,
    course: 'Html,Js',
    university: 'Университет JavaGuru'
};


function renderStudentInfo() {

    let studentInfoDiv = document.getElementById('studentInfo');


    let html = `
        <p><strong>Имя:</strong> ${student.firstName}</p>
        <p><strong>Фамилия:</strong> ${student.lastName}</p>
        <p><strong>Возраст:</strong> ${student.age}</p>
        <p><strong>Курс:</strong> ${student.course}</p>
        <p><strong>Университет:</strong> ${student.university}</p>
    `;


    studentInfoDiv.innerHTML = html;
}


window.onload = renderStudentInfo;