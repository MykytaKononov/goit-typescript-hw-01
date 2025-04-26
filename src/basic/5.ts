enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend: (day: DayOfWeek) => boolean = (day) => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return true;
  }
  return false;
};
