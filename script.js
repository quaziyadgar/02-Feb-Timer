var sessAdd = document.getElementById('session+');
var sessSub = document.getElementById('session-');
var breakAdd = document.getElementById('break+');
var breakSub = document.getElementById('break-');
var start = document.getElementById('start');
var reset = document.getElementById('reset');

// Session time block
sessAdd.addEventListener('click', increaseTime);
sessSub.addEventListener('click', decreaseTime);
var sTime = 0;
function increaseTime() {
    sTime += 1;
    display();
}
function decreaseTime() {
    if(sTime>0) {
    sTime -= 1;
    display();}
}
function display() {
    // console.log(sTime);
    let sessTime = document.getElementById("sessTime");
    sessTime.innerText = sTime;
}

//break time block
breakAdd.addEventListener('click', increaseBreakTime);
breakSub.addEventListener('click', decreaseBreakTime);
var bTime = 0;
function increaseBreakTime() {
    bTime += 1;
    displayBreak();
}
function decreaseBreakTime() {
    if(bTime>0) {
    bTime -= 1;
    displayBreak();}
}
function displayBreak() {
    // console.log(bTime);
    let breakTime = document.getElementById("breakTime");
    breakTime.innerText = bTime;
}

// Start time block
start.addEventListener('click',displayCounter);
var counter_second = 0;
var counter_minute;
var break_second = 0;
var break_minute;
let count = 0;
var checkPause = true;
function displayCounter() {
    if (sTime > 0) {
    count += 1;
    start.innerText = 'Pause';
    if(count === 1){
        if (checkPause) {
        counter_minute = sTime;
        break_minute = bTime;}
        interVal = setInterval(function() {timer();},1000);
    }
    else {
            clearInterval(interVal);
            count = 0;
            start.innerText = 'Resume';
            period.innerText = 'Paused';
            checkPause = false;
    }
}
else{
    alert("Session time cannot be zero");
}
}

// Timer count block
var c = 1;
var screentext= document.querySelector('.display');
function timer() {
    // console.log('timer');
    // console.log(counter_minute);
    if ( counter_minute !==0 || counter_second !== 0) {
    period.innerText = 'Session ' + c;
    screentext.style.border = '10px solid skyblue';
    screentext.style.color = 'skyblue';
    // session time counter
    if (counter_second == 0)
    {
        counter_second = 59;
        counter_minute -= 1;  
        if (counter_minute<10)
            document.getElementById('minute').innerText = '0' + counter_minute;
        else
        document.getElementById('minute').innerText = counter_minute;
        document.getElementById('second').innerText = counter_second;
    }
    else{
        counter_second -= 1;
        if (counter_minute<10)
            document.getElementById('minute').innerText = '0' + counter_minute;
        else
        document.getElementById('minute').innerText = counter_minute;
        if (counter_second<10)
        document.getElementById('second').innerText = '0' + counter_second;
        else
        document.getElementById('second').innerText = counter_second;
    }
}
// break time counter
else {
    if (break_minute !==0 || break_second !== 0) {
    period.innerText = 'break!';
    screentext.style.color = 'orange';
    screentext.style.border = '10px solid orange';
    if (break_second == 0)
    {
        break_second = 59;
        break_minute -= 1;  
        if (break_minute<10)
            document.getElementById('minute').innerText = '0' + break_minute;
        else
        document.getElementById('minute').innerText = break_minute;
        document.getElementById('second').innerText = break_second;
    }
    else{
        break_second -= 1;
        if (break_minute<10)
            document.getElementById('minute').innerText = '0' + break_minute;
        else
        document.getElementById('minute').innerText = break_minute;
        if (break_second<10)
        document.getElementById('second').innerText = '0' + break_second;
        else
        document.getElementById('second').innerText = break_second;
    }
    }
    else {
        counter_minute = sTime;
        break_minute = bTime;
        c += 1;
        document.getElementById('minute').innerText = counter_minute;
        document.getElementById('second').innerText = counter_second;
    }
}

}

// Reset code
reset.addEventListener('click',
function () {
    clearInterval(interVal);
    sTime = 0;
    display();
    bTime = 0;
    displayBreak();
    count = 0;
    c = 1;
    counter_second = 0;
    break_second = 0;
    checkPause = 'true';
    period.innerText = 'Session cleared';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    screentext.style.color = 'black';
    screentext.style.border = '10px solid black';
    start.innerText = 'Start';
}
)
