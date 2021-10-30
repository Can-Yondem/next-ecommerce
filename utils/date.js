import moment from "moment";

const monthsArray = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const daysArray = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

export const calcDate = (date) => {
  var check = moment(date, "YYYY/MM/DD HH:mm:ss");
  var month = monthsArray[check.format("MM") - 1];
  var dayOfWeek = daysArray[check.isoWeekday()-1];
  var day = check.format("DD");
  var year = check.format("YYYY");
  var clock = check.format("HH:mm");
  return { month, day, dayOfWeek, year, clock };
};
