import { includes } from "ramda";

export const isValidInputYYYY = (inputStr: string): boolean => {
  const parsed = parseInt(inputStr, 10);
  if (parsed >= 0 && parsed <= 99) return true;
  if (parsed >= 1000 && parsed <= 9999) return true;
  return false;
};

export const convertValidYY = (inputStr: string, todayYYYY: number): number => {
  const parsed = parseInt(inputStr, 10);
  if (parsed >= 0 && parsed <= 99) return 2000 + parsed;
  if (parsed >= 1000 && parsed <= 9999) return parsed;
  return todayYYYY;
};

const validNums = [10, 11, 12];
export const convertValidM = (beforeStr: string, inputStr: string): string => {
  const addNum = parseInt(beforeStr + inputStr, 10);
  if (beforeStr === "1" && includes(addNum, validNums)) return `1${inputStr}`;
  return inputStr;
};

export const convertValidValue = (
  beforeStr: string,
  inputStr: string,
  validStringList: string[],
  min: number,
  max: number
): string => {
  if (!includes(beforeStr, validStringList)) return inputStr;
  const toNum = parseInt(beforeStr + inputStr, 10);
  return toNum >= min && toNum <= max ? beforeStr + inputStr : inputStr;
};

export const convertValidHH = (beforeStr: string, inputStr: string): string => {
  const validHHString = ["0", "1", "2"];
  return convertValidValue(beforeStr, inputStr, validHHString, 0, 23);
};
export const convertValidmi = (beforeStr: string, inputStr: string): string => {
  const validHHString = ["0", "1", "2", "3", "4", "5"];
  return convertValidValue(beforeStr, inputStr, validHHString, 0, 59);
};

const validMonthList = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
export const isValidInputM = (inputStr: string): boolean =>
  includes(inputStr, validMonthList);

export const isValidInputHH = (inputStr: string): boolean => {
  const parsed = parseInt(inputStr, 10);
  return parsed >= 0 && parsed <= 23;
};

export const isValidInputMi = (inputStr: string): boolean => {
  const parsed = parseInt(inputStr, 10);
  return parsed >= 0 && parsed <= 59;
};

export const isValidInputD = (inputStr: string): boolean => {
  const parsed = parseInt(inputStr, 10);
  if (parsed >= 1 && parsed <= 31) return true;
  return false;
};

export const convertValidD = (beforeStr: string, inputStr: string): string => {
  const nums = ["0", "1", "2", "3"]; // 01とか31とかは日付として有効
  if (!includes(beforeStr, nums)) return inputStr; // 前回の入力、0,1,2,3以外については新規数字として扱う

  /* 足した結果が32以上のときはinputStrを返す */
  const toNum = parseInt(beforeStr + inputStr, 10);
  return toNum >= 32 ? inputStr : beforeStr + inputStr;
};
export const validStrings = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Tab",
  "Backspace",
  "Delete",
];

export const numStringList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
