const bday = "1 Jan 2023";

function countdown(){
    const bdaydate = new Date(bday);
    const cdate = new Date();

    const sec = (bdaydate-cdate)/1000;
    const days = Math.floor(sec/3600/24);
    const hours =  Math.floor(sec/3600)%24;
    const mins = Math.floor(sec/60)%60;
    const seconds = Math.floor(sec)%60;
    document.getElementById('d').innerHTML = days;
    document.getElementById('hr').innerHTML =timeformat(hours);
    document.getElementById('min').innerHTML = timeformat(mins);
    document.getElementById('sec').innerHTML = timeformat(seconds);
}

countdown();
setInterval(countdown,1000);

function timeformat(time){
    return 10>time? `0${time}`:time;
}