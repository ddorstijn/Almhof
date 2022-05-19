import Splide from '@splidejs/splide';
import flatpickr from "flatpickr";

// Async load css 
document.querySelectorAll("[data-loadcss]").forEach(el => {
  el.media = "all";
});

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

new Splide('.splide', {
  gap: '2rem',
  keyboard: true,
}).mount();

const today = new Date();
flatpickr("#picker-arrival", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "d-m-Y",
  defaultDate: today,
  minDate: today,
  onValueUpdate(selectedDates) {
    updateMinDate(selectedDates[0] ?? today)
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