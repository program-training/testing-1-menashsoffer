import axios from "axios";

export const checkLength = (letter: string) => {
  const length = letter.length;
  return length;
};

export const isPalindrome = (letter: string) => {
  const cleanStr = letter.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleanStr.split("").reverse().join("");
  return reversed === cleanStr;
};

export const sortNumbers = (arr: number[]) => {
  const sorted = arr.sort((a, b) => a - b);
  return sorted.join(", ");
};

export const sqrt = (num: number) => {
  return Math.sqrt(num);
};

export const sumArray = (arr: number[]) => {
  let total: number = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

export const getUser = async (userId: number) => {
  try {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fibonacci = (arr: number[]) => {
  if (arr.length < 2) {
    return 1;
  }
  const n1 = arr[arr.length - 1];
  const n2 = arr[arr.length - 2];
  return n1 + n2;
};
