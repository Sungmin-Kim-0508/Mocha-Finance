export const parsingData = historical => {
  return historical.map(item => {
    return {
      ...item,
      date: new Date(item.date)
    };
  });
};
