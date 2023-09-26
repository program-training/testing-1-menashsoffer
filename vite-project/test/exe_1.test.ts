import { expect, test, describe } from "vitest";
import {
  checkLength,
  isPalindrome,
  sortNumbers,
  sqrt,
  sumArray,
  getUser,
  fibonacci,
} from "../src/functions/fun";

test("checking length", () => {
  expect(checkLength("hello everyone")).toBe(14);
});

test("checking if palindrome", () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test("sorting numbers", () => {
  expect(sortNumbers([5, 2, 4, 1, 3])).toEqual([1, 2, 3, 4, 5].join(", "));
});

describe("sqrt", () => {
  test("returns the square root of a number", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("returns NaN for negative numbers", () => {
    expect(sqrt(-1)).toBeNaN();
  });
});

describe("sum arr", () => {
  test("sum a array", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });
  test("check if its bigger then 9", () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBeGreaterThan(9);
  });
});

describe("gating user information", () => {
  test("check if user us valid", async () => {
    const expectedUser = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };
    const user = await getUser(1);
    expect(user).toEqual(expectedUser);
  });
});

test("calculates the next Fibonacci number", () => {
  expect(fibonacci([1, 1])).toBe(2);
  expect(fibonacci([1, 1, 2])).toBe(3);
  expect(fibonacci([1, 1, 2, 3, 5])).toBe(8);
});
