import {
  checkLength,
  isPalindrome,
  sortNumbers,
  sqrt,
  sumArray,
  fibonacci,
} from "./functions/fun";
import { UserInfo } from "./functions/data";
import "./App.css";

const letter = "hello everyone";
const length = checkLength(letter);

const word = "racecar";
const palindrome = isPalindrome(word);

const arr = [5, 2, 4, 1, 3];
const sortedNums = sortNumbers(arr);

const num = 9;
const sqrtNum = sqrt(num);

const sumTheArr = sumArray(arr);

const userId = 5;

const sequence = [1, 1, 2, 3];
const nextFibonacci = fibonacci(sequence);

const App = () => {
  return (
    <>
      <h1>hello everyone</h1>
      <div className="section">
        <p>the length of 'hello everyone' is {length}</p>
        <p>
          {word} is palindrome? {palindrome.toString()}
        </p>
        <p>{sortedNums}</p>
        <p>
          {num} after sqrt and round is {sqrtNum}
        </p>
        <p>
          the sum of {sortedNums} is {sumTheArr}
        </p>
      </div>
      <div className="section">
        <h3>user info</h3>
        <UserInfo userId={userId} />
      </div>
      <p>
        if the fibonacci array is {sequence.join(", ")} so the next num is{" "}
        {nextFibonacci}
      </p>
    </>
  );
};

export default App;
