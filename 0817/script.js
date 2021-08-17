let pointDay = prompt('계산할 기념일을 입력해주세요.',"2021-7-20");
let days = prompt("게산할 일자를 입력하세요.", "100");

let now = new Date();
let dDay = new Date(pointDay);

let toNow = now.getTime();
let todDay = dDay.getTime();

let passTime = toNow - todDay;
console.log(toNow-todDay);

let passDay = Math.trunc(passTime / 1000 / 60 / 60 / 24);
console.log(passDay);
document.getElementById('accent').innerHTML = passDay + "일 경과";
document.getElementById('firstDay').innerHTML = pointDay;

let itemDate = document.querySelectorAll(".item-date");
let itemPoint = document.getElementById('pointDay');

function calcDate(days){
    let theTime = days * 24 * 60 * 60 * 1000;
    let future = todDay + theTime;
    let someDay = new Date(future);

    let year = someDay.getFullYear();
    let month = someDay.getMonth() + 1;
    let date = someDay.getDate();

    let dateId  = "date" + days;

    
    if( itemDate ){
        document.getElementById(dateId).innerHTML = year + "년 " + month + "월 " + date + "일";
    }
}
calcDate(days);
