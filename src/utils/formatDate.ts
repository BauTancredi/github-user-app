const monthNames = [
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
];

const formatDate = (created_at: Date) => {
  const date = new Date(created_at);

  const monthName = monthNames[date.getMonth()];
  return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
};

export default formatDate;
