const capitalize = (str: string) => {
  const _str = str;
  return _str.replace(/^\w/, (c) => c.toUpperCase());
};

export default capitalize;
