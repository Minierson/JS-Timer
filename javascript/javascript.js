 var s = 0;
 var m = 0;
 var h = 0;
var newInterval;
var checker = false;
/*funkcje pod przycisk start/stop*/
function startStopTimer(){
  if (checker){
    clearInterval(newInterval);
    checker = false;
    document.getElementById("startBtn").innerHTML = "Start";
  }else {
  newInterval = setInterval(timer, 10);
  checker = true;
  document.getElementById("startBtn").innerHTML = "Stop";
  }
}
/* główna funkcja timera*/
function timer(){
  s++;
  if (m === 0) {
    m = "0" + m;
  }
   if (h === 0) {
    h = "0" + h;
  }
    if (s<10){
     s = '0' + s;
  } else {
     s;
  }
  if (s === 100){
    s = 0;
    m++;
   
    if (m <10){
      m = "0" + m;
    } else {
      return m;
    }
  }
    if (m === 60){
      h++;
      m = 0;
    
  }
  
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
}
/*przycisk reset*/
function resetTimer(){
    s = 0;
    m = 0;
    h = 0;
  document.getElementById("time").innerHTML = "00:00:00";
}