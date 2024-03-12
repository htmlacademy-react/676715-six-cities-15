function capitalizeFirstLetter(string:string):string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRatingPercentage(rating:number):string {
  return `${(rating * 100 / 5)}%`;
}

export {capitalizeFirstLetter, getRatingPercentage};
