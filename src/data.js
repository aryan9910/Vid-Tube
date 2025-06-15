export const API_KEY = "AIzaSyB45m76_ESLSbxl8FJyD5l8QPTvpaUMcVA";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
