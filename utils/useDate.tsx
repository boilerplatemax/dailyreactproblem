export const useDate = () => {
  // const date_1 = new Date('12/23/2022');
  // const date_2 = new Date();
  // const days = (date_1: any, date_2: any) => {
  //   let difference = date_2.getTime() - date_1.getTime();
  //   let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  //   return TotalDays - 1;
  // };
  // return days(date_1, date_2);

  const date = new Date();
  return(date.getDate()<14?date.getDay():date.getDay()+7);
};
