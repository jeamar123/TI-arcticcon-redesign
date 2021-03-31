export const shortenText = (text, symbolsQty) =>
  text.length <= symbolsQty
    ? text
    : `${text.split("").splice(0, symbolsQty).join("")}...`;
