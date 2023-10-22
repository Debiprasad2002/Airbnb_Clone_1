// const url =
//   "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-10-22&checkout=2023-10-24&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "17fdd2ceb0msh52562bc1770e0cbp14da61jsn3fcb86924c1c",
//     "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
//   },
// };

// async function getData(url, options) {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData(url, options);

const searchButton = document.getElementById("search-hotels");
const locationElement = document.getElementById("location");
const checkInElement = document.getElementById("check-in");
const checkOutElement = document.getElementById("check-out");
const guestElement = document.getElementById("guests");

let location;
let checkInDate;
let checkOutDate;
let guestCount;

searchButton.addEventListener("click", () => {
  location = locationElement.value;
  checkInDate = checkInElement.value;
  checkOutDate = checkOutElement.value;
  guestCount = guestElement.value;

  localStorage.setItem("location", location);
  localStorage.setItem("checkInDate", checkInDate);
  localStorage.setItem("checkOutDate", checkOutDate);
  localStorage.setItem("guestCount", guestCount);
  //   console.log(location, checkInDate, checkOutDate, guesCount);
  window.location.href = "listing.html";
});