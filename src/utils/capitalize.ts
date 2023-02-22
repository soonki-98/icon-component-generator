const capitalize = (str: string) => {
  const _str = str.split("-");
  let result = "";

  _str.forEach((s) => (result += s.replace(/^\w/, (c) => c.toUpperCase())));
  return result;
};

export default capitalize;
