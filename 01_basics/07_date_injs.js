// In JavaScript, working with date and time involves using the Date object, which provides a variety of methods for creating, manipulating, and formatting dates and times. Here’s an in-depth look at how Date works, including its components, manipulation, and time zones.

// 1. Creating a Date Object
// Current Date and Time: You can create a Date object representing the current date and time by simply calling:

const now = new Date();
console.log(now); // Outputs current date and time
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

// Specific Date and Time: To create a Date object for a specific date, you pass parameters such as year, month (0-11), day, hour, minute, second, and millisecond.

const specificDate = new Date(2024, 8, 9, 10, 30, 0);
console.log(specificDate); // Sep 9, 2024, 10:30:00

// From String (ISO Format): You can also create a date from an ISO string or other recognized date formats.

const isoDate = new Date("2024-09-09T10:30:00Z"); // UTC time
console.log(isoDate);

// 2. Date Methods
// The Date object provides various methods to get and set specific parts of a date and time.

// Getting Values:
// getFullYear(): Returns the year (4 digits).
// getMonth(): Returns the month (0-11).
// getDate(): Returns the day of the month (1-31).
// getHours(): Returns the hour (0-23).
// getMinutes(): Returns the minutes (0-59).
// getSeconds(): Returns the seconds (0-59).
// getMilliseconds(): Returns the milliseconds (0-999).
// getDay(): Returns the day of the week (0-6; 0 = Sunday).
// getTime(): Returns the number of milliseconds since the Unix Epoch (January 1, 1970).

const now1 = new Date();
console.log(now1.getFullYear()); // e.g., 2024
console.log(now1.getMonth()); // e.g., 8 (September)
console.log(now1.getDate()); // e.g., 9

// Setting Values:
// setFullYear(year): Sets the year.
// setMonth(month): Sets the month.
// setDate(day): Sets the day of the month.
// setHours(hour): Sets the hour.
// setMinutes(minutes): Sets the minutes.
// setSeconds(seconds): Sets the seconds.

const date = new Date();
date.setFullYear(2025);
date.setMonth(0); // January
console.log(date); // January 2025

// 3. Time Zones
// JavaScript Date objects are always stored as UTC (Coordinated Universal Time), but can be presented in local time or manipulated as such.
// UTC Methods: There are UTC versions of the standard methods for getting and setting date and time components.
// getUTCFullYear(), getUTCMonth(), getUTCHours(), etc.
// Timezone Offset: You can use getTimezoneOffset() to get the difference between UTC time and the local time in minutes.

const now2 = new Date();
console.log(now2.getTimezoneOffset()); // e.g., -240 for UTC-4

// 4. Formatting Dates
// JavaScript does not have a built-in formatter for dates (like Python's strftime), but you can format dates manually or by using the toLocaleString method.

// toLocaleDateString(): Converts the date to a string based on the locale.

const date1 = new Date();
console.log(date1.toLocaleDateString("en-US")); // 9/9/2024

// toLocaleTimeString(): Converts the time to a string based on the locale.

console.log(date.toLocaleTimeString("en-US")); // 10:30:00 AM

// For custom formatting, libraries like date-fns or Moment.js are often used, but for modern needs, the built-in Intl.DateTimeFormat provides a lot of options:

const date2 = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date2)); // Monday, September 9, 2024

// 5. Date Arithmetic
// You can perform arithmetic with dates by using the getTime() method, which returns the timestamp in milliseconds, and then converting it back to a date.

