const calendar = document.querySelector(".currentYear");
const datesTable = document.querySelector(".dates");

let date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const monthName = monthNames[month];

const prevLast = new Date(year, month, 0);
const thisLast = new Date(year, month+1, 0);

const prevLastDate = prevLast.getDate();
const prevLastDay = prevLast.getDay();

const thisLastDate = thisLast.getDate();
const thisLastDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(thisLastDate+1).keys()].slice(1);
const nextDates = [];

// nav 년도 월
function makeCalendar() {
  calendar.innerText = `${monthName} ${year}`;

// section 달력
  if(prevLastDay !== 6) {
    for(let i=0; i< prevLastDay+1 ; i++) {
      prevDates.unshift(prevLastDate - i);
    }
  }
  for(let i=1; i<7-thisLastDay; i++) {
    nextDates.push(i);
  }


  const dates = prevDates.concat(thisDates, nextDates);
//일~토까지 배열하기
const firstDateIndex = dates.indexOf(1);  //0
const lastDateIndex = dates.lastIndexOf(thisLastDate);  //마지막날 일-1

  dates.forEach((date,i) => {
    const condition = i>= firstDateIndex && i < lastDateIndex + 1
    ? 'this'
    : 'other';

    dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

  datesTable.innerHTML = dates.join('');
  
  const today = new Date();

  if(month === today.getMonth() && year === today.getFullYear()) {
    for(let date of document.querySelectorAll(".this")) {
      if(+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
};


makeCalendar();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  makeCalendar();
};

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  makeCalendar();
};

const goToday = () => {
  date = new Date();
  makeCalendar();
};

function clickMenu() {
  const agenda = document.querySelector("#agenda");

  if(agenda.classList.contains("hidden")) {
  agenda.classList.remove("hidden");
  } else {
    agenda.classList.add("hidden");
  }
}






