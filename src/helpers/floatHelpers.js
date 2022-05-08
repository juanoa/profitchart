export const getTwoDecimals = (number) => {
  return parseFloat(parseFloat(number).toFixed(2))
}