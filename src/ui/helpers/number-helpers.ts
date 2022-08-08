export const convertToLegibleNumber = (number: Number) => {
  let numberStringify = number.toString();
  numberStringify = numberStringify.replace(".", ",")
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(numberStringify))
    numberStringify = numberStringify.replace(pattern, "$1.$2");
  return numberStringify;
}