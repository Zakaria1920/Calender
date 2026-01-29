let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const days = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prevButton = document.querySelector(".prev-mon-but");

const nextButton = document.querySelector(".next-mon-but");

const prevMon = document.querySelector(".prev-mon");

const nextMon = document.querySelector(".next-mon");

const today = document.querySelector(".today");
// Array of month names+
const months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const monthsArr = months.split(",");
console.log(new Date().getDay());
const manipulate = () => {
  let dayone = new Date(year, month, 1).getDay();

  let lastdate = new Date(year, month + 1, 0).getDate();

  let dayend = new Date(year, month, lastdate).getDay();

  let monthlastdate = new Date(year, month, 0).getDate();

  let lit = "";

  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  for (let i = 1; i <= lastdate; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  currdate.innerText = `${monthsArr[month]} ${year}`;

  days.innerHTML = lit;

  if (month - 1 === -1) {
    prevMon.innerText = monthsArr[monthsArr.length - 1];
  } else {
    prevMon.innerText = monthsArr[month - 1];
  }

  if (month + 1 === 12) {
    nextMon.innerText = monthsArr[0];
  } else {
    nextMon.innerText = monthsArr[month + 1];
  }
};

manipulate();

// Attach a click event listener to each icon
prevButton.addEventListener("click", () => {
  // Check if the icon is "calendar-prev"
  // or "calendar-next"
  month = month - 1;

  // Check if the month is out of range
  if (month < 0) {
    // Set the date to the first day of the
    // month with the new year
    date = new Date(year, month, new Date().getDate());

    // Set the year to the new year
    year = date.getFullYear();

    // Set the month to the new month
    month = date.getMonth();
  }

  // Call the manipulate function to
  // update the calendar display
  manipulate();
});

nextButton.addEventListener("click", () => {
  // Check if the icon is "calendar-prev"
  // or "calendar-next"
  month = month + 1;

  // Check if the month is out of range
  if (month > 11) {
    // Set the date to the first day of the
    // month with the new year
    date = new Date(year, month, new Date().getDate());

    // Set the year to the new year
    year = date.getFullYear();

    // Set the month to the new month
    month = date.getMonth();
  }

  // Call the manipulate function to
  // update the calendar display
  manipulate();
});

days.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (
    clickedElement.tagName === "LI" &&
    !clickedElement.classList.contains("inactive")
  ) {
    const lis = document.querySelectorAll(".calendar-dates li");

    lis.forEach((li) => {
      li.classList.remove("active");
    });

    clickedElement.classList.add("active");
  }
});

today.addEventListener("click", () => {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth();
  manipulate();
});
