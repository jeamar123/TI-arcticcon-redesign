export const shortenText = (text, symbolsQty) =>
  text.length <= symbolsQty
    ? text
    : `${text.split("").splice(0, symbolsQty).join("")}...`;

export const isEmpty = (value) =>
  !(value && (value.length || Object.keys(value).length));

export const transformForm = (formObj) => {
  return Object.keys(formObj).reduce((acc, cur) => {
    return { ...acc, [cur]: formObj[cur].value };
  }, {});
};

export const debounce = (func, wait) => {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), wait);
  };
};
