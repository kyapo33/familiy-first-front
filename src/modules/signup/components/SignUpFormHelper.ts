export const getCurrentDateInFormat = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${day}/${month}/${year}`;
};

type DateString = string;

type ComparisonResult = -1 | 0 | 1;

// Function to parse a date string in the format "DD/MM/YYYY" into a Date object
const parseDate = (dateString: DateString): Date => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day); // Month is 0-based, so we subtract 1
};

// Compare two date strings in "DD/MM/YYYY" format
export const compareDates = (dateString1: DateString, dateString2: DateString): ComparisonResult => {
  const dateFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!dateFormat.test(dateString1)) return 0;

  const date1 = parseDate(dateString1);
  const date2 = parseDate(dateString2);

  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error('Invalid date format');
  }

  if (date1 < date2) {
    return -1; // dateString1 is before dateString2
  } else if (date1 > date2) {
    return 1; // dateString1 is after dateString2
  } else {
    return 0; // Both dates are the same
  }
};

export const convertToISODate = (inputDate: string): string | null => {
  // Split the input date string into day, month, and year components
  const [day, month, year] = inputDate.split('/');

  // Create a new Date object (note that months are 0-based in JavaScript)
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day) + 1); // Subtract 1 from the month to make it 0-based

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return null; // Invalid date
  }

  // Get the ISO 8601 date string
  const isoDate = date.toISOString();

  return isoDate;
};
