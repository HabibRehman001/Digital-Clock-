let spanDays = document.querySelector('.days');
let daysArray  = ['Sunday', 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
setInterval(() => {
    //getting date
    let getDate = new Date();
    //setting day
spanDays.innerText = daysArray[getDate.getDay()]
   //setting date
let date = document.querySelector('.date')
date.innerText = getDate.getDate()
//setting year
let year = document.querySelector('.year')
year.innerText = getDate.getFullYear()
let hr = document.querySelector('.hr');
hr.innerText = getDate.getHours()-12
let min = document.querySelector('.min');
min.innerText = getDate.getMinutes();
let sec = document.querySelector('.sec');
sec.innerText = getDate.getSeconds();
},1000)