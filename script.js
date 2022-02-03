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
    console.log(sTime);
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
    console.log(bTime);
    let breakTime = document.getElementById("breakTime");
    breakTime.innerText = bTime;
}

// Start time block
start.addEventListener('click',displayCounter);
var counter_second = 0;
var counter_minute = 0;
function displayCounter() {
    // console.log('display');
    // if(start.innerText =='Start') {
    //     start.innerText = 'Pause';
    //     setInterval(function() {timer();},1000);
    // }
    // else {
    //     start.innerText = 'Start';
    //     clearInterval();
    // }
    
    let period = document.getElementById('period');
    
    setInterval(function() {
        if (sTime<counter_minute) {
            counter_second = 0;
            counter_minute = 0;
            period.innerText = 'break!'
            timer();
        }
        else {
            period.innerText = 'Session';
            timer();
        }
    }
    ,1000);
    
}

// Timer count block

function timer() {
    counter_second = counter_second + 1;
    if(counter_second > 59) {
        counter_second = 0;
        counter_minute += 1;
        if (counter_minute<10) {
        document.getElementById('minute').innerText = '0' + counter_minute;
        document.getElementById('second').innerText = '0' + counter_second;
        }
        else
        {
        document.getElementById('minute').innerText = counter_minute;
        document.getElementById('second').innerText = '0' + counter_second;
        }
    }
    else if(counter_second<10)
    document.getElementById('second').innerText = '0' + counter_second;
    else
    document.getElementById('second').innerText = counter_second;
}