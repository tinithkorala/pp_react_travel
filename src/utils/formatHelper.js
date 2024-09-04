export const formatDateMMYYYY = (dateStr) => {
  const date = new Date(dateStr);
  const options = { month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
