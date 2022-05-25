const calendar = document.querySelector(".currentYear");


function getCalendar() {
  const date = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

  const year = String(date.getFullYear());
  const month = date.getMonth();
  const monthName = monthNames[month];
  const day = String(date.getDay());

  calendar.innerText = `${monthName} ${year}`;



}

getCalendar();