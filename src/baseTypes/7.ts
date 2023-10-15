/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
}

const isWeekend = (day: Days): boolean => {
  if (day === Days.sunday || day === Days.saturday) {
    return true;
  }
  return false;
};
