export const getTwoDecimals = (number: string) => {
  return parseFloat(parseFloat(number).toFixed(2))
}