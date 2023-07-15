import {
  convertValidHH,
  convertValidM,
  convertValidYY,
  isValidInputM,
  isValidInputYYYY,
} from "./input";

describe("isValidInputYYYY", () => {
  it("case1 10 -> true", () => {
    const input = "10";
    const result = true;
    expect(isValidInputYYYY(input)).toBe(result);
  });

  it("case2 100 -> false", () => {
    const input = "100";
    const result = false;
    expect(isValidInputYYYY(input)).toBe(result);
  });

  it("case3 1000 -> true", () => {
    const input = "1000";
    const result = true;
    expect(isValidInputYYYY(input)).toBe(result);
  });

  it("case4 0900 -> false", () => {
    const input = "0900";
    const result = false;
    expect(isValidInputYYYY(input)).toBe(result);
  });
});

describe("convertValidYY", () => {
  it("case1", () => {
    const input = "23";
    const result = 2023;
    expect(convertValidYY(input, 2023)).toBe(result);
  });

  it("case2", () => {
    const input = "2030";
    const result = 2030;
    expect(convertValidYY(input, 2023)).toBe(result);
  });

  it("case3", () => {
    const input = "999";
    const result = 2023;
    expect(convertValidYY(input, 2023)).toBe(result);
  });
});

describe("convertValidMM", () => {
  it("case1 4入力の次に3", () => {
    const before = "4";
    const input = "3";
    const result = "3";
    expect(convertValidM(before, input)).toBe(result);
  });
  it("case2 5入力の次に2", () => {
    const before = "5";
    const input = "2";
    const result = "2";
    expect(convertValidM(before, input)).toBe(result);
  });
  it("case3 3入力の次に1", () => {
    const before = "3";
    const input = "1";
    const result = "1";
    expect(convertValidM(before, input)).toBe(result);
  });
  it("case3 1入力の次に2", () => {
    const before = "1";
    const input = "2";
    const result = "12";
    expect(convertValidM(before, input)).toBe(result);
  });
  it("case3 1入力の次に3", () => {
    const before = "1";
    const input = "3";
    const result = "3";
    expect(convertValidM(before, input)).toBe(result);
  });
});

describe("isValidInputM", () => {
  it("case1 3 -> true", () => {
    const input = "3";
    const result = true;
    expect(isValidInputM(input)).toBe(result);
  });
  it("case2 0 -> false", () => {
    const input = "0";
    const result = false;
    expect(isValidInputM(input)).toBe(result);
  });
});

describe("convertValidHH", () => {
  it("case1 4入力の次に1", () => {
    const beforeStr = "4";
    const inputStr = "1";
    const result = "1";
    expect(convertValidHH(beforeStr, inputStr)).toBe(result);
  });

  it("case2 1入力の次に2", () => {
    const beforeStr = "1";
    const inputStr = "2";
    const result = "12";
    expect(convertValidHH(beforeStr, inputStr)).toBe(result);
  });

  it("case3 3入力の次に2", () => {
    const beforeStr = "3";
    const inputStr = "2";
    const result = "2";
    expect(convertValidHH(beforeStr, inputStr)).toBe(result);
  });

  it("case3 2入力の次に4", () => {
    const beforeStr = "2";
    const inputStr = "4";
    const result = "4";
    expect(convertValidHH(beforeStr, inputStr)).toBe(result);
  });
});
