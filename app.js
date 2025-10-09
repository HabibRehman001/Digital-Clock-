let spanDays = document.querySelector('.days');
let daysArray  = ['Sunday', 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
setInterval(() => {
    //getting date
    let getDate = new Date();
    //setting day
spanDays.innerText = daysArray[getDate.getDay()];
   //setting date
let date = document.querySelector('.date');
date.innerText = getDate.getDate();
//setting year
let year = document.querySelector('.year');
year.innerText = getDate.getFullYear();
//setting hours
let hr = document.querySelector('.hr');
hr.innerText = getDate.getHours();
if (hr.innerText >12) {
    hr.innerText = hr.innerText -12
};
//setting minutes
let min = document.querySelector('.min');
min.innerText = getDate.getMinutes();
//setting seconds
let sec = document.querySelector('.sec');
sec.innerText = getDate.getSeconds();
},1000);