export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    timeZone: "UTC",
  };

  return date.toLocaleDateString("en-IN", options);
}
