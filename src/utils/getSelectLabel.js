export const getSelectLabel = (data, value) => {
  return data.find(({ value: _value }) => value === _value).label;
};