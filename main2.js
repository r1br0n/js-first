uname = prompt("Ваше ім'я:");
alert(uname);
alert(`Привіт, ${uname}!`)


let scores = 0;

let q1 = prompt("Мова розмітки це : а) HTML; б) CSS; в) JS; ");
if (q1 == 'а' || q1 == 'a') {
    scores = scores + 2;
} else {
    scores = scores - 1;
}

let q2 = prompt("Мова стилю це : а) HTML; б) CSS; в) JS; ");
if (q2 == 'б') {
    scores = scores + 2;
} else {
    scores = scores - 1
}

let q3 = prompt("Динамічна мова це : а) HTML; б) CSS; в) JS; ");
if (q3 == 'в' || q3 == 'в') {
    scores = scores + 2;
} else {
    scores = scores - 1;
}

let q4 = prompt("Тег заголовку в HTML : а) h; б) p; в) table; ");
if (q4 == 'а' || q4 == 'a') {
    scores = scores + 2;
} else {
    scores = scores - 1;
}

let q5 = prompt("Тег таблиці в HTML : а) h; б) p; в) table; ");
if (q5 == 'в' || q5 == 'в') {
    scores = scores + 2;
} else {
    scores = scores - 1;
}


alert(`Результат: ${scores}`)