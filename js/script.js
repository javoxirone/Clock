let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

// console.log(h,m,s,hours,minutes);

// let x = 0;

// function rec() {
//   console.log(x);
//   let a;

//   if (x == 50) {
//     clearInterval(a)
//   } else if (x < 1000) {
//     x++;
//     a = setTimeout(() => {
//       rec()
//     }, 100);

//   }
// }

// rec()

function clock() {
  
  const time = new Date();
  
  let hourArrow = time.getHours()
  let minArrow = time.getMinutes()
  let secArrow = time.getSeconds()
  
  // console.log(hourArrow,minArrow,secArrow);
  
  h.style.transform = `rotate(${hourArrow * 30}deg)`
  m.style.transform = `rotate(${minArrow * 6}deg)`
  s.style.transform = `rotate(${secArrow * 6}deg)`
  
  setTimeout(() => {
    clock()
  }, 1000);
  
  hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow
  minutes.innerHTML = minArrow < 10 ? '0' + minArrow : minArrow
  
}

clock()



let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')


for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click', function () {
    
    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove('active')
      tabsContentItem[k].classList.remove('active')
    }
    
    tabsItem[i].classList.add('active')
    tabsContentItem[i].classList.add('active')
    
  })
}




// JKhan's code
let startBtn = document.querySelector('.stopwatch__btn'),
    timerSeconds = document.querySelector('.stopwatch__seconds'),
    timerMinutes = document.querySelector('.stopwatch__minutes'),
    timerHours = document.querySelector('.stopwatch__hours'),
    myTimer,
    stopBtn,
    secondsCounter = 0,
    minutesCounter = 0,
    hoursCounter = 0,
    tabsLinkSpan = document.querySelector('.tabsLink__span')

// default styles of button
btnStyle()
// changing proporties of timer and button (styles, classes and others)
startBtn.addEventListener('click', () => {  
  if(startBtn.innerHTML == 'start'){
    startBtn.innerHTML = 'stop'
    btnStyle('rgb(255, 174, 0)')
    tabsLinkSpan.classList.add('active')
    startTimer()  
  }
  else if(startBtn.innerHTML == 'stop'){
    clearTimeout(myTimer)
    btnStyle('red')
    tabsLinkSpan.classList.add('active_clear')
    startBtn.innerHTML = 'clear'
  }
  else if(startBtn.innerHTML == 'clear'){
    clearTimeout(myTimer)
    nullTimers()
    btnStyle('green')
    tabsLinkSpan.classList.remove('active')
    tabsLinkSpan.classList.remove('active_clear')
    startBtn.innerHTML = 'start'
  }
})

// changing button's color (green => yellow => red)
function btnStyle(backgroundColor = 'green', color = '#ffffff'){
  startBtn.style.backgroundColor = backgroundColor
  startBtn.style.color = color
}

// null timers
function nullTimers () {
  timerSeconds.innerHTML = 0
  timerMinutes.innerHTML = 0
  timerHours.innerHTML = 0
  secondsCounter = 0
  minutesCounter = 0
  hoursCounter = 0
}
// Starting all timers (seconds, minutes, hours)
function startTimer(){
  secondsCounter += 1
  timerSeconds.innerHTML = secondsCounter
  // Seconds checking for time (60)
  if(secondsCounter == 60){
    secondsCounter = 0
    minutesCounter += 1
    timerMinutes.innerHTML = minutesCounter
  }
  // Minutes checking for time (60)
  else if(minutesCounter == 60){
    minutesCounter = 0
    hoursCounter += 1
    timerHours.innerHTML = hoursCounter
  } 

  // screen rendering
  myTimer = window.setTimeout(() => {
    startTimer()
  }, .0001)
}