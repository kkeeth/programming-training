export const insertComma = (n: number): string => {
  if (!n) return "";

  const tmp = [...String(n)]
    .reverse()
    .map((item, i) => {
      if (i === 0) return item;
      return i % 3 === 0 ? item + "," : item;
    })
    .reverse();
  return tmp.join("");
};
