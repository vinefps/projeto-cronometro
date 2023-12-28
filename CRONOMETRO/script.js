let timerSeconds = document.querySelector('.seconds');
let timerMinutes = document.querySelector('.minutes');
let timerHours = document.querySelector('.hours');
let buttonSeconds = document.querySelector('.start-button');
let stopButton = document.querySelector('.stop-button');
let resetButton = document.querySelector('.reset-button');

let timer = '';
let seconds = 0;
let minutes = 0;
let hour = 0;

function sec(){
    if(seconds <= 8){
        seconds ++
        timerSeconds.innerHTML = '0' + seconds 
    }else if(seconds >= 9){
        seconds = 0
        minutes += 1
        timerSeconds.innerHTML = '0' + seconds
        timerMinutes.innerHTML = '0' + minutes +':'
        if(minutes > 1 && minutes <= 9){
            timerSeconds.innerHTML = '0' + seconds
            timerMinutes.innerHTML = '0'+ minutes + ':'
        }else if(minutes >= 9){
            seconds = 0
            minutes = 0
            hour += 1
            timerSeconds.innerHTML = '0' + seconds
            timerMinutes.innerHTML = '0' + minutes + ':'
            timerHours.innerHTML = '0'+ hour + ':'
        }else if(hour >= 9){
            seconds = 0
            minutes = 0
            hour = 0
            timerSeconds.innerHTML = '0' + seconds
            timerMinutes.innerHTML = '0'+ minutes + ':'
            timerHours.innerHTML = '0' + hour + ':'
        }
    };
};

buttonSeconds.addEventListener('click', ()=>{
    timer = setInterval(sec,20)
});
stopButton.addEventListener('click',()=>{
    clearInterval(timer)
})
resetButton.addEventListener('click', ()=>{
    seconds = 0
    minutes = 0
    hour = 0
    timerSeconds.innerHTML = '0' + seconds
    timerMinutes.innerHTML = '0'+ minutes + ':'
    timerHours.innerHTML = '0' + hour + ':'
})
























// let timerHours = document.querySelector('.hours');
// let timerMinutes = document.querySelector('.minutes');
// let date = new Date()
// let dateHours = date.getHours()
// let dateMinutes = date.getMinutes()
// let dateSeconds = date.getSeconds()

// hours.innerHTML = dateHours + ':'
// minutes.innerHTML = dateMinutes + ':'
// seconds.innerHTML = dateSeconds


