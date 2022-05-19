import Splide from '@splidejs/splide';
import flatpickr from "flatpickr";

// Async load css 
Array.prototype.slice.call(document.querySelectorAll("[data-loadcss]")).map(function (e) {
  e.addEventListener("load", function() {
      this.media = "all"
  });
})

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

new Splide('.splide', {
  gap: '2rem',
  keyboard: true,
}).mount();

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const today = new Date();
const pickerArrival = flatpickr("#picker-arrival", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "d-m-Y",
  defaultDate: today,
  minDate: today,
  onValueUpdate(selectedDates) {
    updateMinDate(selectedDates[0])
  }
});

const pickerDeparture = flatpickr("#picker-departure", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "d-m-Y",
  defaultDate: today.addDays(2),
  minDate: today,
});

function updateMinDate(date) {
  pickerDeparture.config.minDate = date.addDays(1);
}