/*Перeделать данную конструкцию на swich/case решение

if (day === 'Monday') {
    console.log('1');
} else if (day === 'Tuesday') {
    console.log('2');
} else if (day === 'Wednestay') {
    console.log('3');
} else if (day === 'Thursday') {
    console.log('4');
} else if (day === 'Friday') {
    console.log('5');
} else if (day === 'Saturday') {
    console.log('6');
} else if (day === 'Saturday') {
    console.log('7');
} else {
    console.log('Error');
}
*/
const workday = "true";

switch (workday) {
    case "Monday":
        console.log("1");
        break;
    case "Tuesday":
        console.log("2");
        break;
    case "Wednestay":
        console.log("3");
        break;
    case "Thursday":
        console.log("4");
        break;
    case "Friday":
        console.log("5");
        break;
    case "Saturday":
        console.log("6");
        break;
    case "Saturday":
        console.log("7");
        break;
    default:
        console.log("Error")
        break;
}