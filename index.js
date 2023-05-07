// Верстка та Загальне

// Є масив, де лежать об'єкти з датами, відсортуйте його за датами.

let array = [
        {date: '2017-01-10'},
        {date: '2016-05-18'},
        {date: '2002-12-20'},
        {date: '2020-06-30'}
    ];

let arrSort = array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
})

console.log(arrSort);



// Напишіть код, який при натисканні на будь-який div всередині root буде виводити в консоль його id.

const idx3 = document.querySelector("#root div")

idx3.addEventListener('click', (e) => console.log(e.target.id));


