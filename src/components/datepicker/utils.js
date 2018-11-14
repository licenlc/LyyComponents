export const isLeapYear = year => {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
}

export const getDays = (year, month) => {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28
  } else if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
    return 31
  } else {
    return 30
  }
}
