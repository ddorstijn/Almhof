import flatpickr from "flatpickr";

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

// new Splide('.splide', {
//   gap: '2rem',
//   keyboard: true,
//   autoWidth: true,
//   perPage: 1,
//   mediaQuery: 'min',
//   breakpoints: {
// 		640: {
// 			perPage: 2,
// 		},
//     768: {
//       perPage: 3,
//     },
//     1024: {
//       perPage: 4,
//     },
//     1280: {
//       perPage: 5
//     },
//     1536: {
//       perPage: 6
//     }
//   }
// }).mount();

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