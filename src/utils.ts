import dayjs from 'dayjs';

function capitalizeFirstLetter(string:string):string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRatingPercentage(rating:number):string {
  return `${(rating * 100 / 5)}%`;
}

function formatStringToDateTime(date:string):string {
  return dayjs(date).format('YYYY-MM-DD');
}

function formatStringToMonthYear(date:string):string {
  return dayjs(date).format('MMMM YYYY');
}

export {capitalizeFirstLetter, getRatingPercentage, formatStringToDateTime, formatStringToMonthYear};