const now3 = new Date();
const futureDate = new Date(now3.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days later
console.log(futureDate);

// 6. Comparing Dates
// You can compare dates using relational operators (>, <, >=, <=) or by comparing their timestamps.

const date3 = new Date("2024-09-09");
const date4 = new Date("2025-09-09");
console.log(date4 > date4); // false

// 7. Handling Date Parsing
// JavaScript’s Date.parse() can be used to parse date strings, but be cautious, as different browsers might interpret some formats differently. It’s best to use ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ).

const parsedDate = Date.parse("2024-09-09T10:30:00Z");
console.log(new Date(parsedDate)); // Mon Sep 09 2024 10:30:00 GMT

// 8. Dealing with Time Zones and Daylight Saving
// Time Zone Abbreviations: Be careful with time zone abbreviations (e.g., PST, EST), as they may not account for Daylight Saving Time shifts. Always prefer UTC or the offset.
// DST Awareness: JavaScript automatically adjusts for daylight saving time when the local time zone changes.

// 9. High-Resolution Time with performance.now()
// For precise time measurements (useful in benchmarking or performance checks), use performance.now(). It returns the number of milliseconds, including fractions, since the page was loaded.

const start = performance.now();
// Some code to measure
const end = performance.now();
console.log(`Execution time: ${end - start} ms`);

// Summary
// Date Manipulation: Date object provides powerful ways to create, manipulate, and format dates.
// Formatting: Use toLocaleDateString(), toLocaleTimeString(), or Intl.DateTimeFormat for locale-based formatting.
// Arithmetic and Comparisons: Add, subtract, and compare dates using getTime() or relational operators.
// Timezone and UTC: Be aware of time zones, offsets, and the use of UTC when necessary.

// date.now

// Date.now() is a built-in JavaScript method that returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch). It is useful when you need a quick timestamp or when calculating time differences.

// extract the total time (hours, minutes, seconds) and the day of the year without using new Date(), relying solely on Date.now() (which gives you a timestamp in milliseconds since January 1, 1970).

// Let’s go deeper into how to do this manually.

// Key Concepts:
// Date.now() gives the current time as the number of milliseconds since January 1, 1970 (Unix Epoch).

// From this timestamp, you can calculate:
// Total seconds, minutes, hours, and days since the epoch.
// Based on these, you can calculate the current time and date components.

// Constants to use:
// Milliseconds per second = 1000
// Milliseconds per minute = 1000 * 60
// Milliseconds per hour = 1000 * 60 * 60
// Milliseconds per day = 1000 * 60 * 60 * 24

// 1. Get Total Time (Hour, Minute, Second) from Date.now()

const myTime = Date.now(); // current timestamp in milliseconds

// Constants for conversions
// const millisecondsInASecond = 1000;
// const millisecondsInAMinute = millisecondsInASecond * 60;
// const millisecondsInAnHour = millisecondsInAMinute * 60;
// const millisecondsInADay = millisecondsInAnHour * 24;

// Calculate total milliseconds elapsed since start of the day (midnight)
const millisecondsElapsedToday = myTime % millisecondsInADay;

// Convert to hours, minutes, seconds
const hours = Math.floor(millisecondsElapsedToday / millisecondsInAnHour);
const minutes = Math.floor(
  (millisecondsElapsedToday % millisecondsInAnHour) / millisecondsInAMinute
);
const seconds = Math.floor(
  (millisecondsElapsedToday % millisecondsInAMinute) / millisecondsInASecond
);

console.log(
  `Current time: ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);

// 2. Calculate Total Days Since Epoch (1970-01-01)

// Calculate the total number of days since January 1, 1970
const totalDaysSinceEpoch = Math.floor(now / millisecondsInADay);

console.log(`Total days since January 1, 1970: ${totalDaysSinceEpoch}`);

// 3. Calculate the Day of the Year
// To get the day of the year, you’ll need to know how many days have passed in the current year:

// Calculate how many milliseconds have passed since January 1st of the current year.
// Subtract that from the current timestamp to get the difference.

// Helper function to check if it's a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Get the current year
const millisecondsInAYear = millisecondsInADay * 365.25; // Accounts for leap years
const yearsSinceEpoch = Math.floor(now / millisecondsInAYear);
// const currentYear = 1970 + yearsSinceEpoch; // Year since 1970

// Get the start of the year in milliseconds
const daysInCurrentYear = isLeapYear(currentYear) ? 366 : 365;
const daysPassedThisYear = (totalDaysSinceEpoch % daysInCurrentYear) + 1;

console.log(`Current year: ${currentYear}`);
console.log(`Day of the year: ${daysPassedThisYear}`);

// 4. Calculate the Current Date (Year, Day of the Month)
// Since you're avoiding new Date(), calculating the current month and day of the month involves taking the days passed and mapping them to months manually, taking leap years into account. However, this approach would require constructing a manual mapping of days into months, considering leap years, which makes this calculation more complex without using built-in date functionality.

// recap:
// Total Time (Hours, Minutes, Seconds): We calculate it based on the number of milliseconds since the start of the current day.Total Days Since Epoch: Calculated by dividing the total milliseconds by the number of milliseconds in a day.Day of the Year: Calculated by checking how many days have passed in the current year (considering leap years).

// To calculate the current date (month and day of the month) manually, without using new Date(), we’ll break down how to determine the day of the year and then map that to the appropriate month and day of the month, accounting for leap years.

// Key Components:
// Date.now() gives the number of milliseconds since January 1, 1970.
// The current year, leap years, and days of the year are calculated manually.
// Months have different numbers of days, and February has 29 days in leap years.
// Manual Breakdown
// Leap Year Check:

// A leap year occurs every 4 years, but not every 100 years, unless divisible by 400.
// Month Days Mapping:

// Non-leap year:
// January: 31
// February: 28
// March: 31
// April: 30
// May: 31
// June: 30
// July: 31
// August: 31
// September: 30
// October: 31
// November: 30
// December: 31
// Leap year:
// February: 29 days.
// Step-by-Step Manual Calculation

// Step-by-Step Manual Calculation
// 1. Calculate the Current Year
// javascript
// Copy code
// const now = Date.now(); // Current time in milliseconds

// Constants
// const millisecondsInASecond = 1000;
// const millisecondsInAMinute = 60 * millisecondsInASecond;
// const millisecondsInAnHour = 60 * millisecondsInAMinute;
// const millisecondsInADay = 24 * millisecondsInAnHour;
// const averageMillisecondsInAYear = 365.25 * millisecondsInADay;  // Average year accounts for leap years

// Calculate the number of years since 1970
// const totalYearsSinceEpoch = Math.floor(now / averageMillisecondsInAYear);
// const currentYear = 1970 + totalYearsSinceEpoch;  // This gives us the current year

// console.log(`Current Year: ${currentYear}`);
// 2. Determine if the Current Year is a Leap Year
// javascript
// Copy code
// Function to check leap year
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// const leapYear = isLeapYear(currentYear);
// console.log(`Is Leap Year: ${leapYear}`);
// 3. Calculate the Day of the Year
// javascript
// Copy code
// Get the total milliseconds passed this year
// const januaryFirst = new Date(currentYear, 0, 1).getTime(); // Timestamp of Jan 1st of current year
// const millisecondsSinceYearStart = now - januaryFirst; // Milliseconds since the start of the year

// Calculate the total days passed in the current year
// const dayOfYear = Math.floor(millisecondsSinceYearStart / millisecondsInADay) + 1;
// console.log(`Day of the Year: ${dayOfYear}`);
// 4. Determine the Month and Day of the Month
// Now, we manually map the day of the year to the corresponding month and day of the month. We loop through the months and subtract the number of days in each month from the day of the year until we find the correct month.

// javascript
// Copy code
// Days in each month for non-leap year and leap year
// const daysInMonth = leapYear
//   ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  // Leap year
//   : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Non-leap year

// let remainingDays = dayOfYear;  // Start with the total days passed in the year
// let month = 0;  // Start with January (index 0)
// let dayOfMonth = 0;

// Loop through the months and subtract the days in each month until we find the current month
// for (let i = 0; i < daysInMonth.length; i++) {
//   if (remainingDays <= daysInMonth[i]) {
    // If remainingDays fit in this month, this is the correct month
//     month = i + 1;  // Months are 1-indexed (January = 1)
//     dayOfMonth = remainingDays;
//     break;
//   } else {
    // Otherwise, subtract this month's days and continue
//     remainingDays -= daysInMonth[i];
//   }
// }

// console.log(`Current Month: ${month}`);
// console.log(`Day of the Month: ${dayOfMonth}`);
// Summary:
// Day of the Year: We calculate how many days have passed since January 1st of the current year.
// Leap Year Check: We handle leap years manually by adding one day to February when needed.
// Month and Day Mapping: We subtract the number of days in each month from the day of the year to find the current month and day.

// Full Code
const nowTime = Date.now(); // Current timestamp in milliseconds

// Constants
const millisecondsInASecond = 1000;
const millisecondsInAMinute = millisecondsInASecond * 60;
const millisecondsInAnHour = millisecondsInAMinute * 60;
const millisecondsInADay = millisecondsInAnHour * 24;
const averageMillisecondsInAYear = millisecondsInADay * 365.25; // Account for leap years

// 1. Calculate the current year
const totalYearsSinceEpoch = Math.floor(nowTime / averageMillisecondsInAYear);
const currentYear = 1970 + totalYearsSinceEpoch;
console.log(`Current Year: ${currentYear}`);

// 2. Check if the year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
const leapYear = isLeapYear(currentYear);
console.log(`Is Leap Year: ${leapYear}`);

// 3. Calculate the day of the year
const januaryFirst = new Date(currentYear, 0, 1).getTime(); // Timestamp for Jan 1st
const millisecondsSinceYearStart = nowTime - januaryFirst; // Milliseconds since Jan 1st
const dayOfYear =
  Math.floor(millisecondsSinceYearStart / millisecondsInADay) + 1; // Day of the year
console.log(`Day of the Year: ${dayOfYear}`);

// 4. Map the day of the year to the month and day of the month
const daysInMonth = leapYear
  ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // Leap year
  : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Non-leap year

let remainingDays = dayOfYear;
let month = 0;
let dayOfMonth = 0;

for (let i = 0; i < daysInMonth.length; i++) {
  if (remainingDays <= daysInMonth[i]) {
    month = i + 1; // Months are 1-indexed
    dayOfMonth = remainingDays;
    break;
  } else {
    remainingDays -= daysInMonth[i];
  }
}

console.log(`Current Month: ${month}`);
console.log(`Day of the Month: ${dayOfMonth}`);

// To get the current hour in a 12-hour format, you can modify the getHours() method. JavaScript’s getHours() method returns the hour in 24-hour format (0-23), so you'll need to convert it to a 12-hour format.

// Here's how you can do it:

// Convert 24-hour format to 12-hour format:
// Use getHours() to get the hour in 24-hour format.
// Use the formula hour % 12 || 12 to convert it to 12-hour format:
// hour % 12: Converts 13–23 to 1–11.
// || 12: Ensures that 0 (midnight) becomes 12.

// const now = Date.now();
// const currentDate = new Date(now);

// Get the current hour in 24-hour format
// let hours24 = currentDate.getHours();

// Convert to 12-hour format
// let hours12 = hours24 % 12 || 12; // This converts 0 -> 12 and 13 -> 1

// console.log(`Current hour in 12-hour format: ${hours12}`);

// Adding AM/PM:
// To make the 12-hour format complete, you'll typically want to append either "AM" or "PM". You can determine whether it is AM or PM by checking if the hour is less than 12:

// const now = Date.now();
// const currentDate = new Date(now);

// let hours24 = currentDate.getHours();
// let hours12 = hours24 % 12 || 12;
// let period = hours24 >= 12 ? "PM" : "AM";

// console.log(`Current time: ${hours12} ${period}`);

// Output:
// Current time: 2 PM

