export const sortByDate = (game1, game2) => {
  let temp1 = game1.date.split("/");
  let temp2 = game2.date.split("/");

  let validDate1 = Date.parse(temp1[1] + "-" + temp1[0] + "-" + temp1[2]);
  let validDate2 = Date.parse(temp2[2] + "-" + temp2[1] + "-" + temp2[0]);

  return validDate2 - validDate1;
};
