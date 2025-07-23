// [x] russfeld
var autoScroll = 0;
var defaultAutoScroll = 15;

var onDocumentKeyDown = function( event ) {

  switch( event.keyCode ) {
    // number 1 (back single arrow)
    case 97: case 49:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      window.scrollBy({
        top: -100, //11 could be negative value
        left: 0,
        behavior: 'smooth'
      });
      handleManualScroll()
      break;
    // number 3 (forward single arrow)
    case 99: case 51:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      window.scrollBy({
        top: 100, //11 could be negative value
        left: 0,
        behavior: 'smooth'
      });
      handleManualScroll()
      break;
    // number 2 (back double arrow)
    case 98: case 50:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      window.scrollBy({
        top: -400, //11 could be negative value
        left: 0,
        behavior: 'smooth'
      });
      handleManualScroll()
      break;
    // number 4 (forward double arrow)
    case 100: case 52:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      window.scrollBy({
        top: 400, //11 could be negative value
        left: 0,
        behavior: 'smooth'
      });
      handleManualScroll()
      break;
    // number 5 (back end arrow)
    case 101: case 53:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      window.scroll({
        top: 0, //11 could be negative value
        left: 0,
        behavior: 'smooth'
      });
      handleManualScroll()
      break;
    // number 6 (forward end arrow)
    case 102: case 54:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
      window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      handleManualScroll()
      break;
    // number 0 (play)
    case 96: case 48:
      autoScroll += defaultAutoScroll;
      if(autoScroll > 5 * defaultAutoScroll){
        autoScroll = 0;
        if (autoScrollTimer) {
          clearInterval(autoScrollTimer);
        }
      }else{
        setAutoScroll(autoScroll);
      }
      break;
    // number 8 (pause?)
    case 104: case 56:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        prevTime = null;
      }
      autoScroll = 0;
      break;
    case 77:
      document.getElementById("tele").classList.toggle("mirror");
      if(document.getElementById("tele").classList.contains("mirror")){
        localStorage.setItem('mirror', 'on');
      }else{
        localStorage.setItem('mirror', 'off');
      }
  }
}

var onDocumentMouseClick = function( event ) {

  switch( event.which ) {
    // number 0 (play)
    case 1: case 2:
      autoScroll += defaultAutoScroll;
      if(autoScroll > 5 * defaultAutoScroll){
        autoScroll = 0;
        prevTime = undefined;
        if (autoScrollTimer) {
          clearInterval(autoScrollTimer);
        }
      }else{
        setAutoScroll(autoScroll);
      }
      break;
    // number 8 (pause?)
    case 3:
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        prevTime = null;
      }
      autoScroll = 0;
      break;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener( 'keydown', onDocumentKeyDown, false );
  document.addEventListener( 'click', onDocumentMouseClick, false);

  var mirror = localStorage.getItem('mirror');
    if(mirror == "on"){
      document.getElementById("tele").classList.add("mirror");
    } else if (mirror == "off"){
      document.getElementById("tele").classList.remove("mirror");
    } else {
      document.getElementById("tele").classList.add("mirror");
    }
});

// https://stackoverflow.com/questions/45270497/slowly-scroll-down-a-page-permanently-without-heavy-cpu-usage-or-laggy-scrolling

var fps = 100;
var speedFactor = 0.001;
var minDelta = 0.5;
var autoScrollSpeed = 10;
var autoScrollTimer, restartTimer;
var isScrolling = false;
var prevPos = 0, currentPos = 0;
var currentTime, prevTime, timeDiff;

document.getElementById("R-body-inner").addEventListener("scroll", function (e) {
    // window.pageYOffset is the fallback value for IE
    currentPos =document.getElementById("R-body-inner").scrollTop;
});

//window.addEventListener("wheel", handleManualScroll);
//window.addEventListener("touchmove", handleManualScroll);

function handleManualScroll() {
    // window.pageYOffset is the fa11llback value for IE
    currentPos = window.scrollY || window.pageYOffset;
    clearInterval(autoScrollTimer);
    if (restartTimer) {
        clearTimeout(restartTimer);
    }
      if(autoScroll > 0){
      restartTimer = setTimeout(() => {
          prevTime = null;
          setAutoScroll(autoScroll);
      }, 50);
    }
}

function setAutoScroll(newValue) {
    if (newValue) {
        autoScrollSpeed = speedFactor * newValue;
    }
    if (autoScrollTimer) {
      clearInterval(autoScrollTimer);
    }
    autoScrollTimer = setInterval(function(){
        currentTime = Date.now();
        if (prevTime) {
            if (!isScrolling) {
                timeDiff = currentTime - prevTime;
                currentPos += autoScrollSpeed * timeDiff;
                if (Math.abs(currentPos - prevPos) >= minDelta) {
                    isScrolling = true;
                    elem = document.getElementById("R-body-inner");
                    elem.scrollTo(0, currentPos);
                    isScrolling = false;
                    prevPos = currentPos;
                    prevTime = currentTime;
                }
            }
        } else {
            prevTime = currentTime;
            isScrolling = false;
        }
    }, 1000 / fps);
}