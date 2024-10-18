// get date formatted to 'dd/mm/yyyy hh:mm<am/pm>' format
export default function getFormattedDate(timestamp: number) {
  const date = new Date(timestamp);

  const day = formatTo2Digits(date.getDate());
  const month = formatTo2Digits(date.getMonth() + 1);
  const hours = date.getHours();
  const minutes = formatTo2Digits(date.getMinutes());

  let hours12Format = hours % 12 ? hours % 12 : '12';
  hours12Format = formatTo2Digits(hours12Format);

  const hoursAmPmValue = hours >= 12 ? 'pm' : 'am';

  return `${day}/${month}/${date.getFullYear()} ${hours12Format}:${minutes}${hoursAmPmValue}`;
}

// format value to 2 digits if it is single digin eg. '1' -> '01'
const formatTo2Digits = (value: string | number) => ('0' + value).slice(-2);
