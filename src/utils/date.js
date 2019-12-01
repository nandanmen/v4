/**
 *
 * @param {Date} date
 */
export const getMonthText = date => {
  const numMonthMap = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return numMonthMap[date.getMonth()]
}
